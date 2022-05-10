import React from 'react'
import { Outlet } from 'react-router-dom'
/* import { useSelector } from 'react-redux' */
import PublicFooter from './../components/Footers/PublicFooter'
import PublicNavBar from './../components/Navbars/PublicNavBar'
export const PublicRouter = () => {
  // Si estas logueado no te deja entrar
  /* const { isLoggedIn } = useSelector(state => state.auth) */
  /* const noLogged = true */
  return (
    <>
      <PublicNavBar />
      <Outlet />
      <PublicFooter />
    </>
  )
}
