import React from 'react';

const Dashboard = () => {

    return (

        <div>

            <main>

                <h1 className='mb-4 text-xl md:text-2xl'>DASHBOARD</h1>

                <h2 className='mb-4 text-xl md:text-1xl'>Datos Generales</h2>

                <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2'>

                    {/* Tarjeta de Usuarios */}
                    <div className="rounded-lg bg-white p-6 shadow-md border border-blue-200">

                        <h3 className="text-lg font-semibold text-blue-700 mb-2">Usuarios</h3>
                        <p className="text-3xl font-bold text-gray-900">3</p>
                        <p className="text-sm text-gray-500 mt-1">Usuarios registrados</p>

                    </div>

                    {/* Tarjeta de Categorías */}
                    <div className="rounded-lg bg-white p-6 shadow-md border border-indigo-200">

                        <h3 className="text-lg font-semibold text-indigo-700 mb-2">Categorías</h3>
                        <p className="text-3xl font-bold text-gray-900">6</p>
                        <p className="text-sm text-gray-500 mt-1">Categorías activas</p>

                    </div>

                </div>
                
                {/* Acciones Rápidas (Añadir usuarios y manejar categorías) */}

                <h2 className='mb-4 text-xl md:text-1xl'>Acciones rápidas</h2>

                <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2'>

                    <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition">

                        Añadir usuarios

                    </button>

                    <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition">

                        Manejar categorías

                    </button>

                </div>
                
                {/* Actividad reciente */}

                <div className="mt-8">

                    <h2 className="mb-4 text-xl font-semibold text-gray-800">Actividad Reciente</h2>

                    <div className="space-y-4">

                        {/* Evento 1 */}
                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">

                        <p className="text-sm text-gray-600">

                            <span className="font-medium text-blue-600">Roberto</span> añadió un nuevo usuario.

                        </p>

                        <p className="text-xs text-gray-400 mt-1">Hace 2 minutos</p>

                        </div>

                        {/* Evento 2 */}
                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">

                        <p className="text-sm text-gray-600">

                            Se actualizaron las <span className="font-medium text-indigo-600">categorías</span> del sistema.

                        </p>
                        <p className="text-xs text-gray-400 mt-1">Hace 10 minutos</p>

                        </div>

                        {/* Evento 3 */}
                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">

                        <p className="text-sm text-gray-600">

                            <span className="font-medium text-green-600">Roberto</span> eliminó un usuario.

                        </p>
                        <p className="text-xs text-gray-400 mt-1">Hoy a las 11:45</p>
                        
                        </div>
                    </div>
                    </div>

            </main>

        </div>

    );

};

export default Dashboard;