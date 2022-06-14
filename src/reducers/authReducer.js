import { types } from '../types/types'

const initialState = {
  isLoggedIn: false,
  checking: false,
  user: {
    rol: 'USER_ROLE',
    estado: true,
    google: false,
    nombre: 'Invitado',
    correo: 'invitado@invitado.com',
    uid: 'invitado000001'
  }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false
      }

    case types.authCheckingFinish:
      return {
        ...state,
        checking: false
      }

    case types.authLogout:
      return {
        checking: false
      }

    default:
      return state
  }
}
