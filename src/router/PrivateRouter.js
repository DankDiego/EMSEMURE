import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ children }) => {
  const { cheking } = useSelector(state => state.auth)
  return cheking
    ? children
    : <Navigate to='/login' />
}
