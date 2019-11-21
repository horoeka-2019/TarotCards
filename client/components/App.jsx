import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import api from '../api'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <WaitIndicator />
  </div>
)

export default App
