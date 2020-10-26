import React from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import {ReactComponent as X} from '../../assets/times-solid.svg' 
import Button from '../button/button'

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
        <div className="exit-container" onClick={toggleSidebar}>
          <X />
        </div>
        <ul>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
        </ul>
        <NavLink className='schedule' to='/contact'>
            <Button btnStyle='dark-pink'>
              Schedule a Demo
            </Button>
        </NavLink>
    </div>
  )
}
export default Sidebar