import React, { useState, useEffect } from 'react';
import BirthdayList from './components/BirthdayList';
import Notification from './components/Notification';
import { hostelers } from './data/hostelers';
import './styles/App.css';

function App() {
  const [tomorrowBirthdays, setTomorrowBirthdays] = useState([]);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrowBirthdaysList = hostelers
      .map(hosteler => {
        const birthday = new Date(hosteler.birthday);
        const nextBirthday = new Date(birthday);
        nextBirthday.setFullYear(today.getFullYear());
        
        if (nextBirthday < today) {
          nextBirthday.setFullYear(today.getFullYear() + 1);
        }
        
        const timeDiff = nextBirthday.getTime() - today.getTime();
        const daysUntil = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        return {
          ...hosteler,
          daysUntil
        };
      })
      .filter(hosteler => hosteler.daysUntil === 1);

    setTomorrowBirthdays(tomorrowBirthdaysList);
  }, []);

  return (
    <div className="App">
      <Notification tomorrowBirthdays={tomorrowBirthdays} />
      
      <div className="container">
        <header className="app-header">
          <h1>🎉 Hostel Birthday Tracker</h1>
          <p>Never miss a hostel mate's birthday! Get reminded a day before to prepare.</p>
        </header>

        <main>
          <BirthdayList hostelers={hostelers} />
        </main>

        <footer className="app-footer">
          <p>Stay prepared with your hockey, shoes & belts! 🎂⚽👟</p>
        </footer>
      </div>
    </div>
  );
}

export default App;