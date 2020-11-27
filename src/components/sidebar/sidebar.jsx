import React from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as X } from '../../assets/exit-x.svg'

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
      <div className="exit-container" onClick={toggleSidebar}>
        <X />
      </div>
      <div className='line-break'></div>
      <ul>
        <li><NavLink tag={NavLink} activeClassName='active' exact to='/' onClick={toggleSidebar}>Home</NavLink></li>
        <li><NavLink tag={NavLink} activeClassName='active' to='/pricing' onClick={toggleSidebar}>Pricing</NavLink></li>
        <li><NavLink tag={NavLink} activeClassName='active' to='/about' onClick={toggleSidebar}>About</NavLink></li>
        <li><NavLink tag={NavLink} activeClassName='active' to='contact' onClick={toggleSidebar}>Contact</NavLink></li>
      </ul>
    </div>
  )
}
export default Sidebar