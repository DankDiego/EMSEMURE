import { Navigate, Outlet } from 'react-router-dom'
import AdminNavBar from './../components/Navbars/AdminNavBar'

export const AdminRouter = () => {
  /* const isAdmin = true */
  /* const { isLoggedIn } = useSelector(state => state.auth) */
  // eslint-disable-next-line no-undef
  const ROLE_ACCOUNT = localStorage.getItem('ROLE_ACCOUNT')
  // eslint-disable-next-line no-undef
  const PASSPORT = localStorage.getItem('PASSPORT')
  if (PASSPORT) {
    if (ROLE_ACCOUNT === 'ADMIN_ROLE') {
      console.log('ADMIN LOGUEADO')
      return (
        <div className='flex min-h-screen'>
          <nav className='w-64 flex-shrink-0'>
            <AdminNavBar />
          </nav>

          <div className='flex flex-col w-full h-screen  bg-gray-900'>

            <Outlet />
          </div>
        </div>
      )
    } else {
      return (<Navigate to='/login' />)
    }
  } else {
    return (<Navigate to='/login' />)
  }
}
