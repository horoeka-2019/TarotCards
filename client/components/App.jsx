import React, { Component } from 'react'
import { connect } from 'react-redux'

import Tarot from './Tarot'
import Loading from './Loading'
import Reading from './Reading'
import Prediction from './Prediction'
import ErrorMessage from './ErrorMessage'

class App extends Component {
  state = { }
  render () {
    return (
      <div className='app'>
        {this.props.currentPage === 'tarot'
          ? <Tarot>
            <Loading/>
          </Tarot>
          : <Reading>
            <Prediction/>
            <ErrorMessage/>
          </Reading>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
