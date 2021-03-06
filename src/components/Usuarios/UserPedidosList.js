import React, { useEffect, useState } from 'react'
import { PedidosTable } from './../tables/PedidosTable'
import { fetchSinToken } from '../../helpers/fetch'
import moment from 'moment'
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
      <h1 className='text-white'>NO TIENES PEDIDOS AUN</h1>
      )
    : (
      <>
        <PedidosTable data={data} columns={columns} tablename='Pedidos' apiruta='checkout' role='user' />
      </>
      ) /*: <TableStyled /> */)
}
