import React from 'react'
import { Link } from 'react-router-dom'

const UserNavBar = () => {
  return (
    <div className='space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4'>

      <div>
        <Link to='perfil' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          <span>Perfil</span>
        </Link>
        <Link to='pedidos' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          <span>Mis Pedidos</span>
        </Link>
        <Link to='direccion' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          <span>Direccion</span>
        </Link>

        <Link to='mensajes' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          <span>Mensajes</span>
        </Link>

      </div>

    </div>
  )
}

export default UserNavBar
