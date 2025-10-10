import React from 'react';
import BirthdayCard from './BirthdayCard';
import '../styles/App.css';

const BirthdayList = ({ hostelers }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingBirthdays = hostelers
    .map(hosteler => {
      const birthday = new Date(hosteler.birthday);
      const nextBirthday = new Date(birthday);
      nextBirthday.setFullYear(today.getFullYear());
      
      // If birthday has already passed this year, use next year
      if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
      }
      
      const timeDiff = nextBirthday.getTime() - today.getTime();
      const daysUntil = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      return {
        ...hosteler,
        daysUntil,
        nextBirthday
      };
    })
    .filter(hosteler => hosteler.daysUntil >= 0)
    .sort((a, b) => a.daysUntil - b.daysUntil);

  const tomorrowBirthdays = upcomingBirthdays.filter(h => h.daysUntil === 1);
  const futureBirthdays = upcomingBirthdays.filter(h => h.daysUntil > 1);

  return (
    <div className="birthday-list">
      <div className="section">
        <h2 className="section-title">
          🎂 Tomorrow's Birthdays ({tomorrowBirthdays.length})
        </h2>
        {tomorrowBirthdays.length > 0 ? (
          <div className="birthdays-grid">
            {tomorrowBirthdays.map(hosteler => (
              <BirthdayCard 
                key={hosteler.id} 
                hosteler={hosteler} 
                daysUntil={hosteler.daysUntil} 
              />
            ))}
          </div>
        ) : (
          <p className="no-birthdays">No birthdays tomorrow</p>
        )}
      </div>

      <div className="section">
        <h2 className="section-title">
          📅 Upcoming Birthdays ({futureBirthdays.length})
        </h2>
        {futureBirthdays.length > 0 ? (
          <div className="birthdays-grid">
            {futureBirthdays.map(hosteler => (
              <BirthdayCard 
                key={hosteler.id} 
                hosteler={hosteler} 
                daysUntil={hosteler.daysUntil} 
              />
            ))}
          </div>
        ) : (
          <p className="no-birthdays">No upcoming birthdays</p>
        )}
      </div>
    </div>
  );
};

export default BirthdayList;