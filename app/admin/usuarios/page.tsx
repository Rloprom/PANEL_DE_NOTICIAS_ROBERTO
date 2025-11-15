import React from 'react';
import FormularioUsuario from "./components/FormularioUsuario";
import FormularioModificarUsuario from "./components/FormularioModificarUsuario";
import ListaUsuarios from './components/ListaUsuarios';

const URL = "https://fallible-tenthly-memphis.ngrok-free.dev/api/usuarios";

/*async function mandarAapi(token:string, router: any) {

    try {

        const data = {

            token: token,

        };

        // Enviar con fetch a la API
        console.log(JSON.stringify(data));
        const response = await fetch(URL, {

            method: "POST",
            headers: {

                "Content-Type": "application/json",

            },
            body: JSON.stringify(data)

        });

        // Si la respuesta no es ok
        if (!response.ok) {
            router.push("/error");
            return;
        }

        // Intentar obtener el JSON de la respuesta
        const result = await response.json();
        console.log("Respuesta de la API:", result);

        // Verificar si la respuesta fue exitosa
        if (result && result.success) {
          // !!! aqui se tiene que poner los case para cada tipo de usuario!!! 
            router.push("/dashboard");
        } else {
            router.push("/error");
        }
    } catch (error) {
        // Captura cualquier error 
        router.push("/error");
    }
}
    */

const Usuarios = () => {

    return (

        <div>

            <h1 className='mb-4 text-xl md:text-2xl'>USUARIOS</h1>

            <ListaUsuarios/>


        </div>

    );

};

export default Usuarios;