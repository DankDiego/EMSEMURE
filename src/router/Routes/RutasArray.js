import { HomeScreen } from './../../components/Home/HomeScreen'
import { LoginScreen } from './../../components/auth/LoginScreen'
import { CategoriasScreen } from './../../components/Productos/Categorias'
import { AdminLogin } from './../../components/Admin/AdminLogin'
export const PublicRoute =
[{
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
export const AdminRoute =
[{
  path: 'panel',
  component: <AdminLogin />
}, {
  path: 'categoria',
  component: <LoginScreen />
}, {
  path: 'categoria/new',
  component: <CategoriasScreen />
}
]
