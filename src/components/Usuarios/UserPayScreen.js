import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { fetchConToken } from '../../helpers'

const stripePromise = loadStripe('pk_test_51LFjSnD99ejUCqPhnAYDdHfAaGru2XMa80u7gfco1QpR6cTUbHnTNVvhqXIKsCze25CAOaYz2lC00ujdk75UhTLR00vO7Ukwo3')

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })
    setLoading(true)

    if (!error) {
      // console.log(paymentMethod)
      const { id } = paymentMethod
      try {
        /* const { data } = await axios.post(
          'http://localhost:8080/api/checkout',
          {
            id,
            amount: 5000 // cents
          }, */
        const endpoint = 'checkout'
        const data = {
          id,
          precio: '1000',
          tracking: 'En proceso',
          productos: [
            '62b756429852b81326a08386',
            '62b756739852b81326a08395'
          ],
          estado: true,
          usuario: '62631f1f16cf7d2ef0e0ccc5',
          direccion: 'VILLA EL SALVADOR SECTOR  2 GRUPO 19'
        }
        const pedidoresult = await fetchConToken(endpoint, data, 'POST')

        console.log(pedidoresult)

        elements.getElement(CardElement).clear()
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
  }

  console.log(!stripe || loading)

  return (
    <form className='w-26' onSubmit={handleSubmit}>
      {/* Product Information */}
      <h1 className='text-black'>PRODUCTOS:</h1>

      <h3 className='text-center my-2'>Price: 100$</h3>

      {/* User Card Input */}
      <div className='w-64 bg-gray-600 h-8 text-white'>
        <CardElement className='p-2 text-sm w-full text-white' />
      </div>

      <button disabled={!stripe} className='text-white bg-green-500'>
        {loading
          ? (
            <div className='' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
            )
          : (
              ' COMPRAR GAAAA'
            )}
      </button>
    </form>
  )
}

function UserPayScreen () {
  return (
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
  )
}

export default UserPayScreen
