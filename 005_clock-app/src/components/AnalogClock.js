import React from 'react';
import '../styles/AnalogClock.css';

const AnalogClock = ({ time }) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegrees = ((seconds / 60) * 360) + 90;
  const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

  return (
    <div className="analog-clock">
      <div className="clock-face">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="hour-mark"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <div className="hour-number" style={{ transform: `rotate(${-i * 30}deg)` }}>
              {i === 0 ? 12 : i}
            </div>
          </div>
        ))}
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        ></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
};

export default AnalogClock;