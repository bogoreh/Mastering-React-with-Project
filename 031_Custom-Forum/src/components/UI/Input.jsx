import React from 'react'

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false,
  rows = 3
}) => {
  if (type === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="input textarea"
      />
    )
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="input"
    />
  )
}

export default Input