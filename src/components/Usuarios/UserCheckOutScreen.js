/* eslint-disable react/jsx-indent */
import React, { useState } from 'react'
import { Container } from './../Container/Container'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import PlusMinus from './../buttons/PlusMinus'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { fetchConToken } from '../../helpers'
const stripeapikey = process.env.REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(stripeapikey)

const CheckoutForm = () => {
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const Monto = useSelector(state => state.cart.montototal)
  const Productos = useSelector(state => state.cart.cartProducts)
  const { uid, direccion } = useSelector(state => state.auth.user)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })
    setLoading(true)

    if (!error) {
      const { id } = paymentMethod

      try {
        const endpoint = 'checkout'
        const data = {
          id,
          monto: Monto,
          tracking: 'En Revision',
          productos: Productos,
          estado: true,
          usuario: uid,
          direccion
        }
        const pedidoresult = await fetchConToken(endpoint, data, 'POST')
        elements.getElement(CardElement).clear()
        const pedidoresultjson = await pedidoresult.json()
        console.log('pedidoresult', pedidoresult.ok, pedidoresultjson.payment)
        if (pedidoresultjson.payment === 'succeeded') {
          navigate('/usuario/carrito/pagoaprobado')
        } else {
          navigate('/usuario/carrito/pagodesaprobado')
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
  }

  return (
    <form className='' onSubmit={handleSubmit}>

      {/* User Card Input */}
      <div className='w-56 bg-gray-600 h-8 '>
        <CardElement className='p-2 text-sm w-full ' />
      </div>

      <button disabled={!stripe} className='font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full  bg-green-700'>
        {loading
          ? (
              'Espere.....'
            )
          : (
              'PAGAR CON TARJETA'
            )}
      </button>
    </form>
  )
}

export default function UserCheckOutScreen () {
  const ListCart = useSelector(state => state.cart.cartProducts)
  const MontoTotal = useSelector(state => state.cart.montototal)
  if (!ListCart.length) {
    return <div className='text-white text-center  h-96 text-4xl'>NO TIENES PRODUCTOS</div>
  }

  return (
    <Container className='bg-gray-900 text-white'>
        <div className='container mx-auto'>
          <div className='flex'>
            <div className='w-3/4 bg-gray-900 px-10 '>
              <div className='flex justify-between bg-gray90 text-white border-b pb-8'>
                <h1 className='font-semibold text-2xl'>Checkout</h1>
                <h2 className='font-semibold text-2xl'>{ListCart.length} Productos</h2>
              </div>
              <div className='flex mt-10 text-white mb-5'>
                <h3 className='font-semibold  text-xs uppercase w-2/5'>Product Details</h3>
                <h3 className='font-semibold text-center  text-xs uppercase w-1/5'>Precio</h3>
                <h3 className='font-semibold text-center  text-xs uppercase w-1/5'>Cantidad</h3>
                <h3 className='font-semibold text-center  text-xs uppercase w-1/5'>Total</h3>
              </div>
              {ListCart.map((item, key) => {
                return (
                  <div key={key} className='flex items-center hover:bg-gray-700 -mx-8 px-6 py-5'>
                    <div className='flex w-2/5'>
                      <div className='w-20'>
                        <img className='h-24' src={item.img} />
                      </div>
                      <div className='flex flex-col ml-4 flex-grow'>
                        <span className='text-sm text-white'>{item.nombre} </span>
                        <span className='text-red-500 text-xs'>Quedan: {item.stock} </span>

                      </div>
                    </div>

                    <span className='text-center w-1/5 font-semibold text-white text-sm'>{item.precio}$</span>

                    <PlusMinus stock={item.stock} position={key} precio={item.precio} />

                  </div>
                )
              })}

              <Link to='/categorias' className='flex font-semibold text-indigo-600 text-sm mt-10'>

                <svg className='fill-current mr-2 text-indigo-600 w-4' viewBox='0 0 448 512'><path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' /></svg>
                Regresar
              </Link>
            </div>

            <div id='summary' className='text-white w-1/4 px-8'>
              <h1 className='font-semibold text-2xl border-b pb-8'>Resumen de la orden</h1>
              <div className='flex justify-between mt-10 mb-5'>
                <span className='font-semibold uppercase'>Precio Total:</span>
                <span className='font-semibold text-bold text-green-600'>{MontoTotal}$</span>
              </div>

              <div className='py-10'>
                <label className='font-semibold inline-block mb-3 text-sm uppercase'>Cupon</label>
                <input type='text' id='promo' placeholder='Digite su cupon' className='p-2 text-sm w-full' />
              </div>
              <button className='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'>Aplicar Descuento</button>
              <div className='border-t mt-8'>
                <div className='bg-gray-600'>
                  <Elements stripe={stripePromise}>
                    <div className='text-white p-4'>
                      <div className='row h-100'>
                        <div className='h-100 bg-white'>
                          <CheckoutForm className='text-white' />
                        </div>
                      </div>
                    </div>
                  </Elements>
                </div>
              </div>
            </div>

          </div>
        </div>
    </Container>

  )
}
