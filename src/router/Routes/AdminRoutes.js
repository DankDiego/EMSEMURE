import React from 'react'
import {
  Route, Routes
} from 'react-router-dom'
import { AdminLogin } from '../../components/Admin/AdminLogin'
import { AdminRouter } from '../AdminRouter'
/* import { AdminPanel } from '../../components/Admin/AdminPanel' */
import { CrearCategoria } from './../../components/Productos/CrearCategoria'
export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='admin' element={<AdminRouter />}>
        <Route path='login' element={<AdminLogin />} />
        <Route path='panel' />
        <Route path='categoria'>
          <Route path='new' element={<CrearCategoria />} />
        </Route>
        {/* <Route
            index
            element={<div>Default Page Content</div>}
          /> */}
      </Route>
    </Routes>
  )
}
