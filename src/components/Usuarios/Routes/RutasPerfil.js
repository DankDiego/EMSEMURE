import { UserCuponesScreen } from '../UserCuponesScreen'
import { UserDireccionScreen } from '../UserDireccionScreen'
import { UserMensajesScreen } from '../UserMensajesScreen'
import UserPerfil from '../UserPerfil'
import UserPedidosList from './../UserPedidosList'
import { UserPedidosScreen } from './../UserPedidosScreen'

export const RutasPerfil = [
  {
    path: '/perfil',
    Component: UserPerfil
  },
  { path: '/pedidos', Component: UserPedidosList },
  { path: '/pedidos/:id', Component: UserPedidosScreen },
  { path: '/direccion', Component: UserDireccionScreen },
  { path: '/cupones', Component: UserCuponesScreen },
  { path: '/mensajes', Component: UserMensajesScreen }
]
