import React from 'react'

const ProgressBar = ({ progress, color = '#4f46e5' }) => {
  return (
    <div className="progress-bar">
      <div 
        className="progress-fill"
        style={{ 
          width: `${progress}%`,
          backgroundColor: color
        }}
      />
      <span className="progress-text">{progress}%</span>
    </div>
  )
}

export default ProgressBar