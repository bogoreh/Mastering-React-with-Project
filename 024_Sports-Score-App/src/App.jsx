import React, { useState } from 'react'
import Header from './components/Header'
import ScoreCard from './components/ScoreCard'
import TeamStats from './components/TeamStats'
import { useSportsData } from './hooks/useSportsData'

function App() {
  const { games, loading } = useSportsData()
  const [selectedSport, setSelectedSport] = useState('all')

  const filteredGames = selectedSport === 'all' 
    ? games 
    : games.filter(game => game.sport === selectedSport)

  const sports = ['all', 'basketball', 'football', 'soccer', 'baseball']

  if (loading) {
    return (
      <div className="app">
        <Header />
        <div className="loading">Loading scores...</div>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      
      {/* Sport Filter */}
      <div className="sport-filter">
        {sports.map(sport => (
          <button
            key={sport}
            className={`filter-btn ${selectedSport === sport ? 'active' : ''}`}
            onClick={() => setSelectedSport(sport)}
          >
            {sport.charAt(0).toUpperCase() + sport.slice(1)}
          </button>
        ))}
      </div>

      {/* Games Grid */}
      <div className="games-grid">
        {filteredGames.map(game => (
          <ScoreCard key={game.id} game={game} />
        ))}
      </div>

      {/* Team Statistics Section */}
      <TeamStats games={games} />
    </div>
  )
}

export default App