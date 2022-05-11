
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GiPineTree, GiHamburgerMenu } from 'react-icons/gi'
import { RiShoppingCartLine } from 'react-icons/ri'
export default function PublicNavBar () {
  const abrircerrar = () => { console.log('abrir/cerrar') }
  const { isLoggedIn } = useSelector(state => state.auth)
  const { nombre } = useSelector(state => state.auth.user)
  return (
    <nav className='flex justify-between items-center bg-gray-900 text-white w-full h-16'>
      <div className='px-4 items-center flex w-full md:px-20'>
        <GiPineTree size={28} />
        <Link className='text-3xl font-bold font-heading' to='/'>Emsemure</Link>

      </div>
      <div className='items-center justify-center w-full  hidden md:block '>
        <span className='flex items-center justify-center w-full'>
          <Link className='p-4' to='/categorias'>Categorias</Link>
          {isLoggedIn ? <Link className='p-4' to='/usuario/panel'>{nombre}</Link> : <Link className='p-4' to='/login'>Inicia Sesion</Link>}

          <Link className='p-4 flex items-center' to='/usuario/carrito'><RiShoppingCartLine /></Link>
        </span>
      </div>

      <div className='px-5  cursor-pointer md:hidden' onClick={abrircerrar}>
        <GiHamburgerMenu size={28} />
      </div>

    </nav>

  )
}
