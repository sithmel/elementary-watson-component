/* eslint-env browser, mocha */
/* global assert */
import ElementaryWatsonComponent from '../dist'
import ReactDOM from 'react-dom'
import React from 'react'
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

describe('ElementaryWatsonComponent', () => {
  let canvas, element

  beforeEach(() => {
    canvas = document.createElement('div')
    document.body.appendChild(canvas)

    element = document.createElement('div')
    element.style.position = 'absolute'
    element.style.top = '40px'
    element.style.left = '50px'
    document.body.appendChild(element)
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(canvas)
    document.body.removeChild(canvas)
    document.body.removeChild(element)
  })

  it('it works with an undefined element', () => {
    const comp = React.createElement(ElementaryWatsonComponent)
    ReactDOM.render(comp, canvas)
    const componentElement = canvas.firstChild
    assert.equal(componentElement.style.position, 'absolute')
    assert.equal(componentElement.style.top, '0px')
    assert.equal(componentElement.style.left, '0px')
  })

  it('can be styled', () => {
    const comp = React.createElement(ElementaryWatsonComponent, { style: { backgroundColor: 'green' } })
    ReactDOM.render(comp, canvas)
    const componentElement = canvas.firstChild
    assert.equal(componentElement.style.backgroundColor, 'green')
  })

  it('can get a class', () => {
    const comp = React.createElement(ElementaryWatsonComponent, { className: 'beautiful-component' })
    ReactDOM.render(comp, canvas)
    const componentElement = canvas.firstChild
    assert.equal(componentElement.className, 'beautiful-component')
  })

  it('contains the children', () => {
    const comp = React.createElement(ElementaryWatsonComponent, { }, ['test'])
    ReactDOM.render(comp, canvas)
    const componentElement = canvas.firstChild
    assert.equal(componentElement.innerHTML, 'test')
  })

  it('overlaps an item', async () => {
    const comp = React.createElement(ElementaryWatsonComponent, { element })
    ReactDOM.render(comp, canvas)
    const componentElement = canvas.firstChild
    await wait(100) // on animation frame
    assert.equal(componentElement.style.position, 'absolute')
    assert.equal(componentElement.style.top, '40px')
    assert.equal(componentElement.style.left, '50px')
  })
})
