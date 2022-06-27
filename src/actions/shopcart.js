import { fetchConToken } from '../helpers/fetch'
import { types } from '../types/types'
import Swal from 'sweetalert2'
export const startCartNew = (ProductoFiltrado, uid) => {
  return async (dispatch) => {
    try {
      console.log('AGREGANDO PRODUDTO AL CARRITO')
      const endpoint = 'usuarios/addcart/' + uid
      const { _id, disponible, precio, nombre, descripcion, img, stock } = ProductoFiltrado
      const ProductoShort = { _id, disponible, precio, nombre, descripcion, img, stock }
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
      } else {
        Swal.fire('Inicia Sesion', 'Por favor inicia sesion para guardar productos en tu carrito', 'question')
      }
    } catch (error) {
      Swal.fire('Error', 'Intentalo mas tarde', 'error')
    }
  }
}
const CartNewProduct = (ProductoShort) => ({
  type: types.cartAddNew,
  payload: ProductoShort
})
