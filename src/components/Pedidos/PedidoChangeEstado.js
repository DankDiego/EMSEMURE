import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { fetchSinToken } from '../../helpers'
import { CambiarEstadoPedido } from '../../helpers/RestApi'
import { Container } from './../Container/Container'
export default function PedidoChangeEstado () {
  const { id } = useParams()
  const navigate = useNavigate()
  const [Productos, setProductos] = useState('')
  const [PedidoEstado, setPedidoEstado] = useState('')
  const [Pedido, setPedido] = useState(
    {
      _id: '',
      monto: 0,
      tracking: '',
      productos: [],
      usuario: { nombre: 'User', _id: '00' },
      fecha: '',
      direccion: ''

    })
  async function GetPedido (id) {
    try {
      const endpoint = `checkout/pedido/${id}`
      const resp = await fetchSinToken(endpoint)
      const data = await resp.json()
      setPedido(data.pedidos[0])
      const ListItem = data.pedidos[0].productos.reduce((Lista, object) => {
        return Lista + ', ' + object.nombre + `(x${object.cantidad})`
      }, '')
      setPedidoEstado(data.pedidos[0].tracking)
      setProductos(ListItem)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetPedido(id)
  }, [])

  const ChangeStatus = (estado) => {
    const ruta = 'checkout/pedido/' + id
    console.log(ruta, estado)
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Cambiaras el estado del Pedido',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Cambiar'
    }).then((result) => {
      if (result.isConfirmed) {
        CambiarEstadoPedido(ruta, estado)
        setPedidoEstado(estado)
      }
    })
  }
  return (
    <Container>
      <h1 className='text-white text-3xl text-center mb-6'>Cambiar estado de Pedido</h1>

      <div className='flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-500 '>

        <div className='flex items-center'>

          <div className='flex flex-col items-center mx-5 space-y-1'>
            <h2 className='text-lg font-medium text-gray-700 sm:text-3xl dark:text-gray-200'>Monto:</h2>

          </div>
        </div>

        <h2 className='text-2xl font-semibold text-gray-500 sm:text-3xl text-center  dark:text-gray-300'>
          ${Pedido.monto}
        </h2>

      </div>

      <div className='flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-500 '>

        <div className='flex items-center'>

          <div className='flex flex-col items-center mx-5 space-y-1'>
            <h2 className='text-lg font-medium text-gray-700 sm:text-3xl dark:text-gray-200'>Cliente:</h2>

          </div>
        </div>

        <h2 className='text-2xl font-semibold text-gray-500 text-center  sm:text-3xl dark:text-gray-300'>
          {Pedido.usuario.nombre}
        </h2>

      </div>
      <div className='flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-500 '>

        <div className='flex items-center'>

          <div className='flex flex-col items-center mx-5 space-y-1'>
            <h2 className='text-lg font-medium text-gray-700 sm:text-3xl dark:text-gray-200'>Direccion:</h2>

          </div>
        </div>

        <h2 className='text-xl text-center font-semibold text-gray-500 sm:text-xl dark:text-gray-300'>
          {Pedido.direccion}
        </h2>

      </div>
      <div className='flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-500 '>

        <div className='flex items-center'>

          <div className='flex flex-col items-center mx-5 space-y-1'>
            <h2 className='text-lg font-medium text-gray-700 sm:text-3xl dark:text-gray-200'>Producos:</h2>

          </div>
        </div>

        <h2 className='text-xl text-center font-semibold text-gray-500 sm:text-xl dark:text-gray-300'>
          {Productos}
        </h2>

      </div>
      <div className='flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-500 '>

        <div className='flex items-center'>

          <div className='flex flex-col items-center mx-5 space-y-1'>
            <h2 className='text-lg font-medium text-gray-700 sm:text-3xl dark:text-gray-200'>Estado:</h2>

          </div>
        </div>

        <h2 className='text-xl text-center font-semibold text-gray-500 sm:text-xl dark:text-gray-300'>
          {PedidoEstado}
        </h2>

      </div>
      <div className='flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-500 '>

        <button onClick={() => ChangeStatus('En Revision')} type='submit' className='bg-blue-600 w-28 h-10 rounded-md text-md text-white font-semibold'>
          En Revision
        </button>
        <button onClick={() => ChangeStatus('En Camino')} type='submit' className='bg-yellow-600 w-28 h-10 rounded-md text-md text-white font-semibold'>
          En Camino
        </button>
        <button onClick={() => ChangeStatus('Cancelado')} type='submit' className='bg-red-700 w-28 h-10 rounded-md text-md text-white font-semibold'>
          Cancelado
        </button>
        <button onClick={() => ChangeStatus('Completado')} type='submit' className='bg-green-700 w-28 h-10 rounded-md text-md text-white font-semibold'>
          Completado
        </button>

      </div>
      <button onClick={() => navigate(-1)} type='button' className='bg-gray-600 flex text-white justify-center items-center w-full  px-4 py-3 rounded-md focus:outline-none'>
        Volver
      </button>
    </Container>
  )
}
