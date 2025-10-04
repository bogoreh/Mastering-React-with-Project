import React from 'react'

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const isUpcoming = new Date(event.date) > new Date()

  return (
    <div className={`event-card ${!isUpcoming ? 'past-event' : ''}`}>
      <div className="event-image">
        <img src={event.image} alt={event.title} />
        <div className="event-badge">{event.category}</div>
        {!isUpcoming && <div className="past-badge">Past Event</div>}
      </div>
      
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
        
        <div className="event-details">
          <div className="event-detail">
            <span className="detail-icon">📅</span>
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="event-detail">
            <span className="detail-icon">📍</span>
            <span>{event.location}</span>
          </div>
          
          <div className="event-detail">
            <span className="detail-icon">🎯</span>
            <span>{event.type}</span>
          </div>
        </div>
        
        <div className="event-footer">
          <span className="event-price">
            {event.price === 0 ? 'Free' : `$${event.price}`}
          </span>
          <button className={`event-button ${!isUpcoming ? 'disabled' : ''}`}>
            {isUpcoming ? 'Get Tickets' : 'Event Ended'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventCard