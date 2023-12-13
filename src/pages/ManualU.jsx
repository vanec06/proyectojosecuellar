import React from "react";

const ManualUsuario = () => {
  return (
    <div className="flex flex-col w-4/5 mx-auto my-12 bg-white rounded-md shadow-lg">
      <div className="flex justify-center py-6 bg-gray-200 rounded-t-md">
        <h1 className="text-2xl font-semibold">Manual De Usuario</h1>
      </div>
      <div className="px-8 py-6">
        <p className="text-base text-gray-700">
          {/* Contenido del manual */}
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Tabla de contenido</h2>
          <ol className="list-decimal pl-4">
            <li className="mb-2">
              <a href="#seccion-1" className="text-blue-500 hover:underline">
                Objeto
              </a>
            </li>
            <li className="mb-2">
              <a href="#seccion-2" className="text-blue-500 hover:underline">
                Deficiones
              </a>
            </li>
            <li className="mb-2">
              <a href="#seccion-3" className="text-blue-500 hover:underline">
                ¿Que es el manual de usuario?
              </a>
            </li>
            <li className="mb-2">
              <a href="#seccion-4" className="text-blue-500 hover:underline">
                Desarrollo del manual del usuario
              </a>
            </li>
            <li className="mb-2">
              <a href="#seccion-5" className="text-blue-500 hover:underline">
                Administracion de datos del usuario
              </a>
            </li>
            <li className="mb-2">
              <a href="#seccion-6" className="text-blue-500 hover:underline">
                Ver maquinas del SENA
              </a>
            </li>
          </ol>
        </div>
        <div className="mt-8">
          <h2 id="seccion-1" className="text-xl font-semibold mb-2">
            1. Objetivo
            </h2>
          <p>
          El objetivo principal de un aplicativo de inventario de máquinas y mantenimientos es facilitar la gestión eficiente de los activos industriales, optimizando los procesos relacionados con el control de inventario y el mantenimiento de las máquinas
          </p>
        </div>
        <div className="mt-8">
          <h2 id="seccion-2" className="text-xl font-semibold mb-2">
           2. Definiciones
          </h2>
          <p>
          IDM: Inventario De Maquinas
          </p>
        </div>
        <div className="mt-8">
          <h2 id="seccion-3" className="text-xl font-semibold mb-2">
            3. ¿Que es el manual de usuario?
          </h2>

          <p>
          Un manual de usuario es un documento informativo que proporciona instrucciones detalladas sobre el uso y funcionamiento de un producto o servicio. Su propósito es guiar a los usuarios, ofreciendo información paso a paso para maximizar la eficacia y seguridad en la utilización del producto.
          </p>
        </div>
        <div className="mt-8">
  <h2 id="seccion-4" className="text-xl font-semibold mb-2">
    3. Desarrollo al manual del usuario
  </h2>
  <p>
    <h1 className="font-semibold">ACCESO A LA APLICACION</h1>
    Para acceder a la aplicacion IDM se debe estar conectado a una red local, no se podra iniciar desde red externas o lejos de la local.
    <br />
    {/* agregar imagen de localhost */}
    <br />
    <img className="mx-auto w-96 h-52" src="local3.png" alt="node" />
    <br />
    Esta es la vista principal de la pagina de inicio del aplicativo(Esto es solo un prototivo):
    {/* agregar imagen de la vista principal */}
    <br />
    <img className="mx-auto w-96 h-52" src="inicio.png" alt="node" />
    <br />
    Una vez haya cargado la pagina de inicio, podra acceder al login para validarse con la identificacion y contraseña, los cuales por defecto sera el numero de documento de la persona.
     {/* agregar imagen de login */}
     <br />
    <img className="mx-auto w-96 h-52" src="login.png" alt="node" />
    <br />
    Una vez el usuario haya iniciado, sera dirigido a la pagina principal de IDM.
    {/* agregar imagen del menu principal. */}
    <br />
    <img className="mx-auto w-96 h-52" src="principal1.png" alt="node" />
    <br />
    <h1 className="font-semibold">VER MAQUINAS DEL SENA</h1>
    {/* agregar imagen del menu principal. */}
    El usuaria podra vizualizar todas las maquinas existentes en el SENA
    <br />
    <img className="mx-auto w-96 h-52" src="principal1.png" alt="node" />
    <br />
  </p>
</div>
      </div>
    </div>
  );
};

export default ManualUsuario;
