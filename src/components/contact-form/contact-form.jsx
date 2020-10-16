import React, { useState } from 'react'
import './contact-form.scss'
import Button from '../button/button'

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    companyName: '',
    title: '',
    message: ''
  })

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setFormDetails({...formDetails, [name]: value})
  }

  return (
    <div className='contact-form'>
      <form>
        <div className="form-group">
          <input type="text" placeholder='Name' required onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="email" placeholder='Email' required onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="text" placeholder='Company Name' required onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="text" placeholder='Title' required onChange={handleChange} />
        </div>
        <div className="form-group">
          <textarea cols="30" rows="2" placeholder='Message' required onChange={handleChange} />
        </div>
        <div className="form-group checkbox">
          <input className='box' type="checkbox" />
          <p className='italic'>Stay up-to-date with company announcements and updates to our API</p>
        </div>
        <Button btnStyle='dark-outline' >
          Submit
        </Button>
      </form>
    </div>
  )
}
export default ContactForm