import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'

class Prediction extends Component {
  render () {
    const predictions = []
    return (
      <Container text>
        <Header as='h2'>Header</Header>

        <p>

        </p>
      </Container>
    )
  }
}

export default Prediction

const randomInt = () => Math.floor(Math.random() * 2)
