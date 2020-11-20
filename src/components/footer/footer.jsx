import React, { useState, useEffect } from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Facebook} from '../../assets/facebook.svg'
import {ReactComponent as Twitter} from '../../assets/twitter.svg'
import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg'
import {ReactComponent as Circle} from '../../assets/bg-circle.svg'

const Footer = () => {
  const [renderSVG, setRenderSVG] = useState(false)

  const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  const handleWidth = () => {
    if(window.innerWidth <= 675) {
      setRenderSVG(true)
    } else {
      setRenderSVG(false)
    }
  }

  const throttledHandleWidth = throttle(handleWidth, 75)

  useEffect(() => {
    // Call once on load then event listener handle resize.
    handleWidth()

    window.addEventListener('resize', throttledHandleWidth)

    return () => {
      window.removeEventListener('resize', throttledHandleWidth)
    }
  })

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