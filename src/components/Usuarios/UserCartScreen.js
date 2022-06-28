import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from './../Container/Container'
import { AiFillCloseCircle } from 'react-icons/ai'

import { startCartRemove } from './../../actions/shopcart'
export const UserCartScreen = () => {
  const ListCart = useSelector(state => state.cart.cartProducts)
  const { uid } = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  if (!ListCart.length) {
    return <div className='text-white text-center  h-96 text-4xl'>NO TIENES PRODUCTOS</div>
  } else {
    return (
      <Container>
        <div className='container mx-auto  text-white'>
          <div className='w-full overflow-x-auto'>
            <div className='my-2'>
              <h3 className='text-xl font-bold tracking-wider'>Lista de Productos</h3>
            </div>
            <table className='w-full shadow-inner'>
              <thead>
                <tr className='bg-gray-800'>
                  <th className='px-6 py-3 font-bold whitespace-nowrap'>Imagen</th>
                  <th className='px-6 py-3 font-bold whitespace-nowrap'>Producto</th>
                  <th className='px-6 py-3 font-bold whitespace-nowrap'>Quedan</th>
                  <th className='px-6 py-3 font-bold whitespace-nowrap'>Precio</th>
                  <th className='px-6 py-3 font-bold whitespace-nowrap'>Quitar </th>
                  <th className='px-6 py-3 font-bold whitespace-nowrap'>Seleccionar</th>
                </tr>
              </thead>
              <tbody>
                {
                      ListCart.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>
                              <div className='flex justify-center'>
                                <img
                                  src={item.img}
                                  className='object-cover h-28 w-28 rounded-2xl'
                                  alt='image'
                                />
                              </div>
                            </td>
                            <td className='p-4 px-6 text-center whitespace-nowrap'>
                              <div className='flex flex-col items-center justify-center'>
                                <h3>{item.nombre}</h3>
                              </div>
                            </td>
                            <td className='p-4 px-6 text-center whitespace-nowrap'>{item.stock}</td>
                            <td className='p-4 px-6 text-center whitespace-nowrap'>{item.precio}</td>
                            <td className='p-4 px-6 text-center whitespace-nowrap'>
                              <button>
                                <AiFillCloseCircle size={28} onClick={() => dispatch(startCartRemove(uid, item._id))} />
                              </button>
                            </td>
                            <td className='p-4 px-6 text-center whitespace-nowrap'>
                              <input id='default-checkbox' type='checkbox' value='' className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                            </td>
                          </tr>
                        )
                      })

        }
              </tbody>
            </table>

          </div>
        </div>
      </Container>
    )
  }
}
