import React from 'react';
import{Outlet,Link} from 'react-router-dom';

export const Menu = () => {
    return (
        <div className='absolute-top-0'>
            <nav className='p-4 bg-sky-800'>
                <ul className='flex space-x-4 text-white'>
                    <li className='text-white'>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/manualTecnico">Manual Tecnico</Link>
                    </li>
                    <li>
                        <Link to="/manualUsuario">Manual Usuario</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet/>
        </div>
         
    )
}