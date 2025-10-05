import React from 'react'

const NowPlaying = ({ station, isPlaying }) => {
  if (!station) {
    return (
      <div className="now-playing empty">
        <div className="empty-state">
          <div className="empty-icon">🎵</div>
          <h3>Select a station to start listening</h3>
          <p>Choose from our curated collection of radio stations</p>
        </div>
      </div>
    )
  }

  return (
    <div className="now-playing">
      <div className="now-playing-content">
        <div 
          className="album-art"
          style={{ backgroundImage: `url(${station.image})` }}
        >
          {isPlaying && <div className="playing-animation"></div>}
        </div>
        
        <div className="track-info">
          <h2 className="track-title">{station.name}</h2>
          <p className="track-artist">{station.genre}</p>
          <div className="track-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: isPlaying ? '65%' : '0%' }}
              ></div>
            </div>
            <div className="time-display">
              <span>2:15</span>
              <span>3:45</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NowPlaying