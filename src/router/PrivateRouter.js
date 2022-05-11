import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PublicFooter from './../components/Footers/PublicFooter'
import PublicNavBar from './../components/Navbars/PublicNavBar'

export const PrivateRouter = () => {
  const { isLoggedIn } = useSelector(state => state.auth)
  if (isLoggedIn) {
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
