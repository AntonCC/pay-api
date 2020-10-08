import React from 'react'
import './button.scss'

const Button = ({ btnStyle, children }) => {
  return (
    <button className={`cta ${btnStyle}`}>
      { children }
    </button>
  )
}
export default Button