import { types } from '../types/types'

const initialState = {
  cartProducts: [],
  montototal: 0
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
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload]
        }
      } else {
        return { ...state }
      }
    }

    case types.cartRemove:{
      const result = state.cartProducts.filter((item) => item._id !== action.payload)
      return {
        ...state,
        cartProducts: result
      }
    }

    case types.cartMontoTotal:{
      const montototal = state.cartProducts.reduce(function (acc, obj) { return acc + obj.monto }, 0)
      return {
        ...state,
        montototal
      }
    }

    case types.cartPlusOne:{
      const canti = state.cartProducts[action.payload].cantidad
      const stock = state.cartProducts[action.payload].stock
      if (canti < stock) {
        const incremented = canti + 1
        const preciounit = state.cartProducts[action.payload].precio
        state.cartProducts[action.payload].cantidad = incremented
        state.cartProducts[action.payload].monto = incremented * preciounit
        return {
          ...state
        }
      } else {
        return { ...state }
      }
    }
    case types.cartMinusOne:{
      const canti = state.cartProducts[action.payload].cantidad
      if (canti > 1) {
        const decremented = canti - 1
        const preciounit = state.cartProducts[action.payload].precio
        state.cartProducts[action.payload].cantidad = decremented
        state.cartProducts[action.payload].monto = decremented * preciounit
        return {
          ...state
        }
      } else {
        return { ...state }
      }
    }

    default:
      return state
  }
}
