import { fetchConToken } from '../helpers/fetch'
import { types } from '../types/types'
import Swal from 'sweetalert2'
export const startCartNew = (ProductoFiltrado, uid) => {
  return async (dispatch) => {
    try {
      console.log('AGREGANDO PRODUDTO AL CARRITO')
      const endpoint = 'usuarios/addcart/' + uid
      const { _id, disponible, precio, nombre, descripcion, img, stock } = ProductoFiltrado
      const cantidad = 1
      const monto = precio
      const ProductoShort = { _id, disponible, precio, nombre, descripcion, img, stock, cantidad, monto }
      const data = { prodid: _id }
      const resp = await fetchConToken(endpoint, data, 'PUT')
      const body = await resp.json()
      if (body.ok) {
        Swal.fire({
          title: 'Agregado',
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1000,
          toast: true,
          position: 'top-end',
          width: 200
        })
        dispatch(CartNewProduct(ProductoShort))
        dispatch(CartSumMontoTotal())
      } else {
        Swal.fire('Inicia Sesion', 'Por favor inicia sesion para guardar productos en tu carrito', 'question')
      }
    } catch (error) {
      Swal.fire('Error', 'Intentalo mas tarde', 'error')
    }
  }
}

export const startCartRemove = (uid, _id) => {
  return async (dispatch) => {
    try {
      console.log('REMOVIENDO PRODUDTO DEL CARRITO', _id)
      const endpoint = 'usuarios/removecart/' + uid
      const data = { prodid: _id }
      const resp = await fetchConToken(endpoint, data, 'PUT')
      const body = await resp.json()
      if (body.ok) {
        Swal.fire({
          title: 'Removido',
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1000,
          toast: true,
          position: 'top-end',
          width: 200
        })
        dispatch(CartRemoveProduct(_id))
        dispatch(CartSumMontoTotal())
      } else {
        Swal.fire('Inicia Sesion', 'Por favor inicia sesion', 'question')
      }
    } catch (error) {
      Swal.fire('Error', 'Intentalo mas tarde', 'error')
    }
  }
}

export const startCartPlus = (_id) => {
  return async (dispatch) => {
    try {
      dispatch(CartPlusOneProduct(_id))
      dispatch(CartSumMontoTotal())
    } catch (error) {
      console.log(error)
    }
  }
}

export const startCartMinus = (_id) => {
  return async (dispatch) => {
    try {
      dispatch(CartMinusOneProduct(_id))
      dispatch(CartSumMontoTotal())
    } catch (error) {
      console.log(error)
    }
  }
}

const CartNewProduct = (ProductoShort) => ({
  type: types.cartAddNew,
  payload: ProductoShort
})

const CartMinusOneProduct = (_id) => ({
  type: types.cartMinusOne,
  payload: _id
})

const CartPlusOneProduct = (_id) => ({
  type: types.cartPlusOne,
  payload: _id
})

const CartRemoveProduct = (_id) => ({
  type: types.cartRemove,
  payload: _id
})
const CartSumMontoTotal = () => ({
  type: types.cartMontoTotal
})
