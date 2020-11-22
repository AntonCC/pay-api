import React, { useState } from 'react'
import './email-signup.scss'
import Button from '../button/button'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const EmailSignUp = () => {
  const [userEmail, setUserEmail] = useState({ email: '' })

  const handleChange = e => {
    const { value } = e.target
    setUserEmail({email: value})
    console.log(userEmail)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(userEmail)
  }


  return (
    <div className='email-signup'>
      {/* <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {}
          if(!values.email) {
            errors.email = 'Required'
          } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid Email Address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {  
          handleSubmit(values, setSubmitting, resetForm)
        }}
      >
        {() => (
          <Form>
            <Field type="email" name="email" placeholder="Enter email address" required />
            <ErrorMessage name='email' component='div' />
            <div className="btn-wrap">
              <Button btnStyle='dark-pink'>
                Schedule a Demo
              </Button>
            </div>
          </Form>
        )}
      </Formik> */}
      <form onSubmit={handleSubmit}>
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