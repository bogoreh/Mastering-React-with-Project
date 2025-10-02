import React, { useState, useEffect } from 'react'

const LiveIndicator = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="live-indicator">
      <div className={`pulse ${isVisible ? 'visible' : ''}`}></div>
      LIVE
    </div>
  )
}

export default LiveIndicator