import { RECEIVE_READING } from '../actions/reading'

function receiveReading (state = {}, action) {
  switch (action.type) {
    case RECEIVE_READING:
      return action.reading

    default:
      return state
  }
}

export default receiveReading
