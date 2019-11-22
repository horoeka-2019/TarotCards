import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

// This component will render the information returned by the api request serverside.
// this will require that mapStatetoProps gets the data from the client state

const Reading = (props) => {
  return <>
    <h1>{props.card.name}</h1>
    <img href={`tarot-images${props.card.name_short}`} alt={props.card.desc} />
  </>
}

function mapStateToProps (state) {
  console.log(state.reading)
  return {
    card: state.reading.cards[0]
  }
}

<Button>Click Here</Button>

export default connect(mapStateToProps)(Reading)
