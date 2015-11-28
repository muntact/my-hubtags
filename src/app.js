import React from 'react'
require('./styles/main.scss')

const Hello = React.createClass({
  render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="Murray"/>, document.body)
