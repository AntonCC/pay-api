import React from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import {ReactComponent as X} from '../../assets/times-solid.svg' 

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
        <div className="exit-container" onClick={toggleSidebar}>
          <X />
        </div>
        <ul>
          
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
        </ul>
    </div>
  )
}
export default Sidebar