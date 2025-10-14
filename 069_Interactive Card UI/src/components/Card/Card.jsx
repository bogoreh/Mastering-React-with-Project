import React, { useState } from 'react'
import './Card.css'

const Card = ({ title, description, icon, color, features }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
      style={{ '--card-color': color }}
    >
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <div className="card-icon" style={{ backgroundColor: color }}>
            {icon}
          </div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-hint">Click to learn more</div>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <div className="card-back-content">
            <h3 className="card-back-title">{title}</h3>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-bullet" style={{ backgroundColor: color }}></span>
                  {feature}
                </div>
              ))}
            </div>
            <button 
              className="action-button"
              style={{ backgroundColor: color }}
              onClick={(e) => {
                e.stopPropagation()
                alert(`You selected ${title}!`)
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card