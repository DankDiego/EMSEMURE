import React, { useEffect, useState } from 'react'
import { DinamicTable } from './../tables/DinamicTable'
import { fetchSinToken } from '../../helpers/fetch'
import { LoaderReact } from '../tables/LoaderReact'
import { useSelector } from 'react-redux'
export default function UserPedidosList () {
  const [Pedidos, setPedidos] = useState([])
  const { uid } = useSelector(state => state.auth.user)
  async function GetCategorias () {
    try {
      const endpoint = `checkout/${uid}`
      const resp = await fetchSinToken(endpoint)
      const pedidos = await resp.json()
      setPedidos(pedidos.pedidos)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetCategorias()
  }, [])
  const data = React.useMemo(() => [...Pedidos], [Pedidos])
  console.log(Pedidos)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Monto',
        accessor: 'monto' // accessor is the "key" in the data
      },
      {
        Header: 'tracking',
        accessor: 'tracking'
      },
      {
        Header: 'Direccion',
        accessor: 'direccion'
      }
    ],
    []
  )
  return (!Pedidos.length
    ? (
      <LoaderReact />
      )
    : (
      <>
        <DinamicTable data={data} columns={columns} tablename='Pedidos' apiruta='categorias' />
      </>
      ) /*: <TableStyled /> */)
}
