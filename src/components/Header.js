import React, { Component } from 'react'
import '../scss/Header.scss'
import logo from '../image/logo.png'

class Header extends Component {
  render () {
    return (
      <div
        className='header'
      >
        <div
          className='header-content'
        >
          <img
            className='logo'
            src={logo}
          />
          <ul
            className='header-menu'
          >
            <li>TodoList</li>
            <li>Another</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header