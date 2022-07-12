import React, { useEffect, useState } from 'react'
import { AiOutlineTeam, AiOutlineUserAdd, AiOutlineCreditCard, AiFillShop, AiFillAlert } from 'react-icons/ai'
import { GetPedidos, GetPedidosMesActual, GetUsers, GetUsersMesActual } from '../../helpers/Estadisticas'
export default function DashBoard () {
  const [Users, setUsers] = useState([])
  const [UsersMensual, setUsersMensual] = useState([])
  const [Pedidos, setPedidos] = useState([])
  const [PedidosMensual, setPedidosMensual] = useState([])
  const [Monto, setMonto] = useState(0)
  const [MontoMensual, setMontoMensual] = useState(0)
  const mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date())
  async function DashData () {
    const users = await GetUsers()
    const usersmes = await GetUsersMesActual()
    const gettingpedidos = await GetPedidos()
    const pedidosmes = await GetPedidosMesActual()
    setUsers(users)
    setUsersMensual(usersmes)
    setPedidos(gettingpedidos.datapedidos)
    setMonto(gettingpedidos.montototal)
    setPedidosMensual(pedidosmes.data)
    setMontoMensual(pedidosmes.montomensual)
  }

  useEffect(() => {
    DashData()
  }, [])

  return (

    <div>
      <div className='w-full px-4 md:px-0 md:mt-8 mb-6 text-gray-800 leading-normal'>

        <div className='flex flex-wrap'>

          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>

            <div className='bg-white border rounded shadow p-2'>
              <div className='flex flex-row items-center'>
                <div className='flex-shrink pr-4'>
                  <div className='rounded p-3 bg-green-600'><i className='fas fa-users fa-2x fa-fw fa-inverse' />
                    <AiOutlineTeam className='text-white' size={29} />
                  </div>
                </div>
                <div className='flex-1 text-right md:text-center'>
                  <h5 className='font-bold uppercase text-gray-500'>total de usuarios</h5>
                  <h3 className='font-bold text-3xl'>{Users.total}

                  </h3>
                </div>
              </div>
            </div>

          </div>
          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>

            <div className='bg-white border rounded shadow p-2'>
              <div className='flex flex-row items-center'>
                <div className='flex-shrink pr-4'>
                  <div className='rounded p-3 bg-blue-800'><i className='fas fa-users fa-2x fa-fw fa-inverse' />
                    <AiFillShop className='text-white' size={29} />
                  </div>
                </div>
                <div className='flex-1 text-right md:text-center'>
                  <h5 className='font-bold uppercase text-gray-500'>Total de Pedidos</h5>
                  <h3 className='font-bold text-3xl'>{Pedidos.total}

                  </h3>
                </div>
              </div>
            </div>

          </div>

          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>

            <div className='bg-white border rounded shadow p-2'>
              <div className='flex flex-row items-center'>
                <div className='flex-shrink pr-4'>
                  <div className='rounded p-3 bg-red-600'><i className='fas fa-users fa-2x fa-fw fa-inverse' />
                    <AiOutlineCreditCard className='text-white' size={29} />
                  </div>
                </div>
                <div className='flex-1 text-right md:text-center'>
                  <h5 className='font-bold uppercase text-gray-500'>Balance Aprox</h5>
                  <h3 className='font-bold text-3xl'>{Monto}$

                  </h3>
                </div>
              </div>
            </div>

          </div>

          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>

            <div className='bg-white border rounded shadow p-2'>
              <div className='flex flex-row items-center'>
                <div className='flex-shrink pr-4'>
                  <div className='rounded p-3 bg-yellow-600'><i className='fas fa-users fa-2x fa-fw fa-inverse' />
                    <AiOutlineUserAdd className='text-white' size={29} />
                  </div>
                </div>
                <div className='flex-1 text-right md:text-center'>
                  <h5 className='font-bold uppercase text-gray-500'>Nuevos usuarios {mesActual}</h5>
                  <h3 className='font-bold text-3xl'>{UsersMensual.total}

                  </h3>
                </div>
              </div>
            </div>

          </div>
          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>

            <div className='bg-white border rounded shadow p-2'>
              <div className='flex flex-row items-center'>
                <div className='flex-shrink pr-4'>
                  <div className='rounded p-3 bg-blue-500'><i className='fas fa-users fa-2x fa-fw fa-inverse' />
                    <AiFillAlert className='text-white' size={29} />
                  </div>
                </div>
                <div className='flex-1 text-right md:text-center'>
                  <h5 className='font-bold uppercase text-gray-500'>Pedidos {mesActual}</h5>
                  <h3 className='font-bold text-3xl'>{PedidosMensual.total}

                  </h3>
                </div>
              </div>
            </div>

          </div>
          <div className='w-full md:w-1/2 xl:w-1/3 p-3'>

            <div className='bg-white border rounded shadow p-2'>
              <div className='flex flex-row items-center'>
                <div className='flex-shrink pr-4'>
                  <div className='rounded p-3 bg-blue-500'><i className='fas fa-users fa-2x fa-fw fa-inverse' />
                    <AiFillAlert className='text-white' size={29} />
                  </div>
                </div>
                <div className='flex-1 text-right md:text-center'>
                  <h5 className='font-bold uppercase text-gray-500'>Balance {mesActual}</h5>
                  <h3 className='font-bold text-3xl'>{MontoMensual}$

                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='flex flex-row flex-wrap flex-grow mt-1'>

        <div className='w-full md:w-1/2 p-3'>

          <div className='bg-white border rounded shadow'>
            <div className='border-b p-3'>
              <h5 className='font-bold uppercase text-gray-600'>Graph</h5>
            </div>
            <div className='p-5'>
              <canvas id='chartjs-7' className='chartjs' width='undefined' height='undefined' />

            </div>
          </div>

        </div>

        <div className='w-full md:w-1/2 p-3'>

          <div className='bg-white border rounded shadow'>
            <div className='border-b p-3'>
              <h5 className='font-bold uppercase text-gray-600'>Graph</h5>
            </div>
            <div className='p-5'>
              <canvas id='chartjs-0' className='chartjs' width='undefined' height='undefined' />

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
