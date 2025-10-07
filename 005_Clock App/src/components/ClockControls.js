import React from 'react';
import '../styles/ClockControls.css';

const ClockControls = ({
  isAnalog,
  format24h,
  onToggleClockType,
  onToggleTimeFormat
}) => {
  return (
    <div className="clock-controls">
      <button
        className="control-btn"
        onClick={onToggleClockType}
        title={isAnalog ? 'Switch to Digital' : 'Switch to Analog'}
      >
        {isAnalog ? '🔄 Digital' : '🔄 Analog'}
      </button>
      
      {!isAnalog && (
        <button
          className="control-btn"
          onClick={onToggleTimeFormat}
          title={format24h ? 'Switch to 12-hour format' : 'Switch to 24-hour format'}
        >
          {format24h ? '12H' : '24H'}
        </button>
      )}
    </div>
  );
};

export default ClockControls;