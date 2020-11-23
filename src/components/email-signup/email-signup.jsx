import React, { useState, useRef } from 'react'
import './email-signup.scss'
import Button from '../button/button'

const EmailSignUp = () => {
  const [userEmail, setUserEmail] = useState('')
  const formEl = useRef(null)

  const handleChange = e => {
    const { value } = e.target
    setUserEmail(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Thanks for registering!')
    formEl.current.reset()
  }


  return (
    <div className='email-signup'>
      <form onSubmit={handleSubmit} ref={formEl}>
        <input type="email" name="email" placeholder="Enter email address" onChange={handleChange} required/>
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