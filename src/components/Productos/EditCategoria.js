import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchSinToken, PutApi } from '../../helpers'
export const EditCategoria = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [Categoria, setCategoria] = useState({
    nombre: ''
  })
  async function GetCategoria (id) {
    try {
      const endpoint = `categorias/${id}`
      const resp = await fetchSinToken(endpoint)
      const categoria = await resp.json()
      setCategoria(categoria)
      console.log(Categoria)
    } catch (error) {
      console.log(error)
    }
  }
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })
  const onSubmit = (categoria) => {
    const ruta = `categorias/${id}`
    const data = categoria
    PutApi(ruta, data)
  }
  useEffect(() => {
    GetCategoria(id)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10'>
          <div className='max-w-md mx-auto'>

            <div className='text-center font-semibold text-xl self-start text-gray-700'>
              <h2 className='leading-relaxed'>Editar Categoria</h2>

            </div>

            <div>
              <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                <div className='flex flex-col'>
                  {errors.nombre && <span className='text-xs font-bold text-red-500'>{errors.nombre.message}</span>}
                  <input
                    defaultValue={Categoria.nombre}
                    type='text' className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.nombre && 'bg-red-50  border-red-500 focus:border-red-500'}`} placeholder='Nombre'
                    {...register('nombre', {
                      required: '*Este campo es requerido',
                      maxLength: {
                        value: 15,
                        message: 'Maximo de 15 caracteres'
                      }
                    })}
                  />
                </div>

              </div>
              <div className='pt-4 flex items-center space-x-4'>
                <button onClick={() => navigate(-1)} type='button' className='bg-red-600 flex text-white justify-center items-center w-full  px-4 py-3 rounded-md focus:outline-none'>
                  Cancelar
                </button>
                <button type='submit' className='bg-green-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none'>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
