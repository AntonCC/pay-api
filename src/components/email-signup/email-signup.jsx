import React from 'react'
import './email-signup.scss'
import Button from '../button/button'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const EmailSignUp = () => {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required')
  })

  return (
    <div className='email-signup'>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          resetForm()
          alert('Thank you for signing up!')
        }}
      >
        {({ errors, touched}) => (
          <Form>
            <div className="form-group">
              <Field name='email' placeholder='Enter email address' />
              {errors.email && touched.email ? (
                <div className='form-error'>
                  {errors.email}
                </div>
              ) : null}
            {/* <ErrorMessage name='email' /> */}
            </div>
            <div className="btn-wrap">
              <Button btnStyle='dark-pink'  >
                Schedule a Demo
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default EmailSignUp