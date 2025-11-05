import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [currentTrack, setCurrentTrack] = useState(0);
  
  const audioRef = useRef(null);

  const tracks = [
    { title: "Digital Dreams", artist: "Synth Wave", duration: "3:45" },
    { title: "Neon Pulse", artist: "Cyber Beats", duration: "4:20" },
    { title: "Space Echo", artist: "Cosmic Sound", duration: "3:15" },
    { title: "Pixel Rain", artist: "8-bit Heroes", duration: "2:55" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= 225) { // 3:45 in seconds
            handleNext();
            return 0;
          }
          return newTime;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setCurrentTime(0);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setCurrentTime(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / 225) * 100;

  return (
    <div className="music-player">
      <div className="player-header">
        <h2>🎵 Cyber Music Player</h2>
        <div className="visualizer">
          {[1, 2, 3, 4, 5, 6].map((bar) => (
            <div 
              key={bar}
              className="visualizer-bar"
              style={{
                height: `${isPlaying ? Math.random() * 80 + 20 : 20}%`,
                animationDelay: `${bar * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="track-info">
        <div className="album-art">
          <div className="vinyl">
            <div className="vinyl-inner">
              🎵
            </div>
          </div>
        </div>
        <div className="track-details">
          <h3 className="track-title">{tracks[currentTrack].title}</h3>
          <p className="track-artist">{tracks[currentTrack].artist}</p>
          <p className="track-duration">{tracks[currentTrack].duration}</p>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{tracks[currentTrack].duration}</span>
        </div>
      </div>

      <div className="player-controls">
        <button onClick={handlePrev} className="control-btn">
          ⏮
        </button>
        <button onClick={togglePlay} className="play-btn">
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button onClick={handleNext} className="control-btn">
          ⏭
        </button>
      </div>

      <div className="volume-control">
        <span>🔊</span>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="volume-slider"
        />
        <span>{volume}%</span>
      </div>

      <div className="playlist">
        <h4>Playlist</h4>
        {tracks.map((track, index) => (
          <div 
            key={index}
            className={`playlist-item ${index === currentTrack ? 'active' : ''}`}
            onClick={() => {
              setCurrentTrack(index);
              setCurrentTime(0);
            }}
          >
            <span className="track-number">{index + 1}</span>
            <div className="track-info-small">
              <span className="track-title-small">{track.title}</span>
              <span className="track-artist-small">{track.artist}</span>
            </div>
            <span className="track-duration-small">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;