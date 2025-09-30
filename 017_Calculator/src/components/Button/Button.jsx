import React from 'react'
import './Button.css'

const Button = ({ children, onClick, type = 'default', size = 'normal' }) => {
  return (
    <button
      className={`calculator-btn ${type} ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button