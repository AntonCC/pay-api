import React from 'react'
import './email-signup.scss'
import Button from '../button/button'
import { Formik, Form, Field } from 'formik'

const EmailSignUp = () => {
  const handleSubmit = (values, setSubmitting, resetForm) => {
    console.log(values)
    resetForm()
  }


  return (
    <div className='email-signup'>
      <Formik
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
        <Form>
          <Field type="email" name="email" placeholder="Enter email address" required />
          <div className="btn-wrap">
            <Button btnStyle='dark-pink'>
              Schedule a Demo
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
export default EmailSignUp