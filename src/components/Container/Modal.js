import React from 'react'
import { useForm } from 'react-hook-form'
import { PutImgApi } from '../../helpers'
export const ModalComp = ({ setIsOpen, isOpen }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })
  const onSubmit = (ProductoImg) => {
    const { proid } = isOpen
    const data = ProductoImg
    PutImgApi(data, proid)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0'>
      <div className='bg-white px-16 py-14 rounded-md text-center'>
        <h1 className='text-xl mb-4 font-bold text-slate-500'>Cambiar Imagen</h1>

        <div className='mb-4'>
          {errors.imagen && <span className='text-xs font-bold text-red-500'>{errors.imagen.message}</span>}
          <input
            type='file' className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full  border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.nombre && 'bg-red-50  border-red-500 focus:border-red-500'}`} placeholder='Imagen'
            {...register('imagen', {
              required: '*Este campo es requerido'
            })}
          />
        </div>

        <button type='submit' className='bg-gray-900 w-28 h-10 rounded-md text-md text-white font-semibold'>
          Guardar
        </button>
        <button onClick={() => setIsOpen(false)} className='bg-red-600 w-28 h-10 rounded-md text-md text-white'>Cerrar</button>
      </div>
    </form>

  )
}
