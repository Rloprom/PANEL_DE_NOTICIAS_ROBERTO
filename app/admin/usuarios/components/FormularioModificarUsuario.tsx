"use client";

import React, { useState } from "react";

const URL = "https://fallible-tenthly-memphis.ngrok-free.dev/api/usuarios";

//Props que recibe el componente
interface Props {

    nombreActual: string; //Nombre actual del usuario que está siendo modificado
    email: string; //Email del usuario que está siendo modificado
    onModificado?: () => void; //Actualiza la lista de usuarios al modificar un usuario

}

const FormularioModificarUsuario: React.FC<Props> = ({ nombreActual, email, onModificado }) => {

    const [nombre, setNombre] = useState(nombreActual); //Estado para el nuevo nombre
    const [mensaje, setMensaje] = useState(""); //Mensaje de exito o error

    //Función que realiza la petición de modificado al backend
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    //Gestión del token
    //const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    /*

    if (!token) {

        setMensaje("No hay token disponible.");
        return;

    }*/

    try {
        //Solicitud al servidor para modificar el usuario
        const response = await fetch(URL, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json",
            //Authorization: `Bearer ${token}`,

        },

        body: JSON.stringify({
            
            email: email,
            nuevoNombre: nombre 
        }),

    });

    //Obtiene el resultado
    const result = await response.json();

    //Si todo es correcto lo indica y actualiza la lista
    if (response.ok && result.success) {

        setMensaje("Nombre actualizado.");
        if (onModificado) onModificado(); //Actualiza la lista al actualizar el nombre

    }else{ //Si no indica que ha habido un error

        setMensaje("Error al actualizar el nombre.");

    }

}catch(error){ //Si no logra conectarse con el servidor lo indica

    setMensaje("Error de conexión con el servidor.");

    }
};

return (

    //Formulario

    <form onSubmit={handleSubmit} className="max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">

        <h2 className="text-xl font-semibold text-gray-800">Modificar Nombre</h2>

        <div>

            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">

            Nuevo nombre

            </label>

        <input

            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

        />

        </div>

        {/* Botón de guardar cambios */}

        <button type="submit" className="w-full rounded bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-500 transition">

            Guardar cambios

        </button>

        {/* Muestra el mensaje*/}

        {mensaje && <p className="text-sm text-gray-600 mt-2">{mensaje}</p>}

    </form>

    );
  
};

export default FormularioModificarUsuario;
