import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import { LoginScreen } from '../../components/auth/LoginScreen'
import { HomeScreen } from '../../components/Home/HomeScreen'
import { CategoriasScreen } from '../../components/Productos/Categorias'
import { UserPanel } from '../../components/Usuarios/UserPanelScreen'
import { PrivateRoute } from '../PrivateRouter'
import { PublicRoute } from '../PublicRouter'
export const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path='/' element={
            <PublicRoute>
              <HomeScreen />
            </PublicRoute>
                 }
        />

        <Route
          path='/login' element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
                 }
        />

        <Route
          path='/user'
          element={
            <PrivateRoute>
              <UserPanel />
            </PrivateRoute>
                   }
        />
        <Route
          path='/categorias' element={
            <PublicRoute>
              <CategoriasScreen />
            </PublicRoute>
                 }
        />
      </Routes>
    </>
  )
}
