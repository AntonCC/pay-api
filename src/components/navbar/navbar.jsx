import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../button/button'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="side-a">
          <div className="logo">
            <Logo />
          </div>
          <ul>
            <li><NavLink to='/'>Pricing</NavLink></li>
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
          </ul>
        </div>
        <div className="side-b">
          <Button btnStyle='dark-pink'>
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  )
}
export default NavBar