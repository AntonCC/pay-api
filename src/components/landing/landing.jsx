import React from 'react'
import './landing.scss'
import EmailSignUp from '../email-signup/email-signup'
import Phone from '../../assets/iphone-x.png'
import { ReactComponent as Circle } from '../../assets/bg-circle.svg'

const Landing = () => {
  return (
    <div className='landing'>
      <div className="circle-wrap">
        <Circle />
      </div>
      <div className="container">
        <div className="side-a">
          <h1>Start Building with our APIs for absolutely free.</h1>
          <EmailSignUp />
          <p>Have any questions? <strong className='darker'>Contact Us!</strong></p>
        </div>
        <div className="side-b">
          <img src={Phone} alt="phone"/>
        </div>
      </div>
    </div>
  )
}
export default Landing