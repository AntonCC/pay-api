import React, { useState } from 'react'
import './contact-form.scss'
import Button from '../button/button'

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    companyName: '',
    title: '',
    message: '',
    signUp: false
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormDetails({ ...formDetails, [name]: value })
    console.log(formDetails)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='contact-form'>
      <form>
        <div className="form-group">
          <input type='text' name='name' placeholder='Name' handleChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type='email' name='email' placeholder='Email' handleChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type='text' name='companyName' placeholder='Company Name' handleChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="text" name='title' placeholder='Title' handleChange={handleChange} />
        </div>
        <div className="form-group">
          <textarea name='message' placeholder='Message' handleChange={handleChange} />
        </div>
        <div className="form-group checkbox">
          <input type='checkbox' name='signUp' className='box' handleChange={handleChange} />
          <p className='italic'>Stay up-to-date with company announcments and updates to our API</p>
        </div>
        <Button btnStyle='dark-outline'>
          Submit
        </Button>
      </form>
    </div>
  )
}
export default ContactForm