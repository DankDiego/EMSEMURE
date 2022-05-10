import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { PublicRouter } from './PublicRouter'
import { PublicRoute, AdminRoute } from './Routes/RutasArray'
import { AdminRouter } from './AdminRouter'

export const AppRouter = () => {
  const PublicRoutes = PublicRoute.map(({ path, component }, key) =>
    <Route path={path} element={component} key={key} />
  )
  const AdminRoutes = AdminRoute.map(({ path, component }, key) =>
    <Route path={path} element={component} key={key} />
  )
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRouter />}>
          {PublicRoutes}
        </Route>
        <Route path='/admin' element={<AdminRouter />}>
          {AdminRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
