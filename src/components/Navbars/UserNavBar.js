import React from 'react'
import {
  AiOutlineEuro,
  AiOutlineLogout
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth'
const UserNavBar = () => {
  const dispatch = useDispatch()
  const Salir = () => {
    dispatch(startLogout())
  }
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
        <Link to='cupones' className='relative flex flex-row  font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          Cupones
          <AiOutlineEuro />
        </Link>
        <Link to='mensajes' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
          <span>Mensajes</span>
        </Link>
        <Link to='/' onClick={Salir} className='pt-1 w-full relative flex flex-row  text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 '>
          <span className='inline-flex  items-center text-red-500'>
            <AiOutlineLogout />
          </span>
          <span className='pl-1 font-semibold text-sm tracking-wide text-red-500 truncate font-sans'>Salir</span>
        </Link>
      </div>

    </div>
  )
}

export default UserNavBar
