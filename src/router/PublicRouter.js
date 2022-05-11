import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicFooter from './../components/Footers/PublicFooter'
import PublicNavBar from './../components/Navbars/PublicNavBar'
export const PublicRouter = () => {
  return (
    <>
      <PublicNavBar />
      <Outlet />
      <PublicFooter />
    </>
  )
}
