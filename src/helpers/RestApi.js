import { fetchConToken, fetchImgProd } from './index'
import Swal from 'sweetalert2'
export async function PostApi (ruta, data) {
  try {
    const resp = await fetchConToken(ruta, data, 'POST')
    const body = await resp.json()
    console.log(body)
    if (body.ok) {
      Swal.fire(
        'Resgistrado',
        'Has registrado correctamente!',
        'success'
      )
    } else {
      Swal.fire(
        'Algo salio mal',
        body.msg,
        'error'
      )
    }
  } catch (error) {
    console.log(error)
    Swal.fire(
      'Algo salio mal',
      'Intentalo mas tarde',
      'error'
    )
  }
}

export async function DeleteApi (ruta, data) {
  try {
    const resp = await fetchConToken(ruta, data, 'DELETE')
    const body = await resp.json()
    console.log(body)
    if (body.ok) {
      Swal.fire(
        'Borrado',
        body.msg,
        'success'
      )
    } else {
      Swal.fire(
        'Algo salio mal',
        body.msg,
        'error'
      )
    }
  } catch (error) {
    console.log(error)
    Swal.fire(
      'Algo salio mal',
      'Intentalo mas tarde',
      'error'
    )
  }
}

export async function PutImgApi (data, proid) {
  try {
    const resp = await fetchImgProd(data, proid)
    const body = await resp.json()
    console.log(body)
    if (body.ok) {
      Swal.fire(
        'Listo',
        body.msg,
        'success'
      )
    } else {
      Swal.fire(
        'Algo salio mal',
        body.msg,
        'error'
      )
    }
  } catch (error) {
    console.log(error)
    Swal.fire(
      'Algo salio mal',
      'Intentalo mas tarde',
      'error'
    )
  }
}
