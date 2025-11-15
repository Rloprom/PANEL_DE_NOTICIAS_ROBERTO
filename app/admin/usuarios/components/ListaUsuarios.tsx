"use client";

import React, { useEffect, useState } from "react";
import EliminarUsuarios from "./EliminarUsuarios";
import FormularioModificarUsuario from "./FormularioModificarUsuario";
import FormularioUsuario from "./FormularioUsuario";

const URL = "https://fallible-tenthly-memphis.ngrok-free.dev/api/usuarios";

//Interfaz de la estructura del usuario
interface Usuario {

    id: number;
    nombre: string;
    email: string;
    rol: string;

}

//Obtiene y muestra la lista de usuarios
const ListaUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]); //Lista de usuarios
    const [cargando, setCargando] = useState(true); //Indica si se está esperando una respuesta
    const [error, setError] = useState(""); //Almacena los mensajes de error
    const [usuarioEditando, setUsuarioEditando] = useState<Usuario | null>(null) //Almacena el usuario que está siendo editado
    const [usuarioEliminando, setUsuarioEliminando] = useState<Usuario | null>(null); //Almacena el usuario que está siendo eliminado

//Carga los datos
const fetchUsuarios = async () => {

    setCargando(true);
    setError("");

    try {

    //Gestión del token
    //const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    /*if (!token) {

        setError("No hay token disponible.");
        setCargando(false);
        return;

    }*/

    //Solicitud al servidor para obtener los usuarios
    const res = await fetch(URL, {

        headers: {

        //Authorization: `Bearer ${token}`,

        },

    });

    //Obtiene los usuarios
    const data = await res.json();

    //Verifica que los usuarios se hayan obtenido correctamente
    if (res.ok && Array.isArray(data.usuarios)) {

        setUsuarios(data.usuarios);

    }else{

        setError("Error al obtener usuarios.");

    }

}catch(error){

    setError("Error de conexión con el servidor.");

} finally { //Finaliza la carga

    setCargando(false);

}

};

useEffect(() => {

    fetchUsuarios();

}, []);

return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded shadow border border-gray-200">

        {/* Formulario para crear un nuevo usuario */}
        <FormularioUsuario onCreado={fetchUsuarios}/>

        {/*Lista de usuarios*/}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Lista de Usuarios</h2>

        {/*Muestra el estado*/}
        {cargando && <p className="text-gray-600">Cargando usuarios...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {/* Genera la tabla al terminar de cargar y si no hay errores*/}
        {!cargando && !error && (

        <table className="w-full table-auto border-collapse">

            <thead>

                <tr className="bg-gray-100 text-left text-sm text-gray-700">

                <th className="p-2 border">Nombre</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Rol</th>
                <th className="p-2 border">Acciones</th>

                </tr>

            </thead>

            <tbody>

                {usuarios.map((usuario) => (

                <tr key={usuario.id} className="text-sm text-gray-800 hover:bg-gray-50">

                    <td className="p-2 border">{usuario.nombre}</td>
                    <td className="p-2 border">{usuario.email}</td>
                    <td className="p-2 border capitalize">{usuario.rol}</td>
                    <td className="p-2 border">

                    {/* BOTONES EDITAR Y ELIMINAR */}
                    <button className="text-blue-600 hover:underline mr-2" onClick={() => setUsuarioEditando(usuario)}>

                        Editar

                    </button>
                    <button className="text-red-600 hover:underline" onClick={() => setUsuarioEliminando(usuario)}>

                        Eliminar

                    </button>


                    </td>

                </tr>

            ))}

            </tbody>

        </table>

    )}

    {usuarioEditando && (

        <div className="mt-6">

            <FormularioModificarUsuario nombreActual={usuarioEditando.nombre} email={usuarioEditando.email} 
            onModificado={() => {
            fetchUsuarios(); //Actualiza la lista
            setUsuarioEditando(null); //Cierra el formulario
            }}
            />

        </div>

    )}

    {usuarioEliminando && (

        <div className="mt-6">

            <EliminarUsuarios email={usuarioEliminando.email} 
            onEliminado={() => {
            fetchUsuarios(); //Actualiza la lista
            setUsuarioEliminando(null); //Oculta la confirmación
            }}
            />

            <button className="text-sm text-gray-500 hover:underline mt-2" onClick={() => setUsuarioEliminando(null)}>

                Cancelar

            </button>

        </div>

    )}

    </div>

);

};

export default ListaUsuarios;
