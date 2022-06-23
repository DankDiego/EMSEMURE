import { types } from '../types/types'

const initialState = {
  cartProducts: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cartLoaded:
      return {
        ...state,
        cartProducts: [...action.payload]
      }

    default:
      return state
  }
}
