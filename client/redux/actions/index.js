import request from 'superagent'

import { requestReading, receiveReading, showError } from './reading'

export function fetchReading () {
  return (dispatch) => {
    dispatch(requestReading())
    return request
      .get('/api/v1')
      .then(res => {
        dispatch(receiveReading(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
