import React from 'react'
import {
  AiOutlineEuro
} from 'react-icons/ai'

const UserNavBar = () => {
  return (
    <div className='space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4'>

      <div>
        <button type='button' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          <span>Perfil</span>
        </button>
        <button type='button' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          <span>Mis Pedidos</span>
        </button>
        <button type='button' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          <span>Direccion</span>
        </button>
        <button type='button' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          Cupones
          <AiOutlineEuro />
        </button>
        <button type='button' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          <span>Mensajes</span>
        </button>
      </div>

    </div>
  )
}

export default UserNavBar
