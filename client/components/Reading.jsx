import React from 'react'
import { connect } from 'react-redux'
import Prediction from './Prediction'

// This component will render the information returned by the api request serverside.
// this will require that mapStatetoProps gets the data from the client state

const Reading = (props) => {
  return <>
    <h1>{props.card.name}</h1>
    <img href={`tarot-images${props.card.name_short}`} alt={props.card.desc} />
    <Prediction/>
  </>
}

function mapStateToProps (state) {
  return {
    card: state.reading.cards[0]
  }
}

export default connect(mapStateToProps)(Reading)
