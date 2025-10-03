import React from 'react'

const ProgressBar = ({ currentTime, duration, onSeek }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const newTime = percent * duration
    onSeek(newTime)
  }

  const progressPercent = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="progress-container">
      <span className="time-current">{formatTime(currentTime)}</span>
      <div 
        className="progress-bar" 
        onClick={handleProgressClick}
      >
        <div 
          className="progress" 
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <span className="time-total">{formatTime(duration)}</span>
    </div>
  )
}

export default ProgressBar