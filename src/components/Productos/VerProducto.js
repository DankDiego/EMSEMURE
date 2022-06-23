import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSinToken } from '../../helpers'
import { Container } from '../Container'
import { NotFound } from '../Home/NotFound'
import { LoaderReact } from '../tables/LoaderReact'

export const VerProducto = () => {
  const { id } = useParams()
  const [dataProducto, setProducto] = useState({
    producto: {},
    loading: true
  })

  const getProductos = async (id) => {
    try {
      const endpoint = `productos/${id}`
      const resp = await fetchSinToken(endpoint)
      const producto = await resp.json()
      setProducto({
        producto,
        loading: false
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProductos(id)
  }, [])
  const { producto } = dataProducto.producto
  if (dataProducto.producto?.ok === false) {
    return <NotFound />
  }

  return dataProducto.loading
    ? <LoaderReact />
    : (
      <section className='bg-white dark:bg-gray-900'>
        <Container>
          <div id='viewerButton' className='hidden w-full flex justify-center'>
            <button className='bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold'>Open Quick View</button>
          </div>
          <div id='viewerBox' className='lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900'>

            <div className='mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8'>
              <div className='lg:w-1/2 flex justify-center items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24'>

                <div className='slider'>
                  <div className='slide-ana lg:relative'>
                    <div className='flex'>
                      <img src={producto?.img} alt='A black chair with wooden legs' className='w-full h-full' />
                    </div>
                  </div>
                </div>

              </div>
              <div className='lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0'>
                <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white'>{producto?.nombre}</h1>
                <p className='text-base leading-normal text-gray-600 dark:text-white mt-2'>{producto.descripcion}</p>
                <p className='text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10' />
                <div className='flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16'>
                  <button className='w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200'>Add to Cart</button>
                  <button className='w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white dark:text-white focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 '>View Details</button>
                </div>
                <div className='mt-6'>
                  <button className='text-xl underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800'>add to wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      )
}
