import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import ElementaryWatsonComponent from './index' // eslint-disable-line no-unused-vars

class TestComponent extends Component { // eslint-disable-line no-unused-vars
  constructor () {
    super()
    this.state = { element: null }
  }

  onClick (evt) {
    this.setState({ element: evt.target })
  }

  render () {
    const { element } = this.state
    return (
      <div>
        <div>
          <div style={{ width: '100px', backgroundColor: 'red' }} onClick={(evt) => this.onClick(evt)}>Elementary</div>
          <div style={{ position: 'absolute', top: '200px', left: '200px', backgroundColor: 'green' }} onClick={(evt) => this.onClick(evt)}>Watson</div>
          <div style={{ position: 'absolute', top: '200px', right: '10px', backgroundColor: 'blue' }} onClick={(evt) => this.onClick(evt)}>said</div>
          <div style={{ position: 'fixed', top: '300px', left: '300px', backgroundColor: 'orange' }} onClick={(evt) => this.onClick(evt)}>Sherlock Holmes</div>
        </div>
        <ElementaryWatsonComponent element={element} style={{ outline: 'yellow solid 3px', pointerEvents: 'none', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>*</ElementaryWatsonComponent>
      </div>
    )
  }
}

storiesOf('Test', module)
  .add('click on the elements', () => (
    <TestComponent />
  ))
