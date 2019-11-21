export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_READING = 'RECEIVE_READING'
export const REQUEST_READING = 'REQUEST_READING'

export const requestReading = (reading) => {
  return {
    type: REQUEST_READING
  }
}

export const receiveReading = (reading) => {
  return {
    type: RECEIVE_READING,
    reading: reading
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
