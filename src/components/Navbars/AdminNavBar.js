import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import {
  AiOutlineLogout,
  AiFillPlusSquare,
  AiFillGolden,
  AiOutlineOrderedList,
  AiOutlineProfile,
  AiOutlineTeam,
  AiOutlineShop,
  AiOutlineEuro,
  AiOutlineLineChart
} from 'react-icons/ai'
import { GiPineTree } from 'react-icons/gi'
import { Link } from 'react-router-dom'
export default function AdminNavBar () {
  const dispatch = useDispatch()
  const Salir = () => {
    dispatch(startLogout())
  }
  return (
    <>
      <div className='flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-200 text-gray-800'>
        <div className='absolute flex flex-col top-0 left-0 w-64 bg-gray-900 h-full'>
          <div className='flex items-center pl-6 h-20'>
            <GiPineTree size={32} className='text-white' />
            <div className='ml-1'>
              <p className='ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans'>EMSEMURE Panel</p>
            </div>
          </div>
          <div className='overflow-y-auto overflow-x-hidden flex-grow'>
            <ul className='flex flex-col py-6 space-y-1'>
              <li className='px-5'>
                <div className='flex flex-row items-center h-8'>
                  <div className='flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase'>Productos</div>
                </div>
              </li>
              <li>
                <div className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6'>
                  <span className='inline-flex justify-center items-center ml-4'>
                    <AiFillGolden />
                  </span>
                  <Link to='categoria/new' className='ml-2 font-semibold text-sm tracking-wide truncate font-sans'>Registrar Categoria</Link>
                </div>
              </li>
              <li>
                <div className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6'>
                  <span className='inline-flex justify-center items-center ml-4'>
                    <AiOutlineProfile />
                  </span>
                  <Link to='categoria/listar' className='ml-2 font-semibold text-sm tracking-wide truncate font-sans'>Listar Categorias</Link>
                </div>
              </li>
              <li>
                <div className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6'>
                  <span className='inline-flex justify-center items-center ml-4'>

                    <AiFillPlusSquare />
                  </span>
                  <Link to='producto/new' className='ml-2 font-semibold text-sm tracking-wide truncate font-sans'>Registrar Producto</Link>
                </div>
              </li>
              <li>
                <div className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6'>
                  <span className='inline-flex justify-center items-center ml-4'>

                    <AiOutlineOrderedList />
                  </span>
                  <Link to='producto/listar' className='ml-2 font-semibold text-sm tracking-wide truncate font-sans'>Listar Productos</Link>
                </div>
              </li>
              <li className='px-5'>
                <div className='flex flex-row items-center h-8'>
                  <div className='flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase'>USUARIOS</div>
                </div>
              </li>
              <li>
                <div className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6'>
                  <span className='inline-flex justify-center items-center ml-4'>
                    <AiOutlineTeam />
                  </span>
                  <Link to='usuarios/listar' className='ml-2 font-semibold text-sm tracking-wide truncate font-sans'>Listar Usuarios</Link>
                </div>
              </li>

              <li className='px-5'>
                <div className='flex flex-row items-center h-8'>
                  <div className='flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase'>Pedidos</div>
                </div>
              </li>
              <li>
                <div className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6'>
                  <span className='inline-flex justify-center items-center ml-4'>
                    <AiOutlineShop />
                  </span>
                  <span className='ml-2 font-semibold text-sm tracking-wide truncate font-sans'>Listar Pedidos</span>
                </div>
              </li>
              <li>
                <div className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6'>
                  <span className='inline-flex justify-center items-center ml-4'>
                    <AiOutlineEuro />
                  </span>
                  <span className='ml-2 font-semibold text-sm tracking-wide truncate font-sans'>Generar Cupon</span>
                </div>
              </li>
              <li className='px-5'>
                <div className='flex flex-row items-center h-8'>
                  <div className='flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase'>Estadisticas</div>
                </div>
              </li>
              <li>
                <div className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6'>
                  <span className='inline-flex justify-center items-center ml-4'>
                    <AiOutlineLineChart />
                  </span>
                  <Link to='charts/dashboard' className='ml-2 font-semibold text-sm tracking-wide truncate font-sans'>Charts</Link>
                </div>
              </li>
              <li>
                <Link to='/login' onClick={Salir} className='w-full relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6'>
                  <span className='inline-flex justify-center items-center ml-4 text-red-500'>
                    <AiOutlineLogout />
                  </span>
                  <span className='ml-2 font-semibold text-sm tracking-wide text-red-500 truncate font-sans'>Salir</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
