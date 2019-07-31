import React, { Component } from 'react'
import ElementaryWatson from 'elementary-watson'

export default class ElementaryWatsonComponent extends Component {
  constructor () {
    super()
    this.state = {
      x: 0,
      y: 0,
      height: 0,
      width: 0,
      isFixed: false
    }
    this.elementaryWatson = null
  }

  startListenToElementChanges () {
    const { element } = this.props
    if (!element) return

    this.elementaryWatson = new ElementaryWatson(element)
    this.elementaryWatson.start(({ x, y, height, width, isFixed }) => {
      this.setState({ x, y, height, width, isFixed })
    })
  }

  stopListenToElementChanges () {
    if (this.elementaryWatson) this.elementaryWatson.stop()
  }

  componentDidMount () {
    this.startListenToElementChanges()
  }

  componentWillUnmount () {
    this.stopListenToElementChanges()
  }

  componentDidUpdate (prevProps) {
    if (this.props.element !== prevProps.element) {
      this.stopListenToElementChanges()
      this.startListenToElementChanges()
    }
  }

  render () {
    const { children, className, style } = this.props
    const { x, y, height, width, isFixed } = this.state
    const divStyle = {
      ...style,
      top: y,
      left: x,
      width,
      height,
      position: isFixed ? 'fixed' : 'absolute'
    }
    return (<div className={className} style={divStyle}>{children}</div>)
  }
}
