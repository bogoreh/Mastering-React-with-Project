import React from 'react'

const StationList = ({ stations, currentStation, onStationSelect }) => {
  return (
    <div className="station-list">
      <div className="station-list-header">
        <h2>Popular Stations</h2>
        <span className="station-count">{stations.length} stations</span>
      </div>
      
      <div className="stations-grid">
        {stations.map(station => (
          <div
            key={station.id}
            className={`station-card ${currentStation?.id === station.id ? 'active' : ''}`}
            onClick={() => onStationSelect(station)}
          >
            <div 
              className="station-image"
              style={{ 
                backgroundImage: `url(${station.image})`,
                borderColor: station.color
              }}
            >
              <div className="station-overlay" style={{ backgroundColor: station.color }}></div>
            </div>
            
            <div className="station-info">
              <h3 className="station-name">{station.name}</h3>
              <p className="station-genre">{station.genre}</p>
              <div className="station-meta">
                <span className="followers">👥 {station.followers}</span>
                <div className="live-indicator">LIVE</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StationList