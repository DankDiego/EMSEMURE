/* eslint-disable no-undef */
import { fetchSinToken, fetchConToken } from '../helpers/fetch'
import { types } from '../types/types'
import Swal from 'sweetalert2'

export const startLogin = (correo, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken('auth/login', { correo, password }, 'POST')
    const body = await resp.json()

    if (body.ok) {
      console.log('LOGUEADO CORRECTAMENTE')
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(login({
        user: body.usuario,
        isLoggedIn: true

      }))
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    const resp = await fetchSinToken('auth/new', { email, password, name }, 'POST')
    const body = await resp.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(login({
        uid: body.uid,
        name: body.name
      }))
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

export const startChecking = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken('auth/renew')
      const body = await resp.json()

      if (body.ok) {
        localStorage.setItem('token', body.token)
        localStorage.setItem('token-init-date', new Date().getTime())

        dispatch(login({
          uid: body.uid,
          name: body.name
        }))
      } else {
        dispatch(checkingFinish())
      }
    } catch (error) {
      console.log('error de mierda')
    }
  }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = (user) => ({
  type: types.authLogin,
  payload: user
})

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(logout())
  }
}

const logout = () => ({ type: types.authLogout })
