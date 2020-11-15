import React from 'react'
import './button.scss'

const Button = ({ btnStyle, btnType, inactiveButton, children }) => {
  return (
    <button className={`cta ${btnStyle} ${inactiveButton ? 'inactive' : ''}`} >
      { children }
    </button>
  )
}
export default Button