import React from 'react';
import '../styles/App.css';

const Notification = ({ tomorrowBirthdays }) => {
  if (tomorrowBirthdays.length === 0) return null;

  return (
    <div className="notification-banner">
      <div className="notification-content">
        <span className="notification-icon">🔔</span>
        <div className="notification-text">
          <strong>Reminder!</strong> {tomorrowBirthdays.length} birthday(s) tomorrow. 
          Get your hockey, shoes & belts ready!
        </div>
      </div>
    </div>
  );
};

export default Notification;