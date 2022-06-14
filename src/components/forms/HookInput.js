
import React from 'react'
export function HookInput ({ printError = 'campo requerido' }) {
  return (
    <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
      <div className='flex flex-col'>
        {printError && <span className='text-xs font-bold text-red-500'>{printError}</span>}
        <input
          type='text' className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${printError && 'bg-red-50  border-red-500 focus:border-red-500'}`} placeholder='Nombre'

        />
      </div>

    </div>
  )
}
