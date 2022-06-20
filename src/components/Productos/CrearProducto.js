import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { PostApi, fetchSinToken } from '../../helpers'
import { LoaderReact } from './../tables/LoaderReact'
export const CrearProducto = () => {
  const [Categorias, setCategorias] = useState([])
  async function GetCategorias () {
    try {
      const resp = await fetchSinToken('categorias')
      const categorias = await resp.json()
      setCategorias(categorias.categorias)
      console.log('-----LLAMADO A LA API-----')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetCategorias()
  }, [])
  const selectdata = React.useMemo(() => [...Categorias], [Categorias])
  console.log('selectedata ------------------')
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
    PostApi(ruta, data)
  }

  if (!Categorias.length) {
    return <LoaderReact />
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10'>
          <div className='max-w-md mx-auto'>

            <div className='text-center font-semibold text-xl self-start text-gray-700'>
              <h2 className='leading-relaxed'>Registrar Producto</h2>

            </div>

            <div>
              <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>

                <div className='-mx-3 md:flex mb-6'>
                  <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block  tracking-wide text-grey-darker text-xs  mb-1'>
                      Nombre
                    </label>

                    <input
                      className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.nombre && 'bg-red-50  border-red-500 focus:border-red-500'}`} id='grid-first-name' type='text'
                      {...register('nombre', {
                        required: '*Este campo es requerido',
                        maxLength: {
                          value: 25,
                          message: 'Maximo de 25 caracteres'
                        }
                      })}
                    />
                    {errors.nombre && <span className='text-red text-xs italic text-red-500'>{errors.nombre.message}</span>}
                  </div>
                  <div className='md:w-1/2 px-3'>
                    <label className='block  tracking-wide text-grey-darker text-xs  mb-1'>
                      Categoria
                    </label>
                    <select
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                      type='select'
                      {...register('categoria', {
                        required: '*Este campo es requerido'
                      })}
                    >
                      <option value=''>
                        Seleccione Categoria
                      </option>
                      {selectdata.map((val, key) => {
                        return (
                          <option key={key} value={val._id}>
                            {val.nombre}
                          </option>
                        )
                      })}
                    </select>
                    {errors.categoria && <span className='text-red text-xs italic text-red-500'>{errors.categoria.message}</span>}
                  </div>
                </div>
                <div className='-mx-3 md:flex mb-6'>
                  <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block  tracking-wide text-grey-darker text-xs  mb-1'>
                      Precio s/.
                    </label>

                    <input
                      type='text'
                      className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.precio && 'bg-red-50  border-red-500 focus:border-red-500'}`} id='grid-first-name'
                      {...register('precio', {
                        required: '*Este campo es requerido',
                        pattern: {
                          value: /^(?:0\.\d{0,1}[1-9]|(?!0)\d{1,6}(?:\.\d{0,1}[1-9])?)$/,
                          message: 'Ingrese precio valido '
                        }
                      })}
                    />
                    {errors.precio && <span className='text-red text-xs italic text-red-500'>{errors.precio.message}</span>}
                  </div>
                  <div className='md:w-1/2 px-3'>
                    <label className='block  tracking-wide text-grey-darker text-xs  mb-1'>
                      Cantidad:
                    </label>

                    <input
                      className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.stock && 'bg-red-50  border-red-500 focus:border-red-500'}`} id='grid-last-name' type='number'
                      defaultValue={1}
                      {...register('stock', {
                        required: '*Este campo es requerido',
                        maxLength: {
                          value: 3,
                          message: 'Maximo de 999 productos'
                        },
                        pattern: {
                          value: /^\d*$/,
                          message: 'Solonumeros positivos'
                        }
                      })}
                    />
                    {errors.stock && <span className='text-red text-xs italic text-red-500'>{errors.stock.message}</span>}
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='block  tracking-wide text-grey-darker text-xs  mb-2'>
                    Descripcion:
                  </label>

                  <textarea
                    className={`resize-none px-2 py-2 h-28 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.descripcion && 'bg-red-50  border-red-500 focus:border-red-500'}`} placeholder='Descripcion .......'
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

              </div>

              <div className='pt-4 flex items-center space-x-4'>

                <button type='submit' className='bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none'>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
