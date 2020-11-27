import React from 'react'
import './email-signup.scss'
import Button from '../button/button'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const EmailSignUp = () => {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().trim().email('* Invalid email').required('* Email is required')
  })

  return (
    <div className='email-signup'>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={SignUpSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          // remove leading and trailing whitespace, Formik grabs original values even with Yup.trim()
          for(const value in values) {
            if(typeof values[value] === 'string') {
              values[value] = values[value].trim()
            }
          }
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