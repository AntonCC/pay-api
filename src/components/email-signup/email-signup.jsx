import React from 'react'
import './email-signup.scss'
import Button from '../button/button'

const EmailSignUp = () => {
  return (
    <div className='email-signup'>
      <form>
        <input type="email" placeholder='Enter email address' required />
        <div className="btn-wrap">
          <Button btnStyle='dark-pink'>
            Schedule a Demo
          </Button>
        </div>
      </form>
    </div>
  )
}
export default EmailSignUp