import React from 'react'

const Controls = ({ 
  isPlaying, 
  onPlayPause, 
  onNext, 
  onPrev, 
  volume, 
  onVolumeChange 
}) => {
  return (
    <div className="controls">
      <div className="main-controls">
        <button className="control-btn" onClick={onPrev}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </button>
        
        <button className="play-pause-btn" onClick={onPlayPause}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path fill="currentColor" d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        
        <button className="control-btn" onClick={onNext}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </button>
      </div>
      
      <div className="volume-control">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="volume-slider"
        />
      </div>
    </div>
  )
}

export default Controls