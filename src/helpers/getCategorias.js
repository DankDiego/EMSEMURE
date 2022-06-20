import { fetchSinToken } from './fetch'

export async function getCategorias () {
  try {
    const resp = await fetchSinToken('categorias')
    const categorias = await resp.json()
    return categorias
  } catch (error) {
    throw new Error(error)
  }
}

export async function getProductos () {
  try {
    const resp = await fetchSinToken('productos')
    const productos = await resp.json()
    return productos
  } catch (error) {
    throw new Error(error)
  }
}
