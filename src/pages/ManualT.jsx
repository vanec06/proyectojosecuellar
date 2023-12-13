import React from "react";

const manualTecnico = () =>{
    return(
    <div className="flex flex-col w-4/5 mx-auto my-12 bg-white rounded-md shadow-lg">
        <div className="flex justify-center py-6 bg-gray-200 rounded-t-md">
            <h1 className='text-2xl font-semibold'>Manual Tecnico</h1>
        </div>
        <div className="px-8 py-6">
        <div className="p-2">
      <h2 className="text-center font-bold text-sm leading-7 my-4">
        1. OBJETIVOS
      </h2>
      <h3 className="font-bold text-sm my-2">
        1.1 Objetivo General
      </h3>
      <p className="text-sm my-4">
        Propósito General Suministrar a los encargados de la gestión de la plataforma la información requerida sobre
        los programas y herramientas empleados en el desarrollo y configuración del aplicativo IDM
      </p>
      <h3 className="font-bold text-sm my-2">
        1.2 Objetivos Específicos
      </h3>
      <p className="text-sm">
        Detallar los requisitos de hardware y software requeridos para instalar y operar el sistema.
        Describir las características técnicas del aplicativo.
        Indicar las herramientas empleadas en el desarrollo y diseño de la aplicación.
      </p>
    </div>
    <div className="my-4 border-t-2 border-black"></div>

      <h2 className="text-center font-bold text-sm leading-7 my-4">INTRODUCCI0N</h2>
      <p className="text-sm">
        Este manual se crea con el propósito de describir el sistema en términos técnicos, proporcionando los pasos necesarios para la instalación, desarrollo y ejecución del aplicativo. Es esencial tener en cuenta los requisitos mínimos de software y hardware para llevar a cabo la instalación correcta del sistema. <br /> <br />
      
        El objetivo del aplicativo IDM es llevar un correcto sistema de inventario, donde se podrá notificar los mantenimientos necesarios para cada maquina y donde se podrá encontrar información completa de ellas mismas. <br /> <br />
      
        Se aconseja que este manual sea manejado exclusivamente por la persona encargada de administrar, editar o configurar nuestro aplicativo, con el fin de garantizar la seguridad de los datos almacenados en la base de datos.La configuración de este manual está hecha para el sistema operativo Ubuntu Server.
      </p>
      <div className="my-4 border-t-2 border-black"></div>

      <h2 className="font-bold text-sm text-center my-7">
        2. ESQUEMA O MODELO DE REQUERIMIENTOS
      </h2>
      <h3 className="font-bold text-sm my-2">
         2.1 REQUERIMIENTOS
      </h3>
      <p>
        Breve descripcion de los requerimientos y funcionalidades del proyecto THE-MACHINES <br />

        <h3 className="font-bold text-sm my-2"> 
        Usuarios:<br />
        </h3>
        El sistema permitira el registro,actualización, dada de baja, bucar y listar todos los usuarios que se encuentren registrados en el sistema<br />
        Tipos de usuarios: administradores, técnicos y usuarios regulares.<br />

        <h3 className="font-bold text-sm my-2">
        Máquinas:<br />
        </h3>
        
        Sistema que permita el registro,de nuevas máquinas al inventario como tambien permitira que se pueda actualizar,buscar,listar y dar de baja las maquinas que desee pero algunas de estas funcionalidades dependen del administrado.<br />


        <h3 className="font-bold text-sm my-2">
        Mantenimientos:<br />
        </h3>
        Sistema permitara el registro, actualización, listar y buscar los mantenimientos realizados a las maquinas.<br />

        <h3 className="font-bold text-sm my-2">
        Ambiente y Area:<br />
        </h3>
        Sistema permitara el registro, actualización, listar y buscar el ambiente y la area registrados en el sistema.<br />
      </p>
      <h3 className="font-bold text-sm my-2">
        2.2 CASO DE USO
      </h3>
      <div className="flex items-center justify-center" >
      <img className="h-96" src="CASO DE USO.jpg" alt="" />
      </div>
      

      <h3 className="font-bold text-sm my-2">
        2.3 MODELO DE DATOS
      </h3>
      <div className="flex items-center justify-center" >
      <img className="h-96" src="Modelo entidad relacion-actualizado 1.jpeg" alt="" />
      </div>

      <h3 className="font-bold text-sm my-2">
        2.4 MODELO DE BASEDE DATOS
      </h3>
      <div className="flex items-center justify-center" >
      <img className="h-96" src="baseDatos.png" alt="" />
      </div>
      <div className="my-4 border-t-2 border-black"></div>

      
      <h2 className="font-bold text-sm text-center my-7">
        3. REQUISITOS TÉCNICOS MINIMOS DE HARDWARE
      </h2>

      <h3 className="font-bold text-sm my-2">
        Equipo de cómputo con las siguientes características:

      </h3>
      <p className="mt-5">
      - RAM: 4GB <br />
      - Almacenamiento: Mínimo 120Gb. <br />
      - Procesador: Intel Core Celeron N4020 o superior. <br />
      </p>

      <h3 className="font-bold text-sm my-5">
        Información técnica del servidor implementado:
      </h3>
      <p>
      - Frecuencia - 3.70 GHz<br />
      - RAM instalada 32.0 GB <br />
      - Tipo de sistema-Sistema operativo de 64 bits <br />
      - Sistema operativo-Linux Ubuntu Server <br />
      - Versión-23.10
      </p>

      <h2 className="font-bold text-sm text-center my-7">
      4. REQUISITOS TÉCNICOS MINIMOS DE SOFTWARE
      </h2>
      <p>
      - Privilegios de administrador. <br />
      - Sistema Operativo: Windows,Linux <br />
      - Navegadores de internet: Google Chrome <br />
      </p>
      <h2 className="font-bold text-sm text-center my-7">
      5. HERRAMIENTAS UTILIZADAS PARA LA INSTALACION Y EJECUCION DEL APLICATIVO
      </h2>

      <div className="flex items-center mt-8">
      <p className="mr-4 text-justify">
      Node.js: Es un ambiente basado en eventos diseñado 
      para desarrollar aplicaciones expansibles, permitiéndote 
      establecer y administrar varias conexiones al mismo 
      tiempo. Debido a esta característica, no necesitas 
      preocuparte por la detención de procesos, ya que no hay 
      interrupciones.
      </p>
    <img className="w-64 h-32" src="node.jpeg" alt="node" />
  </div>
      
      
      <div className="flex items-center mt-8">
      <p className="mr-4 text-justify">
      MYSQL: es un sistema de administración de bases de datos relacional que 
      posibilita almacenar y acceder a la información mediante diversos motores de 
      almacenamiento, como InnoDB, CSV y NDB. PostgreSQL también tiene la capacidad 
      de replicar datos y fragmentar tablas para mejorar la eficiencia y la 
      resiliencia.
      </p>
        <img  className="w-52 h-32" src="mysql.png" alt="" />
      </div>

      <div className="flex items-center mt-8">
      <p className="mr-4 text-justify">
      NPM:  npm, Node Package Manager, es el administrador de paquetes predeterminado para Node.js. 
      Facilita la instalación, actualización y gestión de bibliotecas y herramientas de desarrollo 
      en proyectos JavaScript. Permite a los desarrolladores compartir y distribuir fácilmente código, 
      simplificando el desarrollo de aplicaciones escalables y eficientes.
 
      </p>
        <img  className="w-52 h-32" src="npm.png" alt="" />
      </div>
      <div className="my-4 border-t-2 border-black"></div>
      <h2 className="font-bold text-sm text-center my-7">
      6. INSTALACION DEL SERVIDOR LOCAL
      </h2>
      <p>
      El servidor local proporciona el entorno para ejecutar un sistema de inventario de máquinas, donde se almacenarán y procesarán los datos. Este manual detalla la instalación en Ubuntu Server en un sistema operativo Linux, requiriendo privilegios de super usuario para configurar correctamente los paquetes y programas. Se recomienda actualizar los paquetes antes y después de la instalación, para garantizar la última versión y estabilidad del software.
      </p>

      <h2 className="font-bold text-sm text-center my-7">
      6.1. INSTALACION DE Node.JS
      </h2>
      <p>
      Para instalar NodeJS en Ubuntu Server se debe 
      estar iniciado como super usuario.
      Ejecutando la siguiente codigo en la consola
      apt-get install nodejs y luego empezara la descarga 
      de paquetes.
      </p>
      <img src="installnpm.png" alt="installnpm.png" />

      <h2 className="font-bold text-sm text-center my-7">
      6.2 INSTALACION DE npm (Node Package Manager)
      </h2>
      <p>
      Para instalar npm en Ubuntu Server se debe estar 
      iniciado como super usuario o usuario root.
      Ejecutando la siguiente comando en la consola
      sudo apt install npm
      </p>
      <img src="install.png" alt="" />

      <h2 className="font-bold text-sm text-center my-7">
      6.3. INSTALACION DE MySQL
      </h2>
      <p>
        Para instalar el servidor de mysql, y montar la base de datos ejecuto el siguiente comando 
      </p>
      <img src="serve.png" alt="" /><br />
      <p>
      Para comprobar la instalación de mysql
      ejecutamos el siguiente comando mysql -u root y si todo 
      mysql>
      esto nos indica que estamos en la terminal de MySQL en 
      Linux.
      </p>
      <img src="installmysql.png" alt="" /><br />

      <p>
        Una vez estamos trabajando en MYSQL utilizamos el siguiente comando para importar la base de datos
      </p>
      <img src="installmys.png" alt="" /><br />

      <h2 className="font-bold text-sm text-center my-7">
      6.3. INSTALACION DE PM2
      </h2>
      <p>
      Para instalar pm2 en Ubuntu Server se debe estar 
      iniciado como super usuario.
      Ejecutando la siguiente comando en consola  
      npm install pm2 -g.
      Y deberá esperar hasta que finalice la descarga.
      </p>
      <img src="npm2.png" alt="" /><br />

      <p>
      Para comprobar la instalación del programa se 
      ejecuta pm2 start app.js y si todo ha 
      salido bien deberá mostrar la siguiente.
      </p>
      <img src="start.png" alt="" /><br />

      <p>
        Una vez comprobada la instalación utilizo el siguiente comando pm2 start npm --run dev para inicializar el seridor vite de react con pm2
      </p>
      <img src="vite.png" alt="" /><br />
      <p>
        Luego de mostarme la tabla anterior utilizo el comando pm2 monit para visualizar la informacion en tiempo real y verificar si se presenta algun error
      </p>
      <img src="monit.png" alt="" /><br />

      <p>
      Para acceder a la aplicación desplegada en la red se debe poner la dirección ip del 
      servidor mas el puerto de la aplicación en este ejemplo sería así:
      <h3 className="font-bold text-sm ">
      127.0.0.1
      </h3>
      </p>
      
        </div>
    </div>
    );
    };
export default manualTecnico;