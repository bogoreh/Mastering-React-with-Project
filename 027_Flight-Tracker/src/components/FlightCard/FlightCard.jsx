import React from 'react'

const FlightCard = ({ flight }) => {
  const getStatusColor = (status) => {
    const statusColors = {
      scheduled: '#3B82F6',
      active: '#10B981',
      landed: '#8B5CF6',
      cancelled: '#EF4444',
      diverted: '#F59E0B'
    }
    return statusColors[status.toLowerCase()] || '#6B7280'
  }

  const formatTime = (timestamp) => {
    if (!timestamp) return '--:--'
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return ''
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="flight-card">
      <div className="flight-header">
        <div className="airline-info">
          <span className="airline-logo">{flight.airline?.logo || '✈️'}</span>
          <div>
            <h3 className="flight-number">{flight.flightNumber}</h3>
            <p className="airline-name">{flight.airline?.name}</p>
          </div>
        </div>
        <div 
          className="status-badge"
          style={{ backgroundColor: getStatusColor(flight.status) }}
        >
          {flight.status.toUpperCase()}
        </div>
      </div>

      <div className="route-info">
        <div className="airport">
          <div className="airport-code">{flight.departure?.iata}</div>
          <div className="airport-name">{flight.departure?.airport}</div>
          <div className="time">{formatTime(flight.departure?.scheduled)}</div>
          <div className="date">{formatDate(flight.departure?.scheduled)}</div>
        </div>

        <div className="route-line">
          <div className="duration">{flight.duration}</div>
          <div className="line"></div>
          <div className="plane-icon">➝</div>
        </div>

        <div className="airport">
          <div className="airport-code">{flight.arrival?.iata}</div>
          <div className="airport-name">{flight.arrival?.airport}</div>
          <div className="time">{formatTime(flight.arrival?.scheduled)}</div>
          <div className="date">{formatDate(flight.arrival?.scheduled)}</div>
        </div>
      </div>

      {flight.aircraft && (
        <div className="flight-details">
          <div className="detail-item">
            <span className="detail-label">Aircraft:</span>
            <span className="detail-value">{flight.aircraft}</span>
          </div>
        </div>
      )}

      {flight.departure?.terminal && flight.departure?.gate && (
        <div className="flight-details">
          <div className="detail-item">
            <span className="detail-label">Departure:</span>
            <span className="detail-value">
              Terminal {flight.departure.terminal}, Gate {flight.departure.gate}
            </span>
          </div>
        </div>
      )}

      {flight.arrival?.terminal && flight.arrival?.gate && (
        <div className="flight-details">
          <div className="detail-item">
            <span className="detail-label">Arrival:</span>
            <span className="detail-value">
              Terminal {flight.arrival.terminal}, Gate {flight.arrival.gate}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default FlightCard