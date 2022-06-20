import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen py-6  sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='max-w-md mx-auto text-center text-white'>
          <h1 className='mb-4 text-5xl font-bold '>ERROR 404               PAGINA NO ENCONTRADA</h1>

          <Link className='flex justify-center items-center w-full border px-4 py-3 rounded-md focus:outline-none' to='/'>Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
}
