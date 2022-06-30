
import React, { useEffect, useState } from 'react'

import { DinamicTable } from './../tables/DinamicTable'
import { fetchSinToken } from '../../helpers/fetch'
import { LoaderReact } from '../tables/LoaderReact'
export const CategoriaList = () => {
  /* const dispatch = useDispatch() */
  const [Categorias, setCategorias] = useState([])
  async function GetCategorias () {
    try {
      const resp = await fetchSinToken('categorias')
      const categorias = await resp.json()
      setCategorias(categorias.categorias)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetCategorias()
  }, [])
  const data = React.useMemo(() => [...Categorias], [Categorias])
  console.log(Categorias)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'nombre' // accessor is the "key" in the data
      },
      {
        Header: 'id',
        accessor: '_id'
      }
    ],
    []
  )

  return (!Categorias.length
    ? (
      <LoaderReact />
      )
    : (
      <>
        <DinamicTable data={data} columns={columns} tablename='Categorias' apiruta='categorias' />
      </>
      ) /*: <TableStyled /> */)
}
