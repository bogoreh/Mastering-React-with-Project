import React from 'react';

export const ProgressBar = ({ currentTime, duration, onTimeUpdate }) => {
  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.clientWidth;
    const newTime = (clickPosition / progressBarWidth) * duration;
    onTimeUpdate(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="progress-container">
      <span className="time-current">{formatTime(currentTime)}</span>
      <div 
        className="progress-bar" 
        onClick={handleProgressClick}
      >
        <div 
          className="progress-fill" 
          style={{ width: `${progressPercentage}%` }}
        />
        <div 
          className="progress-handle" 
          style={{ left: `${progressPercentage}%` }}
        />
      </div>
      <span className="time-duration">{formatTime(duration)}</span>
    </div>
  );
};