import React from 'react';
import { Heart, Play } from 'lucide-react';

export const TrackInfo = ({ track, isPlaying, onPlayPause }) => {
  if (!track) return null;

  return (
    <div className="track-info">
      <div className="track-cover">
        <img src={track.cover} alt={track.title} />
        <button 
          className="play-overlay-btn"
          onClick={onPlayPause}
        >
          {isPlaying ? (
            <div className="pause-icon">❚❚</div>
          ) : (
            <Play size={24} fill="white" />
          )}
        </button>
      </div>
      <div className="track-details">
        <h3 className="track-title">{track.title}</h3>
        <p className="track-artist">{track.artist}</p>
        <div className="track-stats">
          <span className="stat">
            <Heart size={14} />
            {track.likes.toLocaleString()}
          </span>
          <span className="stat">
            <Play size={14} />
            {track.plays.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};