import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startLogin } from '../../actions/auth'
import { Navigate } from 'react-router-dom'

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const [formLoginValues, handleLoginInputChange] = useForm({
    correo: 'diego@gmail.com',
    password: 'admin123'
  })
  const { correo, password } = formLoginValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLogin(correo, password))
  }

  const { isLoggedIn } = useSelector(state => state.auth)
  if (isLoggedIn) {
    return (<Navigate to='/inicio' />)
  }
  return (

    <>
      <form onSubmit={handleLogin} className='h-screen items-center flex justify-center bg-yellow-200 '>

        <div className='p-2 w-1/2 '>

          <section
            className='text-center'
          >

            <div className='space-y-4'>
              <header className='mb-3 text-2xl font-bold'>Inicia sesión</header>
              <div className='w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200'>
                <input
                  type='text'
                  placeholder='Correo'
                  name='correo'
                  value={correo}
                  onChange={handleLoginInputChange}
                  className='my-3 w-full border-none bg-transparent outline-none focus:outline-none'
                />
              </div>
              <div
                className='flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200'
              >
                <input
                  type='password'
                  placeholder='Contraseña'
                  name='password'
                  value={password}
                  onChange={handleLoginInputChange}
                  autoComplete='off'
                  className='fos:outline-none my-3 w-full border-none bg-transparent outline-none'
                />

              </div>
              <button
                className='w-full rounded-2xl border-b-4 border-b-gray-900 bg-gray-900 py-3 font-bold text-white hover:bg-gray-700 active:translate-y-[0.125rem] active:border-b-blue-400'
                value='Login'
                type='submit'
              >
                Ingresar
              </button>
            </div>

            <div className='flex items-center space-x-4'>
              <hr className='border border-gray-300' />
              <div className='p-2 w-full font-semibold text-gray-400'>También puedes iniciar sesión con</div>
              <hr className='border border-gray-300' />
            </div>

            <footer>
              <div className='flex w-full items-center'>

                <a
                  href='#'
                  className='w-full rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200'
                >GOOGLE
                </a>
              </div>

              <div className='mt-8 text-sm text-gray-400'>
                El entrar estas aceptando nuestros
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
