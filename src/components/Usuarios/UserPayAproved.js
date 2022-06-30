import React from 'react'
import { Container } from './../Container/Container'
import { Link } from 'react-router-dom'

export default function UserPayAproved () {
  return (
    <Container>
      <section className='px-4 sm:px-6 lg:px-8'>
        <div className='p-8 sm:p-14 bg-green-700 rounded-2xl shadow-2xl font-mulish md:min-w-[692px]'>
          <div className='flex justify-between items-center'>
            <h3 className='text-[#D0CAE5] text-[22px] font-bold'>
              Pago realizado con exito
            </h3>

          </div>
          <p className='mt-5 text-[#D0CAE5] max-w-md'>
            Prepararemos tu pedido y lo enviaremos en un plazo no mayor a 7 dias habiles
          </p>
          <div className='mt-20'>
            <Link to='/categorias' className='font-bold text-lg mt-14 bg-gray-800 rounded text-white py-4 px-7 border border-transparent hover:bg-gray-600 hover:border-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900'>
              Volver a la pagina
            </Link>
          </div>
        </div>
      </section>
    </Container>
  )
}
