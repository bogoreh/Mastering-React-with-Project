import React from 'react'

const ScoreCard = ({ game }) => {
  const getSportIcon = (sport) => {
    const icons = {
      basketball: '🏀',
      football: '🏈',
      soccer: '⚽',
      baseball: '⚾'
    }
    return icons[sport] || '🏆'
  }

  const getStatusColor = (status) => {
    const colors = {
      live: '#ff4757',
      finished: '#2ed573',
      scheduled: '#ffa502'
    }
    return colors[status] || '#747d8c'
  }

  return (
    <div className="score-card">
      <div className="card-header">
        <div className="sport-info">
          <span className="sport-icon">{getSportIcon(game.sport)}</span>
          <span className="league">{game.league}</span>
        </div>
        <div 
          className="game-status"
          style={{ color: getStatusColor(game.status) }}
        >
          {game.status === 'live' && '● '}
          {game.status}
        </div>
      </div>

      <div className="teams-section">
        <div className="team">
          <div className="team-logo">{game.homeTeam.logo}</div>
          <div className="team-info">
            <div className="team-name">{game.homeTeam.name}</div>
            <div className="team-record">{game.homeTeam.record}</div>
          </div>
          <div className="team-score">{game.homeScore}</div>
        </div>

        <div className="vs-separator">VS</div>

        <div className="team">
          <div className="team-logo">{game.awayTeam.logo}</div>
          <div className="team-info">
            <div className="team-name">{game.awayTeam.name}</div>
            <div className="team-record">{game.awayTeam.record}</div>
          </div>
          <div className="team-score">{game.awayScore}</div>
        </div>
      </div>

      <div className="game-details">
        <div className="detail">
          <span className="detail-label">Time:</span>
          <span>{game.time}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Venue:</span>
          <span>{game.venue}</span>
        </div>
      </div>

      {game.highlights && (
        <div className="highlights">
          <span className="highlight-tag">🔥 {game.highlights}</span>
        </div>
      )}
    </div>
  )
}

export default ScoreCard