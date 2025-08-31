import React from 'react';
import '../styles/DigitalClock.css';

const DigitalClock = ({ time, format24h }) => {
  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = '';

    if (!format24h) {
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // Convert 0 to 12
    }

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      ampm
    };
  };

  const { hours, minutes, seconds, ampm } = formatTime();

  return (
    <div className="digital-clock">
      <div className="time-display">
        <span className="hours">{hours}</span>
        <span className="colon">:</span>
        <span className="minutes">{minutes}</span>
        <span className="colon">:</span>
        <span className="seconds">{seconds}</span>
        {!format24h && <span className="ampm">{ampm}</span>}
      </div>
      <div className="date-display">
        {time.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
    </div>
  );
};

export default DigitalClock;