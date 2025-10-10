import React from 'react';
import '../styles/App.css';

const BirthdayCard = ({ hosteler, daysUntil }) => {
  const isTomorrow = daysUntil === 1;
  const isUpcoming = daysUntil > 1;

  return (
    <div className={`birthday-card ${isTomorrow ? 'tomorrow' : ''}`}>
      <div className="card-header">
        <h3>{hosteler.name}</h3>
        <span className="room-number">{hosteler.room}</span>
      </div>
      
      <div className="birthday-info">
        <div className="date-badge">
          <span className="days">{daysUntil}</span>
          <span className="days-text">day{daysUntil !== 1 ? 's' : ''} to go</span>
        </div>
        
        <div className="birthday-date">
          {new Date(hosteler.birthday).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>

      {hosteler.achievements && hosteler.achievements.length > 0 && (
        <div className="achievements">
          <h4>Achievements:</h4>
          <div className="achievement-tags">
            {hosteler.achievements.map((achievement, index) => (
              <span key={index} className="achievement-tag">
                {achievement}
              </span>
            ))}
          </div>
        </div>
      )}

      {hosteler.interests && hosteler.interests.length > 0 && (
        <div className="interests">
          <h4>Interests:</h4>
          <div className="interest-tags">
            {hosteler.interests.map((interest, index) => (
              <span key={index} className="interest-tag">
                {interest}
              </span>
            ))}
          </div>
        </div>
      )}

      {isTomorrow && hosteler.reminder && (
        <div className="reminder-alert">
          🎉 Get ready! Birthday tomorrow! Prepare your hockey, shoes & belts!
        </div>
      )}
    </div>
  );
};

export default BirthdayCard;