import React from 'react'
import './contact-form.scss'
import Button from '../button/button'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <form>
        <div className="form-group">
          <input type="text" placeholder='Name' />
        </div>
        <div className="form-group">
          <input type="email" placeholder='Email' />
        </div>
        <div className="form-group">
          <input type="text" placeholder='Company Name' />
        </div>
        <div className="form-group">
          <input type="text" placeholder='Title' />
        </div>
        <div className="form-group">
          <textarea cols="30" rows="2" placeholder='Message' ></textarea>
        </div>
        <div className="form-group checkbox">
          <input type="checkbox"/>
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