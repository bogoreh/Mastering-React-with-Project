import React from 'react'

const TeamStats = ({ games }) => {
  const calculateStats = () => {
    const stats = {}
    
    games.forEach(game => {
      [game.homeTeam, game.awayTeam].forEach(team => {
        if (!stats[team.name]) {
          stats[team.name] = {
            wins: 0,
            losses: 0,
            pointsFor: 0,
            pointsAgainst: 0
          }
        }
      })

      if (game.status === 'finished') {
        if (game.homeScore > game.awayScore) {
          stats[game.homeTeam.name].wins++
          stats[game.awayTeam.name].losses++
        } else {
          stats[game.awayTeam.name].wins++
          stats[game.homeTeam.name].losses++
        }
        
        stats[game.homeTeam.name].pointsFor += game.homeScore
        stats[game.homeTeam.name].pointsAgainst += game.awayScore
        stats[game.awayTeam.name].pointsFor += game.awayScore
        stats[game.awayTeam.name].pointsAgainst += game.homeScore
      }
    })

    return Object.entries(stats)
      .map(([team, data]) => ({
        team,
        ...data,
        pointsDiff: data.pointsFor - data.pointsAgainst
      }))
      .sort((a, b) => b.wins - a.wins || b.pointsDiff - a.pointsDiff)
      .slice(0, 5)
  }

  const topTeams = calculateStats()

  return (
    <div className="team-stats">
      <h2>🏆 Team Standings</h2>
      <div className="stats-grid">
        {topTeams.map((team, index) => (
          <div key={team.team} className="stat-card">
            <div className="rank">#{index + 1}</div>
            <div className="team-name">{team.team}</div>
            <div className="record">
              {team.wins}-{team.losses}
            </div>
            <div className={`points-diff ${team.pointsDiff >= 0 ? 'positive' : 'negative'}`}>
              {team.pointsDiff > 0 ? '+' : ''}{team.pointsDiff}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamStats