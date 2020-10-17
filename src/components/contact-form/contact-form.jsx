import React, { useState, useEffect } from 'react'
import './contact-form.scss'
import { useFormikContext, Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../button/button'

const ContactForm = () => {
  // const [formDetails, setFormDetails] = useState({
  //   name: '',
  //   email: '',
  //   companyName: '',
  //   title: '',
  //   message: ''
  // })

  // const handleChange = e => {
  //   e.preventDefault()
  //   const { name, value } = e.target
  //   setFormDetails({...formDetails, [name]: value})
  // }

  const handleSubmit = e => {
    e.preventDefault()

  }

  return (
    <div className='contact-form'>
      <Formik
        initialValues={{ name: '', email: '', companyName: '', title: '', message: '', signUp: false}}
        validate={values => {
          const errors = {}
          if(!values.email) {
            errors.email = 'Required'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Submit fired!')
        }}
      >
        <Form>
          <div className="form-group">
            <Field type='text' name='name' placeholder='Name' />
          </div>
          <div className="form-group">
            <Field type='email' name='email' placeholder='Email' />
          </div>
          <div className="form-group">
            <Field type='text' name='companyName' placeholder='Company Name' />
          </div>
          <div className="form-group">
            <Field type='text' name='title' placeholder='Title' />
          </div>
          <div className="form-group">
            {/* <textarea cols="30" rows="2" placeholder='Message' required /> */}
            <Field component='textarea' name='message' placeholder='Message' />
          </div>
          <div className="form-group checkbox">
            <Field type='checkbox' name='signUp' />
            <p className='italic'>Stay up-to-date with company announcements and updates to our API</p>
          </div>
          <Button btnStyle='dark-outline' >
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
export default ContactForm