import { UserCuponesScreen } from '../UserCuponesScreen'
import { UserDireccionScreen } from '../UserDireccionScreen'
import { UserMensajesScreen } from '../UserMensajesScreen'

import { UserPedidosScreen } from '../UserPedidosScreen'
import UserPerfil from '../UserPerfil'

export const RutasPerfil = [
  {
    path: '/perfil',
    Component: UserPerfil
  },
  { path: '/pedidos', Component: UserPedidosScreen },
  { path: '/direccion', Component: UserDireccionScreen },
  { path: '/cupones', Component: UserCuponesScreen },
  { path: '/mensajes', Component: UserMensajesScreen }
]
