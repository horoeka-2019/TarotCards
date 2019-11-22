import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Header } from 'semantic-ui-react'

class Prediction extends Component {
  render () {
    const predictions = ['meaning_up', 'meaning_rev']
    const { userChoice } = this.props
    return (
      <Container text>
        <Header as='h2'>Your Prediction</Header>
        <p> Your {userChoice} is {predictions[randomInt()]} </p>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userChoice: state.userChoice
  }
}

export default connect(mapStateToProps)(Prediction)

const randomInt = () => Math.floor(Math.random() * 2)
