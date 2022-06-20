/* eslint-disable react/jsx-key */
import { useEffect, useMemo, useState } from 'react'
import { getProductos } from '../../helpers'
import { LoaderReact } from './../tables/LoaderReact'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export const Productos = ({ catname = 'SILLONES' }) => {
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
          <div className='flex flex-col items-center justify-center w-full max-w-lg mx-auto'>
            <Link to={'producto/' + ProductoFiltrado._id}>
              <img className='object-cover w-full rounded-md h-72 xl:h-80' src={ProductoFiltrado.img} alt='T-Shirt' />
            </Link>
            <h4 className='truncate mt-2 text-lg font-medium text-gray-700 dark:text-gray-200'>{ProductoFiltrado.nombre}</h4>
            <p className='text-blue-500 font-semibold'>s/{ProductoFiltrado.precio}</p>
            <button className='flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>
              <AiOutlineShoppingCart />
              <span className='mx-1'>Agregar</span>
            </button>
          </div>

        ))}

      </div>

    )
  }
}
