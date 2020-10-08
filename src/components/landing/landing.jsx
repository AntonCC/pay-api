import React from 'react'
import './landing.scss'
import EmailSignUp from '../email-signup/email-signup'
import { ReactComponent as Phone } from '../../assets/illustration-phone-mockup.svg'
import Circle from '../../assets/bg-pattern-circle.svg'

const Landing = () => {
  return (
    <div className='landing'>
      <div className="container">
        <div className="side-a">
          <h1>Start Building with our APIs for absolutely free.</h1>
          <EmailSignUp />
          <p>Have any question? <strong>Contact Us!</strong></p>
        </div>
        <div className="side-b">
          <Phone />
        </div>
      </div>
    </div>
  )
}
export default Landing