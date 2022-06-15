import { Navigate, Outlet } from 'react-router-dom'
import PublicFooter from './../components/Footers/PublicFooter'
import PublicNavBar from './../components/Navbars/PublicNavBar'

export const PrivateRouter = () => {
  // eslint-disable-next-line no-undef
  const PASSPORT = localStorage.getItem('PASSPORT')
  if (PASSPORT) {
    return (
      <>
        <PublicNavBar />
        <Outlet />
        <PublicFooter />
      </>
    )
  } else {
    return (<Navigate to='/login' />)
  }
}
