import React from 'react'
import useAudio from '../hooks/useAudio'

const RadioPlayer = ({ station, isPlaying, onPlayPause, onStationChange }) => {
  const { play, pause } = useAudio()

  const handlePlayPause = () => {
    if (!station) return
    
    if (isPlaying) {
      pause()
    } else {
      play(station.streamUrl)
    }
    onPlayPause(!isPlaying)
  }

  const handleNext = () => {
    // Simplified next station logic
    console.log('Next station')
  }

  const handlePrevious = () => {
    // Simplified previous station logic
    console.log('Previous station')
  }

  return (
    <div className="radio-player">
      <div className="player-controls">
        <button className="control-btn" onClick={handlePrevious}>
          ⏮
        </button>
        
        <button 
          className={`play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={handlePlayPause}
          disabled={!station}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        
        <button className="control-btn" onClick={handleNext}>
          ⏭
        </button>
      </div>
      
      <div className="player-actions">
        <button className="action-btn">❤️</button>
        <button className="action-btn">📤</button>
        <button className="action-btn">➕</button>
      </div>
      
      <div className="volume-control">
        <span className="volume-icon">🔊</span>
        <div className="volume-bar">
          <div className="volume-level" style={{ width: '70%' }}></div>
        </div>
      </div>
    </div>
  )
}

export default RadioPlayer