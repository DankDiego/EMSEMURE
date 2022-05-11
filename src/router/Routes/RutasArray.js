import { HomeScreen } from './../../components/Home/HomeScreen'
import { LoginScreen } from './../../components/auth/LoginScreen'
import { CategoriasScreen } from './../../components/Productos/Categorias'
import { AdminLogin } from './../../components/Admin/AdminLogin'
import { CrearCategoria } from './../../components/Productos/CrearCategoria'
import { UserCartScreen } from './../../components/Usuarios/UserCartScreen'
import { UserPanel } from './../../components/Usuarios/UserPanelScreen'
import { CategoriaList } from './../../components/Productos/CategoriasList'

// AQUI LAS RUTAS PUBLICAS SIN NINGUN TIPO DE AUTENTICACION
export const PublicRoute =
[{
  path: '/',
  component: <HomeScreen />
},
{
  path: 'inicio',
  component: <HomeScreen />
}, {
  path: '/login',
  component: <LoginScreen />
}, {
  path: 'categorias',
  component: <CategoriasScreen />
}
]
// AQUI LAS RUTAS PRIVADAS DE USUARIO TIPO USER_ROLE
export const PrivateRoute =
[{
  path: 'carrito',
  component: <UserCartScreen />
},
{
  path: 'panel',
  component: <UserPanel />
}
]
// AQUI LAS RUTAS DE ADMINISTRADOR TIPO ADMIN_ROLE
export const AdminRoute =
[{
  path: 'panel',
  component: <AdminLogin />
}, {
  path: 'categoria',
  component: <LoginScreen />
}, {
  path: 'categoria/new',
  component: <CrearCategoria />
},
{
  path: 'categoria/listar',
  component: <CategoriaList />
}
]
