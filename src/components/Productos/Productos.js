/* eslint-disable react/jsx-key */
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { getProductos } from '../../helpers'
import { LoaderReact } from './../tables/LoaderReact'
import { startCartNew } from './../../actions/shopcart'

export const Productos = ({ catname = 'SILLONES' }) => {
  const { uid } = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const [productoData, setProductoData] = useState([])
  useEffect(() => {
    getProductos().then(setProductoData).catch(console.error)
  }, [])
  const productos = useMemo(() => {
    return productoData.productos
  }, [productoData])

  if (!productos) {
    return <LoaderReact />
  } else {
    console.log('Productos Listos')
    return (

      <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {productos.filter(producto => producto.categoria.nombre === catname).map(ProductoFiltrado => (
          <div key={ProductoFiltrado._id} className='flex flex-col items-center justify-center w-full max-w-lg mx-auto'>
            <Link to={'producto/' + ProductoFiltrado._id}>
              <img className='object-cover w-full rounded-md h-72 xl:h-80' src={ProductoFiltrado.img} alt='T-Shirt' />
            </Link>
            <h4 className='mt-2 text-lg font-medium text-gray-700 truncate dark:text-gray-200'>{ProductoFiltrado.nombre}</h4>
            <p className='font-semibold text-blue-500'>${ProductoFiltrado.precio}</p>
            <button onClick={() => dispatch(startCartNew(ProductoFiltrado, uid))} className='flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>
              <AiOutlineShoppingCart />
              <span className='mx-1'>Agregar</span>
            </button>
          </div>

        ))}

      </div>

    )
  }
}
