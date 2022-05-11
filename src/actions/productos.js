/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2'

import { types } from '../types/types'
import { fetchConToken } from '../helpers/fetch'

export const categoriaNew = (categoria) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetchConToken('categorias', categoria, 'POST')
      const body = await resp.json()

      console.log(body)

      if (body.ok) {
        console.log(categoria)
        /* dispatch(eventAddNew(producto)) */
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const productoNew = (producto) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetchConToken('productos', producto, 'POST')
      const body = await resp.json()

      console.log(body)

      if (body.ok) {
        console.log(producto)
        /* dispatch(eventAddNew(producto)) */
      }
    } catch (error) {
      console.log(error)
    }
  }
}

/* const eventAddNew = (producto) => ({
  type: types.productoAddNew,
  payload: producto
}) */

/* export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event
}) */

/* export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent }) */

/* export const eventStartUpdate = (event) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`events/${event.id}`, event, 'PUT')
      const body = await resp.json()

      if (body.ok) {
        dispatch(eventUpdated(event))
      } else {
        Swal.fire('Error', body.msg, 'error')
      }
    } catch (error) {
      console.log(error)
    }
  }
} */

/* const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event
}) */

/* export const eventStartDelete = () => {
  return async (dispatch, getState) => {
    const { id } = getState().calendar.activeEvent
    try {
      const resp = await fetchConToken(`events/${id}`, {}, 'DELETE')
      const body = await resp.json()

      if (body.ok) {
        dispatch(eventDeleted())
      } else {
        Swal.fire('Error', body.msg, 'error')
      }
    } catch (error) {
      console.log(error)
    }
  }
} */

/* const eventDeleted = () => ({ type: types.eventDeleted }) */

/* export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken('events')
      const body = await resp.json()

      const events = prepareEvents(body.eventos)
      dispatch(eventLoaded(events))
    } catch (error) {
      console.log(error)
    }
  }
} */

/* const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events
}) */

export const eventLogout = () => ({ type: types.eventLogout })
