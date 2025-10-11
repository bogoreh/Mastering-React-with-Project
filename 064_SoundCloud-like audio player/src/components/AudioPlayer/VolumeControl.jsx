import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const VolumeControl = ({ volume, isMuted, onVolumeChange, onToggleMute }) => {
  const handleVolumeClick = (e) => {
    const volumeBar = e.currentTarget;
    const clickPosition = e.clientX - volumeBar.getBoundingClientRect().left;
    const volumeBarWidth = volumeBar.clientWidth;
    const newVolume = clickPosition / volumeBarWidth;
    onVolumeChange(Math.max(0, Math.min(1, newVolume)));
  };

  return (
    <div className="volume-control">
      <button 
        className="volume-btn"
        onClick={onToggleMute}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      <div 
        className="volume-bar"
        onClick={handleVolumeClick}
      >
        <div 
          className="volume-fill" 
          style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
        />
      </div>
    </div>
  );
};