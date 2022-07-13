import React, { useEffect, useState } from 'react'
import { fetchSinToken } from '../../helpers/fetch'
import { LoaderReact } from '../tables/LoaderReact'
import moment from 'moment'
import 'moment/locale/es'
import { PedidosTable } from './../tables/PedidosTable'
export default function PedidosList () {
  const [Pedidos, setPedidos] = useState([])
  async function GetPedidos () {
    try {
      const resp = await fetchSinToken('checkout')
      const data = await resp.json()
      console.log('DATA.PEDIDOS::::', data.pedidos)
      setPedidos(data.pedidos)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetPedidos()
  }, [])
  const data = React.useMemo(() => [...Pedidos], [Pedidos])
  const columns = React.useMemo(
    () => [
      {
        Header: 'Monto',
        accessor: 'monto'
      },
      {
        Header: 'Fecha',
        accessor: 'fecha',
        Cell: props => {
          moment.locale('es')
          const DateFormated = moment(props.value).format('L')
          return <span>{DateFormated}</span>
        }
      },
      {
        Header: 'Direccion',
        accessor: 'direccion'
      },
      {
        Header: 'Productos',
        accessor: 'productos',
        Cell: props => {
          const PorductosListaCompra = props.value.reduce((Lista, object) => {
            return Lista + ', ' + object.nombre + `(x${object.cantidad})`
          }, '')
          return <span>{PorductosListaCompra}</span>
          /* props.value.map(function (item) {
            console.log(item.nombre)
            return <span key={item}>{item.nombre}</span>
          }) */
        }
      },
      {
        Header: 'Usuario',
        accessor: 'usuario.nombre'
      },
      {
        Header: 'Estado',
        accessor: 'tracking'
      },
      {
        Header: 'id',
        accessor: '_id'
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
        <PedidosTable data={data} columns={columns} tablename='Pedidos' apiruta='checkout' role='admin' />
      </>
      ) /*: <TableStyled /> */)
}
