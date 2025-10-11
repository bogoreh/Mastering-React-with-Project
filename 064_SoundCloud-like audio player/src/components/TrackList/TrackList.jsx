import React from 'react';
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react';

export const TrackList = ({ tracks, currentTrack, isPlaying, onTrackSelect, onPlayPause }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="track-list">
      {tracks.map((track, index) => (
        <div
          key={track.id}
          className={`track-item ${currentTrack?.id === track.id ? 'active' : ''}`}
          onClick={() => onTrackSelect(track)}
        >
          <div className="track-number">
            {currentTrack?.id === track.id ? (
              isPlaying ? (
                <div className="playing-animation">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <Pause size={16} />
              )
            ) : (
              <>
                <span className="number">{index + 1}</span>
                <Play size={16} className="play-hover" />
              </>
            )}
          </div>

          <div className="track-info">
            <img src={track.cover} alt={track.title} className="track-cover" />
            <div className="track-details">
              <h4 className="track-title">{track.title}</h4>
              <p className="track-artist">{track.artist}</p>
            </div>
          </div>

          <div className="track-stats">
            <button className="like-btn">
              <Heart size={16} />
              <span>{track.likes.toLocaleString()}</span>
            </button>
          </div>

          <div className="track-duration">
            {formatTime(track.duration)}
          </div>

          <button className="more-btn">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};