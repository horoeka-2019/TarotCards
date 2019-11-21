import {
  SHOW_ERROR,
  REQUEST_READING,
  RECEIVE_READING } from '../actions/reading'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_READING:
      return true

    case RECEIVE_READING:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
