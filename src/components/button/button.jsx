import React from 'react'
import './button.scss'

const Button = ({ btnStyle, inactiveButton, handleClick, children }) => {
  return (
    <button className={`cta ${btnStyle} ${inactiveButton ? 'inactive' : ''}`} onClick={handleClick} >
      { children }
    </button>
  )
}
export default Button