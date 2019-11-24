import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Header } from 'semantic-ui-react'

class Prediction extends Component {
  render () {
    const { userChoice, card } = this.props
    const int = randomInt()
    return (
      <Container text>
        <p> Your card means
          { int ? card.meaning_up : card.meaning_rev } </p>

        <Header as='h2'>Your Prediction</Header>
        <p> Your card indicates that {userChoice} will be  {
          int ? 'great !' : 'not so great :('
        } </p>
        
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userChoice: state.userChoice,
    card: state.reading.cards[0]
  }
}

export default connect(mapStateToProps)(Prediction)

const randomInt = () => Math.floor(Math.random() * 2)
