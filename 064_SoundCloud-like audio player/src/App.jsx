import React, { useState } from 'react';
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer';
import { TrackList } from './components/TrackList/TrackList';
import { tracks } from './data/tracks';
import './styles/AudioPlayer.css';

function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = tracks[currentTrackIndex];

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const handleTrackSelect = (track) => {
    const trackIndex = tracks.findIndex(t => t.id === track.id);
    setCurrentTrackIndex(trackIndex);
    setIsPlaying(true);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>SoundWave</h1>
          <p>Discover and play amazing tracks</p>
        </header>

        <main className="main-content">
          <div className="player-section">
            <AudioPlayer
              track={currentTrack}
              onNext={handleNextTrack}
              onPrevious={handlePreviousTrack}
            />
          </div>

          <div className="tracks-section">
            <h2>Popular Tracks</h2>
            <TrackList
              tracks={tracks}
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              onTrackSelect={handleTrackSelect}
              onPlayPause={() => setIsPlaying(!isPlaying)}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;