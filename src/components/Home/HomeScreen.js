import React from 'react'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
export const HomeScreen = ({ children }) => {
  return (
    <>
      <h1 className='pt-16 h-screen bg-yellow-200'>HOME SCREEN 123</h1>
      <div className='bg-cyan-700'>
        <AiOutlineLoading3Quarters className='animate-spin' />
      </div>
    </>
  )
}
