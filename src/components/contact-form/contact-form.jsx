import React from 'react'
import './contact-form.scss'
import Button from '../button/button'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().trim().max(30).required("* This field can't be empty"),
    email: Yup.string().trim().email('* Invalid email').required("* This field can't be empty"),
    companyName: Yup.string().trim().max(30, "* This field can't exceed 30 characters"),
    title: Yup.string().trim().max(15, "* This field can't exceed 15 characters"),
    message: Yup.string().trim().max(500).required("* This field can't be empty"),
    signUp: Yup.boolean()
  })

  return (
    <div className='contact-form'>
      <Formik
        initialValues={{ name: '', email: '', companyName: '', title: '', message: '', signUp: false}}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          // remove leading and trailing whitespace, Formik grabs original values even with Yup.trim()
          for(const value in values) {
            if(typeof values[value] === 'string') {
              values[value] = values[value].trim()
            }
          }
          resetForm()
          alert('Thank you for reaching out! We will get back to you ASAP.')
        }}
      >
        {() => (
          <Form>
            <div className="form-group">
              <Field name='name' placeholder='Name' />
              <ErrorMessage name='name'>
                {msg => <div className='contact-error'>{ msg }</div>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <Field name='email' placeholder='Email' />
              <ErrorMessage name='email'>
                {msg => <div className='contact-error'>{ msg }</div>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <Field name='companyName' placeholder='Company Name' />
              <ErrorMessage name='companyName'>
                {msg => <div className='contact-error'>{ msg }</div>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <Field name='title' placeholder='Title' />
              <ErrorMessage name='title'>
                {msg => <div className='contact-error'>{ msg }</div>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <Field name='message' placeholder='Message' />
              <ErrorMessage name='message'>
                {msg => <div className='contact-error'>{ msg }</div>}
              </ErrorMessage>
            </div>
            <div className="form-group checkbox">
              <Field name='signUp' type='checkbox' className='box' />
              <label className='italic'>Stay label-to-date with company announcments and updates to our API</label>
            </div>
            <Button btnStyle='dark-outline'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default ContactForm