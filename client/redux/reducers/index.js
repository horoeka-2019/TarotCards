import { combineReducers } from 'redux'

import currentPage from './navigation'
import waiting from './waiting'
import userChoice from './userChoice'
import errorMessage from './error-message'
import reading from './reading'

export default combineReducers({
  currentPage,
  waiting,
  userChoice,
  errorMessage,
  reading
})
