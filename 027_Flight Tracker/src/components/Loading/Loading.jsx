import React from 'react'

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="plane-icon">✈️</div>
      </div>
      <p>Tracking flights...</p>
    </div>
  )
}

export default Loading