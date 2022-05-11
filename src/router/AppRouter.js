import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { PublicRouter } from './PublicRouter'
import { AdminRouter } from './AdminRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRoute, AdminRoute, PrivateRoute } from './Routes/RutasArray'

export const AppRouter = () => {
  const PublicRoutes = PublicRoute.map(({ path, component }, key) =>
    <Route path={path} element={component} key={key} />
  )
  const AdminRoutes = AdminRoute.map(({ path, component }, key) =>
    <Route path={path} element={component} key={key} />
  )
  const PrivateRoutes = PrivateRoute.map(({ path, component }, key) =>
    <Route path={path} element={component} key={key} />
  )
  return (
    <BrowserRouter>
      <Routes>

        {/* RUTAS PUBLICAS */}
        <Route path='/' element={<PublicRouter />}>
          {PublicRoutes}
        </Route>

        {/* RUTAS PRIVADAS */}
        <Route path='/usuario' element={<PrivateRouter />}>
          {PrivateRoutes}
        </Route>

        {/* RUTAS ADMIN */}
        <Route path='/admin' element={<AdminRouter />}>
          {AdminRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
