import { fetchSinToken } from './fetch'

export async function GetUsers () {
  try {
    const resp = await fetchSinToken('usuarios')
    const datausers = await resp.json()
    return datausers
  } catch (error) {
    console.log(error)
  }
}

export async function GetUsersMesActual () {
  try {
    const resp = await fetchSinToken('usuarios/mesactual')
    const data = await resp.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function GetPedidos () {
  try {
    const resp = await fetchSinToken('checkout')
    const datapedidos = await resp.json()
    const montototal = datapedidos.pedidos.reduce((n, { monto }) => n + monto, 0)
    return { datapedidos, montototal }
  } catch (error) {
    console.log(error)
  }
}

export async function GetPedidosMesActual () {
  try {
    const resp = await fetchSinToken('checkout/mesactual')
    const data = await resp.json()
    const montomensual = data.pedidos.reduce((n, { monto }) => n + monto, 0)
    return { data, montomensual }
  } catch (error) {
    console.log(error)
  }
}
