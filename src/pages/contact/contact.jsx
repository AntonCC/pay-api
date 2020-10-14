import React from 'react'
import './contact.scss'
import PageTitle from '../../components/page-title/page-title'
import ContactForm from '../../components/contact-form/contact-form'
import LogosGroup from '../../components/logos-group/logos-group'

const Contact = () => {
  return (
    <div className='contact'>
      <PageTitle>
        Submit a help request and we’ll get in touch shortly.
      </PageTitle>
      <div className="container">
        <ContactForm />
        <LogosGroup />
      </div>
    </div>
  )
}
export default Contact