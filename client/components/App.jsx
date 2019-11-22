import React from 'react'
import Tarot from './Tarot'
import Loading from './Loading'
import Reading from './Reading'
import Prediction from './Prediction'
import ErrorMessage from './ErrorMessage'

const App = () => (
  <div className='app'>
    <Tarot/>
    <Loading/>
    <Reading>
      <Prediction/>
      <ErrorMessage/>
    </Reading>
  </div>
)

export default App
