import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Container } from 'semantic-ui-react'

import { fetchReading } from '../redux/actions/index'

class Tarot extends Component {
  constructor() {
    super()
    this.state = {
      choice: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(e) {
    this.setState({
      choice: e.target.value
    })
  }
  render() {
    return (

      <>
       <div className='mainHeader'>
         <div>
           <img className='rightImage' src={'tarotheader.jpeg'} className='tarot'/>
        </div>
          <div>
            <h1 className='header'>Tarot</h1>
          </div>
        {/* <div>
          <img className='leftImage'src={'tarotheader.jpeg'} className='tarot'/>
        </div> */}
       </div>
      <div className='form'>
      <Form onChange={this.handleSelect} onSubmit={() => this.props.fetchReading(this.state.choice)}>
        <Form.Group widths='equal'>
          <Form.Field label='Choose your category for advice' control='select'>
            <option value='Lovelife'>Lovelife</option>
            <option value='Family'>Family</option>
            <option value='Career'>Career</option>
            <option value='Finance'>Finance</option>
            <option value='Health'>Health</option>
          </Form.Field>
        </Form.Group>
        <Form.Field label='Submit your category' control='button' >
          Submit
        </Form.Field>
      </Form>
      </div>
      </>

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
