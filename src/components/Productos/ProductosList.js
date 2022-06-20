import React, { useEffect, useState } from 'react'
import { fetchSinToken } from '../../helpers/fetch'
/* import { useDispatch } from 'react-redux' */

import { DinamicTable } from './../tables/DinamicTable'
import { LoaderReact } from './../tables/LoaderReact'
export const ProductosList = () => {
  /* const dispatch = useDispatch() */

  const [Productos, setProductos] = useState([])
  async function GetProductos () {
    try {
      const resp = await fetchSinToken('productos')
      const productos = await resp.json()
      setProductos(productos.productos)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetProductos()
  }, [])
  const data = React.useMemo(() => [...Productos], [Productos])

  console.log(data, Productos)
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'nombre' // accessor is the "key" in the data
      },
      {
        Header: 'Categoria',
        accessor: 'categoria.nombre'
      },
      {
        Header: 'Precio',
        accessor: 'precio'
      },
      {
        Header: 'descripcion',
        accessor: 'descripcion'
      },
      {
        Header: 'id',
        accessor: '_id'
      }
    ],
    []
  )

  return !Productos.length ? <LoaderReact /> : <DinamicTable data={data} columns={columns} tablename='Productos' apiruta='productos' />
}
