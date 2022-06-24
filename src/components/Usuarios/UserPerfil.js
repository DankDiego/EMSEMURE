
import { useForm } from 'react-hook-form'

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
    <>
      <div className='flex items-center justify-center text-sm tracking-widest text-center uppercase '>
        <h1 className='text-xl font-bold text-center text-gray-500 dark:text-gray-300 '>Perfil de Usuario</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center mt-2 text-sm tracking-widest text-center'>
        <div className=' sm:max-w-xl sm:mx-auto'>
          <div className='flex flex-col w-full'>
            <label className='block mb-2 text-xs tracking-wide text-left text-gray-500 text-grey-darker'>
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
            {errors.descripcion && <span className='text-xs italic text-red-500 resize-none text-red'>{errors.descripcion.message}</span>}
          </div>
          <div className='flex flex-col w-full'>
            <label className='block mt-2 mb-2 text-xs tracking-wide text-left text-gray-500'>
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
            {errors.descripcion && <span className='text-xs italic text-red-500 resize-none text-red'>{errors.descripcion.message}</span>}
          </div>
        </div>
      </form>
    </>

  )
}
