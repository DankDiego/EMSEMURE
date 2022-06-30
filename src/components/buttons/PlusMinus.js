/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { startCartMinus, startCartPlus } from './../../actions/shopcart'
import { useDispatch } from 'react-redux'
export default function PlusMinus (props) {
  const [precioprop, setPrecioprop] = useState(props.precio)
  const [stocking, setStocking] = useState(props.stock)
  const [cantidad, setcantidad] = useState(1)
  const [position, setposition] = useState(props.position)
  const dispatch = useDispatch()
  function handlePlusProduct () {
    return function (dispatch) {
      dispatch(startCartPlus(position)).then(() => {
        if (cantidad < stocking) {
          setcantidad(cantidad + 1)
        }
      })
    }
  }

  function handleMinusProduct () {
    return function (dispatch) {
      dispatch(startCartMinus(position)).then(() => {
        if (cantidad > 1) {
          setcantidad(cantidad - 1)
        }
      })
    }
  }

  if (precioprop) {
    return (
      <>
        <div className='flex justify-center w-1/5'>
          <AiFillMinusCircle color='white' size={24} onClick={() => dispatch(handleMinusProduct())} />
          <div className='mx-2 text-white w-12 text-center'>{cantidad}</div>
          <AiFillPlusCircle color='white' size={24} onClick={() => dispatch(handlePlusProduct())} />
        </div>
        <span className='text-center w-1/5 font-semibold text-sm text-white'>{cantidad * precioprop}$</span>
      </>
    )
  }
}
