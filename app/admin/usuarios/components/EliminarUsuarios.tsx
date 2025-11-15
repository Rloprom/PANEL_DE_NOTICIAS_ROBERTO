"use client";

import React, { useState } from "react";

const URL = "https://fallible-tenthly-memphis.ngrok-free.dev/api/usuarios";

//Props que recibe el componente
interface Props{

    email: string; //Email del usuario eliminado
    onEliminado?: () => void; //Actualiza la lista al eliminar a un usuario

}

const EliminarUsuarios: React.FC<Props> = ({email, onEliminado }) => {

    const [mensaje, setMensaje] = useState("");
    const [confirmado, setConfirmado] = useState(false);

    //Función que realiza la petición DELETE al backend
    const handleEliminar = async () => {

        //Gestión del token
        //const token = typeof window !== "undefined" ? localStorage.getItem("token"): null;

        /*if(!token){

            setMensaje("No hay token disponible.");
            return;

        }*/

        try{
            //Solicitud al servidor para eliminar al usuario
            const res = await fetch(URL, {

                method: "DELETE",
                headers: {

                    "Content-Type": "application/json",
                    //Authorization: `Bearer ${token}`,

                },

                body: JSON.stringify({ email }),

            });

            //Obtiene el resultado
            const result = await res.json();

            //Si la respuesta es correcta y se elimina al usuario se muestra por pantalla
            if(res.ok && result.success){

                setMensaje("Usuario eliminado.");
                if(onEliminado) onEliminado(); //Refresca la lista al eliminar el usuario

            }else{ //Si no indica el error

                setMensaje("Error al eliminar al usuario.");

            }

        }catch(error){ //Si no logra conectarse da error al conectarse con el servidor

            setMensaje("Error al conectar con el servidor.");

        }

    };

    return (

        //Botones
        <div className="space-y-2">

            {!confirmado ? (

                //Botón de eliminar
                <button onClick={() => setConfirmado(true)} className="text-red-600 hover:underline text-sm">

                    Eliminar

                </button>

            ) : (

                //Capa de confirmación de eliminación
                <div className="space-x-2 text-sm">

                    <span>¿Confirmas la eliminación?</span>

                    {/* Si */}
                    <button onClick={handleEliminar} className="text-red-600 hover:underline font-medium">

                        Si

                    </button>

                    {/* No */}
                    <button onClick={() => setConfirmado(false)} className="text-gray-600 hover:underline font-medium">

                        No

                    </button>

                </div>

            )}

            {/* Muestra el mensaje*/}
            {mensaje && <p className="text-sm text-gray-600">{mensaje}</p>}

        </div>

    );

};

export default EliminarUsuarios;