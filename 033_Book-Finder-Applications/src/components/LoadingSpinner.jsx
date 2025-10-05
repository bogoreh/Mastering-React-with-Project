import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Searching for books...</p>
    </div>
  )
}

export default LoadingSpinner