/* eslint-disable react/jsx-indent */

import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { GiPineTree, GiHamburgerMenu } from 'react-icons/gi'
import { RiShoppingCartLine } from 'react-icons/ri'

import { startLogout } from '../../actions/auth'
export default function PublicNavBar () {
  const dispatch = useDispatch()
  const Salir = () => {
    dispatch(startLogout())
  }
  const abrircerrar = () => { console.log('abrir/cerrar') }
  const { isLoggedIn } = useSelector(state => state.auth)
  /* const { nombre } = useSelector(state => state.auth.user) */
  return (
      <nav className='text-white bg-gray-900 w-full flex relative justify-between items-center mx-auto px-8 h-16'>
      <div className='inline-flex'>
        <GiPineTree size={28} />
        <Link className='text-3xl font-bold font-heading' to='/'>Emsemure</Link>

      </div>
      <div className='hidden sm:block flex-initial'>
      <div className='flex justify-end items-center relative'>
        <div className='flex mr-4 items-center'>
        <Link to='/categorias' className='inline-block py-2 px-3 hover:bg-gray-700 rounded-full'>
              <div className='flex items-center relative cursor-pointer whitespace-nowrap'>Categorias</div>
        </Link>
        <div className='block relative'>
        {isLoggedIn
          ? <Link className='p-2 hover:bg-gray-700 rounded-full' to='/usuario/panel'>Panel de usuario</Link>
          : <Link className='p-4' to='/login'>Inicia Sesion</Link>}

        </div>
        <div className='px-2 block relative hover:bg-gray-700 rounded-full'>
          {isLoggedIn
            ? <div className='justify-center flex  '>
              <Link className='self-center px-2 relative flex flex-row' to='/usuario/carrito'><RiShoppingCartLine /></Link>

              </div>
            : ''}
        </div>
        <div className='block hover:bg-gray-700 rounded-full'>
            <div className='inline relative px-2'>
            {isLoggedIn
              ? <Link to='/inicio' onClick={Salir} className=''>

              <span className='font-semibold text-sm tracking-wide text-red-500 truncate font-sans  '>Salir</span>
                </Link>
              : ''}
            </div>
        </div>
        <div className='px-5  cursor-pointer md:hidden' onClick={abrircerrar}>
        <GiHamburgerMenu size={28} />
        </div>
        </div>

      </div>

      </div>
      </nav>

  )
}
