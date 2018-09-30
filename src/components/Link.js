import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render () {
    let link = null

    if (this.props.active) {
      link = <span>{this.props.children}</span>
    } else {
      link = <a
          href=""
          onClick={e => {
            e.preventDefault()
            this.props.onClick()
          }}
        >
          {this.props.children}
        </a>
    }
    return link
  }
}

export default Link