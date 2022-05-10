/* eslint-disable no-unused-vars */
import React from 'react'
import {
  Route, Routes
} from 'react-router-dom'
import { LoginScreen } from '../../components/auth/LoginScreen'
import { HomeScreen } from '../../components/Home/HomeScreen'
import { CategoriasScreen } from '../../components/Productos/Categorias'
import { UserPanel } from '../../components/Usuarios/UserPanelScreen'
import { PrivateRoute } from '../PrivateRouter'
import { PublicRouter } from './../PublicRouter'
export const UserRoutes = () => {
  return (
    <>
      <Route path='inicio' element={<HomeScreen />} />
      <Route path='login' element={<LoginScreen />} />
      <Route path='categorias' element={<CategoriasScreen />} />
    </>
  )
}
