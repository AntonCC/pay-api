import React from 'react'
import './pre-footer.scss'
import EmailSignUp from '../email-signup/email-signup'

const PreFooter = () => {
  return (
    <div className='pre-footer'>
      <div className="container">
        <h2>Ready to start?</h2>
        <EmailSignUp />
      </div>
    </div>
  )
}
export default PreFooter