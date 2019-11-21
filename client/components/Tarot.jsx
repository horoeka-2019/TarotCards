import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form } from 'semantic-ui-react'

class Tarot extends Component {
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
        <Form.Field label='Submit your category' control='button'>
           Submit
        </Form.Field>
      </Form>
    )
  }
}

export default connect()(Tarot)
