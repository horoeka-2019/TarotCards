import request from 'superagent'

import { requestReading, receiveReading, showError } from './reading'
import { navigate } from './navigation'
import { userChoice } from './userChoice'

export function fetchReading (choice) {
  return (dispatch) => {
    dispatch(requestReading())
    return request
      .get('/api/v1')
      .then(res => {
        dispatch(receiveReading(res.body))
      })
      .then(dispatch(navigate('reading')))
      .then(dispatch(userChoice(choice)))
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
