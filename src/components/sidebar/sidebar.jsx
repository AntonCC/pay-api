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
            <li><NavLink to='/pricing' onClick={toggleSidebar}>Pricing</NavLink></li>
            <li><NavLink to='/about' onClick={toggleSidebar}>About</NavLink></li>
            <li><NavLink to='contact' onClick={toggleSidebar}>Contact</NavLink></li>
        </ul>
        <Button btnStyle='dark-pink' handleClick={toggleSidebar}>
          Schedule a Demo
        </Button>
    </div>
  )
}
export default Sidebar