import { types } from '../types/types'

const initialState = {
  cartProducts: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cartLoaded:
      return {
        ...state,
        ...action.payload
      }
    case types.cartAddNew:{
      const result = state.cartProducts.filter(x => x._id === action.payload._id)
      if (!result.length) {
        console.log('HE CAIDO EN AGREGAR PROD AL STATE')
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload]
        }
      } else {
        console.log('HE CAIDO EN ROTORNAR EL MISMO STATE')
        return { ...state }
      }
    }

    default:
      return state
  }
}
