import React, { useState } from 'react';
import VideoGameUI from './components/VideoGame/VideoGameUI';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import SmartHome from './components/RealLifeUI/SmartHome';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('game');

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎮 Creative Coding Playground 🎵</h1>
        <nav className="nav-tabs">
          <button 
            className={activeTab === 'game' ? 'active' : ''}
            onClick={() => setActiveTab('game')}
          >
            🎮 Space Game
          </button>
          <button 
            className={activeTab === 'music' ? 'active' : ''}
            onClick={() => setActiveTab('music')}
          >
            🎵 Music Player
          </button>
          <button 
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}
          >
            🏠 Smart Home
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'game' && <VideoGameUI />}
        {activeTab === 'music' && <MusicPlayer />}
        {activeTab === 'home' && <SmartHome />}
      </main>
    </div>
  );
}

export default App;