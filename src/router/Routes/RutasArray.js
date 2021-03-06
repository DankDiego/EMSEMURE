import { HomeScreen } from './../../components/Home/HomeScreen'
import { LoginScreen } from './../../components/auth/LoginScreen'
import { CategoriasScreen } from './../../components/Productos/Categorias'
import { AdminLogin } from './../../components/Admin/AdminLogin'
import { CrearCategoria } from './../../components/Productos/CrearCategoria'
import { UserCartScreen } from './../../components/Usuarios/UserCartScreen'
import { UserPanel } from './../../components/Usuarios/UserPanelScreen'
import { CategoriaList } from './../../components/Productos/CategoriasList'
import { ProductosList } from '../../components/Productos/ProductosList'
import { CrearProducto } from './../../components/Productos/CrearProducto'
import { RegisterScreen } from './../../components/auth/RegisterScreen'
import { EditProducto } from './../../components/Productos/EditProducto'
import { EditCategoria } from './../../components/Productos/EditCategoria'
import { VerProducto } from '../../components/Productos/VerProducto'
import UserPayScreen from './../../components/Usuarios/UserPayScreen'
import UserCheckOutScreen from './../../components/Usuarios/UserCheckOutScreen'
import UserPayAproved from './../../components/Usuarios/UserPayAproved'
import UserPayDesaproved from './../../components/Usuarios/UserPayDesaproved'
import DashBoard from './../../components/Charts/DashBoard'
import { UsuariosList } from './../../components/Productos/UsuariosList'
import PedidosList from './../../components/Pedidos/PedidosList'
import PedidoChangeEstado from './../../components/Pedidos/PedidoChangeEstado'

// AQUI LAS RUTAS PUBLICAS SIN NINGUN TIPO DE AUTENTICACION
export const PublicRoute =
[
  {
    path: '/',
    component: <HomeScreen />
  },
  {
    path: 'inicio',
    component: <HomeScreen />
  },
  {
    path: '/login',
    component: <LoginScreen />
  },
  {
    path: '/registro',
    component: <RegisterScreen />
  },
  {
    path: '/categorias',
    component: <CategoriasScreen />
  },
  {
    path: '/categorias/producto/:id',
    component: <VerProducto />
  }
]
// AQUI LAS RUTAS PRIVADAS DE USUARIO TIPO USER_ROLE
export const PrivateRoute =
[{
  path: 'carrito',
  component: <UserCartScreen />
},
{
  path: 'carrito/checkout',
  component: <UserPayScreen />
},
{
  path: 'carrito/checkoutproducts',
  component: <UserCheckOutScreen />
},
{
  path: 'carrito/pagoaprobado',
  component: <UserPayAproved />
},
{
  path: 'carrito/pagodesaprobado',
  component: <UserPayDesaproved />
},
{
  path: 'panel/*',
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
},
{
  path: 'producto/listar',
  component: <ProductosList />
},
{
  path: 'producto/new',
  component: <CrearProducto />
},
{
  path: 'productos/edit/:id',
  component: <EditProducto />
},
{
  path: 'categorias/edit/:id',
  component: <EditCategoria />
},
{
  path: 'usuarios/listar',
  component: <UsuariosList />
},
{
  path: 'pedidos/listar',
  component: <PedidosList />
},
{
  path: 'pedido/status/:id',
  component: <PedidoChangeEstado />
},
{
  path: 'charts/dashboard',
  component: <DashBoard />
}

]
