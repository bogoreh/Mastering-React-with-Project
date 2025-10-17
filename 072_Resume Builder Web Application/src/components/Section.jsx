import React from 'react'

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default Section