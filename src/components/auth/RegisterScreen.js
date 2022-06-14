/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { fetchSinToken } from '../../helpers/fetch'
import { Navigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export const RegisterScreen = () => {
  const [cargando, setcargando] = useState(false)
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })
  const password = useRef({})
  password.current = watch('password', '')
  async function PostUser (data) {
    try {
      const resp = await fetchSinToken('usuarios', data, 'POST')
      const body = await resp.json()
      if (body.ok) {
        Swal.fire(
          'Resgistrado!',
          'Ahora puedes iniciar sesion!',
          'success'
        )
      } else {
        console.log(body.errors[0].msg)
        Swal.fire('Error', body.errors[0].msg, 'error')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onSubmit = (user) => {
    const roluser = {
      ...user,
      rol: 'USER_ROLE'
    }

    PostUser(roluser)
  }

  const { isLoggedIn } = useSelector(state => state.auth)
  if (isLoggedIn) {
    return (<Navigate to='/inicio' />)
  }
  return (

    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='h-screen items-center flex justify-center bg-yellow-200 '>

        <div className='p-2 w-1/2 '>

          <section
            className='text-center'
          >

            <div className='space-y-4 text-left '>
              <header className='text-center mb-3 text-2xl font-bold'>Registro de Usuario</header>
              <div className='w-full'>
                {errors.nombre && <span className='text-red text-xs italic text-red-500'>{errors.nombre.message}</span>}
                <input
                  placeholder='Nombres'
                  className={`px-4 py-2 border focus:ring-gray-500  w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.nombre && 'bg-red-50  border-red-500 focus:border-red-500'}`} type='text'
                  {...register('nombre', {
                    required: '*Este campo es requerido',
                    pattern: {
                      value: /^[a-zA-Z\s]*$/,
                      message: 'Solo Letras y Espacios'
                    },
                    maxLength: {
                      value: 25,
                      message: 'Maximo de 25 caracteres'
                    }
                  })}
                />
              </div>
              <div className='w-full'>
                {errors.correo && <span className='text-red text-xs italic text-red-500'>{errors.correo.message}</span>}
                <input
                  placeholder='Correo'
                  className={`px-4 py-2 border focus:ring-gray-500  w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.correo && 'bg-red-50  border-red-500 focus:border-red-500'}`} type='text'
                  {...register('correo', {
                    required: '*Este campo es requerido',
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Ingrese e-mail valido'
                    },
                    maxLength: {
                      value: 25,
                      message: 'Maximo de 25 caracteres'
                    }
                  })}
                />
              </div>
              <div className='w-full'>
                {errors.password && <span className='text-red text-xs italic text-red-500'>{errors.password.message}</span>}
                <input
                  placeholder='Contraseña'
                  className={`px-4 py-2 border focus:ring-gray-500  w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.password && 'bg-red-50  border-red-500 focus:border-red-500'}`} type='password'
                  {...register('password', {
                    required: '*Este campo es requerido',
                    minLength: {
                      value: 6,
                      message: '6 caracteres minimos'
                    },
                    maxLength: {
                      value: 15,
                      message: 'Maximo 15 caracteres'
                    }
                  })}
                />
              </div>
              <div className='w-full'>
                {errors.password2 && <span className='text-red text-xs italic text-red-500'>{errors.password2.message}</span>}
                <input
                  placeholder='Repita Contraseña'
                  className={`px-4 py-2 border focus:ring-gray-500  w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${errors.password2 && 'bg-red-50  border-red-500 focus:border-red-500'}`} type='password'
                  {...register('password2', {
                    required: '*Este campo es requerido',
                    validate: value =>
                      value === password.current || 'Las contraseñas no coinciden',
                    minLength: {
                      value: 6,
                      message: '6 caracteres minimos'
                    },
                    maxLength: {
                      value: 15,
                      message: 'Maximo 15 caracteres'
                    }
                  })}
                />
              </div>
              <button
                className='w-full rounded-2xl border-b-4 border-b-gray-900 bg-gray-900 py-3 font-bold text-white hover:bg-gray-700 active:translate-y-[0.125rem] active:border-b-blue-400'
                value='Login'
                type='submit'
              >
                Registro
              </button>
            </div>

            <div className='flex items-center space-x-4'>
              <hr className='border border-gray-300' />
              <div className='p-2 w-full font-semibold text-gray-400'>Ya estas registrado?</div>
              <hr className='border border-gray-300' />
            </div>

            <footer>
              <div className='flex w-full items-center'>

                <Link
                  to='/login'
                  className='w-full rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200'
                >Inicia Sesion
                </Link>
              </div>

              <div className='mt-8 text-sm text-gray-400'>
                Al registrarte estas aceptando nuestros
                <a href='#' className='font-medium text-gray-500'> Terminos</a> y
                <a href='#' className='font-medium text-gray-500'> Condiciones</a>.
              </div>
            </footer>
          </section>
        </div>
      </form>

    </>
  )
}
