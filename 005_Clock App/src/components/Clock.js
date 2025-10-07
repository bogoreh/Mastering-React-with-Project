import React, { useState, useEffect } from 'react';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';
import ClockControls from './ClockControls';
import '../styles/Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isAnalog, setIsAnalog] = useState(false);
  const [format24h, setFormat24h] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleClockType = () => {
    setIsAnalog(!isAnalog);
  };

  const toggleTimeFormat = () => {
    setFormat24h(!format24h);
  };

  return (
    <div className="clock-container">
      <div className="clock-display">
        {isAnalog ? (
          <AnalogClock time={time} />
        ) : (
          <DigitalClock time={time} format24h={format24h} />
        )}
      </div>
      <ClockControls
        isAnalog={isAnalog}
        format24h={format24h}
        onToggleClockType={toggleClockType}
        onToggleTimeFormat={toggleTimeFormat}
      />
    </div>
  );
};

export default Clock;