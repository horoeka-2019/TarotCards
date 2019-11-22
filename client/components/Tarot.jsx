import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form } from 'semantic-ui-react'

import { fetchReading } from '../redux/reducers/index'

class Tarot extends Component {
  constructor () {
    super()
    this.state = {
      choice: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect (e) {
    this.setState({
      choice: e.target.value
    })
  }
  render () {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field label='Choose your category for advice' control='select'>
            <option value='Lovelife'>Lovelife</option>
            <option value='Family'>Family</option>
            <option value='Career'>Career</option>
            <option value='Finance'>Finance</option>
            <option value='Health'>Health</option>
          </Form.Field>
        </Form.Group>
        <Form.Field label='Submit your category' control='button' onChange={this.handleSelect} onSubmit={() => this.props.fetchReading(this.state.choice)} >
          Submit
        </Form.Field>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reading: state.reading
  }
}

const mapDispatchToProps = {
  fetchReading
}
export default connect(mapStateToProps, mapDispatchToProps)(Tarot)
