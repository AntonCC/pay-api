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
            <NavLink to='/'><Logo /></NavLink>
          </div>
          <ul>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
        <div className="side-b">
          <NavLink to='/contact'>
            <Button btnStyle='dark-pink'>
              Schedule a Demo
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default NavBar