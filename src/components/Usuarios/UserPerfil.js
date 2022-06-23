import React from 'react'
import { Container } from '../Container'
import { useForm } from 'react-hook-form'
import UserNavBar from './../Navbars/UserNavBar'
export default function UserPerfil () {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })
  const onSubmit = (producto) => {
    const ruta = 'productos'
    const data = producto
    console.log(ruta, data)
  }
  return (
    <section className='bg-white dark:bg-gray-900'>
      <Container>
        <div className='lg:flex lg:-mx-2'>
          <UserNavBar />

          <div className='mt-5 lg:mt-0 lg:px-2 lg:w-4/5 '>
            <div className='justify-center flex items-center  text-center text-sm tracking-widest uppercase '>
              <h1 className='text-center  text-xl font-bold text-gray-500 dark:text-gray-300 '>Perfil de Usuario</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='justify-center flex items-center  text-center text-sm tracking-widest mt-2'>
              <div className=' sm:max-w-xl sm:mx-auto'>
                <div className='flex flex-col w-full'>
                  <label className='block text-gray-500 tracking-wide text-left text-grey-darker text-xs  mb-2'>
                    Nombre:
                  </label>

                  <input
                    className={`px-2 py-2 h-10  border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.descripcion && 'bg-red-50  border-red-500 focus:border-red-500'}`} placeholder='Descripcion .......'
                    {...register('descripcion', {
                      required: '*Este campo es requerido',
                      maxLength: {
                        value: 120,
                        message: 'Maximo de 120 caracteres'
                      }
                    })}
                  />
                  {errors.descripcion && <span className='resize-none text-red text-xs italic text-red-500'>{errors.descripcion.message}</span>}
                </div>
                <div className='flex flex-col w-full'>
                  <label className='block text-gray-500 tracking-wide text-left mt-2 text-xs  mb-2'>
                    Correo:
                  </label>

                  <input
                    className={`resize-none px-2 py-2 h-28 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.correo && 'bg-red-50  border-red-500 focus:border-red-500'}`}
                    {...register('correo', {
                      required: '*Este campo es requerido',
                      maxLength: {
                        value: 120,
                        message: 'Maximo de 120 caracteres'
                      }
                    })}
                  />
                  {errors.descripcion && <span className='resize-none text-red text-xs italic text-red-500'>{errors.descripcion.message}</span>}
                </div>
              </div>
            </form>

          </div>
        </div>
      </Container>
    </section>
  )
}
