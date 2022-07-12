import { types } from '../types/types'

const initialState = {
  loaderOpen: false
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenLoader:
      return {
        ...state,
        loaderOpen: true
      }

    case types.uiCloseLoader:
      return {
        ...state,
        loaderOpen: false
      }

    default:
      return state
  }
}
