import React from 'react'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
export const CategoriasScreen = ({ children }) => {
  return (
    <>
      <h1 className='pt-16 h-full bg-yellow-200'>CATEGORIAS</h1>
      <div className='bg-cyan-700 h-screen'>
        <AiOutlineLoading3Quarters className='animate-spin' />
      </div>
    </>
  )
}
