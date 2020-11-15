import React, { useEffect, useState  } from 'react'
import './navbar.scss'
import { NavLink, withRouter } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../button/button'
import {ReactComponent as Hamburger} from '../../assets/hamburger.svg'

const NavBar = ({ history, toggleSidebar }) => {
  const [inactiveButton, setInactiveButton] = useState(false)

  useEffect(() => {
    if(history.location.pathname === '/contact') {
      setInactiveButton(true)
    } else {
      setInactiveButton(false)
    }
    console.log(inactiveButton)
  })

  return (
    <div className='navbar'>
      <div className="container">
        <div className="side-a">
          <div className="logo">
            <NavLink to='/'><Logo /></NavLink>
          </div>
          <ul className='main-nav-items'>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
        <div className="side-b">
          <NavLink className='schedule' to='/contact'>
            <Button btnStyle='dark-pink' inactiveButton={inactiveButton}>
              Schedule a Demo
            </Button>
          </NavLink>
          <div className="hamburger-wrap" onClick={() => toggleSidebar()}>
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(NavBar)