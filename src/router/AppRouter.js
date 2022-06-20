import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startChecking } from '../actions/auth'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { PublicRouter } from './PublicRouter'
import { AdminRouter } from './AdminRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRoute, AdminRoute, PrivateRoute } from './Routes/RutasArray'
import { NotFound } from './../components/Home/NotFound'

export const AppRouter = () => {
  const dispatch = useDispatch()
  const { checking } = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  const PublicRoutes = PublicRoute.map(({ path, component }, key) =>
    <Route path={path} element={component} key={key} />
  )
  const AdminRoutes = AdminRoute.map(({ path, component }, key) =>
    <Route path={path} element={component} key={key} />
  )
  const PrivateRoutes = PrivateRoute.map(({ path, component }, key) =>
    <Route path={path} element={component} key={key} />
  )
  if (checking) {
    return <h5>Espere...</h5>
  }
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
