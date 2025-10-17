import React from 'react'

const LocationCard = ({ location, isSelected, onClick }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'landmark': return '🏛️'
      case 'nature': return '🏞️'
      case 'city': return '🏙️'
      case 'beach': return '🏖️'
      default: return '📍'
    }
  }

  return (
    <div 
      className={`location-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="card-header">
        <span className="type-icon">{getTypeIcon(location.type)}</span>
        <h4>{location.name}</h4>
      </div>
      <p className="card-description">{location.description}</p>
      <div className="card-footer">
        <span className={`type-badge ${location.type}`}>
          {location.type}
        </span>
        <span className="coordinates">
          {location.position[0].toFixed(2)}, {location.position[1].toFixed(2)}
        </span>
      </div>
    </div>
  )
}

export default LocationCard