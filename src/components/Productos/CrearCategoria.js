import React from 'react'
export const CrearCategoria = () => {
  return (
    <div className='min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10'>
          <div className='max-w-md mx-auto'>

            <div className='text-center font-semibold text-xl self-start text-gray-700'>
              <h2 className='leading-relaxed'>Registrar Categoria</h2>

            </div>

            <div>
              <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                <div className='flex flex-col'>
                  <label className='leading-loose'>Nombre:</label>
                  <input type='text' className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600' placeholder='Categoria' />
                </div>

              </div>
              <div className='pt-4 flex items-center space-x-4'>
                <button className='flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none'>
                  <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' /></svg> Cancelar
                </button>
                <button className='bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none'>Crear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
