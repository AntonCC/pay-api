import React from 'react'
import './sidebar.scss'

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
        <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
        </ul>
    </div>
  )
}
export default Sidebar