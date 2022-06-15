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
