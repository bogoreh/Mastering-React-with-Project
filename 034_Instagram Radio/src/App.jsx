import React, { useState } from 'react'
import Header from './components/Header'
import RadioPlayer from './components/RadioPlayer'
import StationList from './components/StationList'
import NowPlaying from './components/NowPlaying'
import { stations } from './data/stations'

function App() {
  const [currentStation, setCurrentStation] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="left-panel">
          <StationList 
            stations={stations}
            currentStation={currentStation}
            onStationSelect={setCurrentStation}
          />
        </div>
        <div className="right-panel">
          <NowPlaying 
            station={currentStation}
            isPlaying={isPlaying}
          />
          <RadioPlayer
            station={currentStation}
            isPlaying={isPlaying}
            onPlayPause={setIsPlaying}
            onStationChange={setCurrentStation}
          />
        </div>
      </div>
    </div>
  )
}

export default App