import React from 'react'
import PropTypes from 'prop-types'

class Todo extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >{this.props.text}</li>
    )
  }
}

export default Todo