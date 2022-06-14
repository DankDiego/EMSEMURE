
import React from 'react'
import logo from '../img/logo192.png'
export const LoaderLigth = () => {
  return (
    <div className='min-h-screen bg-yellow-200 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='relative px-4 py-10  mx-8 md:mx-0 rounded-3xl sm:p-10'>
          <div className='max-w-md mx-auto'>
            <div className='text-center font-semibold text-xl self-start text-black'>
              <h2 className='leading-relaxed'>Cargando...</h2>
            </div>
            <div className='p-2'>
              <img className='w-24 h-24 text-gray-200 animate-spin' src={logo} alt='Logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
