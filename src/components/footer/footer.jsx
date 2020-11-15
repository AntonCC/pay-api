import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Facebook} from '../../assets/facebook.svg'
import {ReactComponent as Twitter} from '../../assets/twitter.svg'
import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="side-a">
          <div className="logo">
            <Logo />
          </div>
          <ul>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
        <div className="side-b">
          <div className="socials">
            <Facebook />
            <Twitter />
            <LinkedIn />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer