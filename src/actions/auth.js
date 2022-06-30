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
      localStorage.setItem('ROLE_ACCOUNT', body.usuario.rol)
      localStorage.setItem('PASSPORT', body.ok)
      dispatch(login({
        user: body.usuario,
        isLoggedIn: true
      }))
      const arraydeproductos = body.usuario.cartlist
      const arraymuteado = arraydeproductos.map(function (x) {
        return { ...x, monto: x.precio, cantidad: 1 }
      })
      dispatch(loadCart({ cartProducts: arraymuteado }))
      dispatch(CartSumMontoTotal())
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

export const startRegister = (email, password, name) => {
  return async () => {
    const resp = await fetchSinToken('auth/new', { email, password, name }, 'POST')
    const body = await resp.json()

    if (body.ok) {
      console.log('REGISTRO OK')
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
      console.log(body.ok)
      if (body.ok) {
        localStorage.setItem('token', body.token)
        localStorage.setItem('token-init-date', new Date().getTime())
        localStorage.setItem('ROLE_ACCOUNT', body.usuario.rol)
        localStorage.setItem('PASSPORT', body.ok)
        dispatch(login({
          user: body.usuario,
          isLoggedIn: true

        }))
        const arraydeproductos = body.usuario.cartlist
        const arraymuteado = arraydeproductos.map(function (x) {
          return { ...x, monto: x.precio, cantidad: 1 }
        })
        dispatch(loadCart({ cartProducts: arraymuteado }))
        dispatch(CartSumMontoTotal())
      } else {
        dispatch(checkingFinish())
        localStorage.clear()
      }
    } catch (error) {
      console.log('error start checking')
      localStorage.clear()
    }
  }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = (user) => ({
  type: types.authLogin,
  payload: user
})
const loadCart = (productos) => ({
  type: types.cartLoaded,
  payload: productos
})
const CartSumMontoTotal = () => ({
  type: types.cartMontoTotal
})

export const startLogout = () => {
  return (dispatch) => {
    console.log('start logout')
    localStorage.clear()
    dispatch(logout())
  }
}

const logout = () => ({ type: types.authLogout })
