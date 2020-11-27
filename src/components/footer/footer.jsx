import React, { useState, useEffect, useContext} from 'react'
import './footer.scss'
import { WidthContext } from '../../contexts/widthContext'
import { NavLink } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Facebook} from '../../assets/facebook.svg'
import {ReactComponent as Twitter} from '../../assets/twitter.svg'
import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg'
import {ReactComponent as Circle} from '../../assets/bg-circle.svg'

const Footer = () => {
  const [width] = useContext(WidthContext)
  const [renderSVG, setRenderSVG] = useState(false)

  useEffect(() => {
    if(width <= 675) {
      setRenderSVG(true)
    } else {
      setRenderSVG(false)
    }
  }, [width])

  return (
    <footer>
      <div className="container">
        {
          renderSVG && 
            <div className="footer-circle">
              <Circle />
            </div>
        }
        <div className="side-a">
          <NavLink to='/'>
            <div className="logo">
              <Logo />
            </div>
          </NavLink>
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