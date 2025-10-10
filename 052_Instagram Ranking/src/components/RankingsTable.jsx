import './RankingsTable.css'

const RankingsTable = ({ users, onUserSelect }) => {
  const getRankColor = (rank) => {
    if (rank === 1) return '#FFD700' // Gold
    if (rank === 2) return '#C0C0C0' // Silver
    if (rank === 3) return '#CD7F32' // Bronze
    return '#4A5568' // Default
  }

  const getEngagementColor = (rate) => {
    if (rate > 5) return '#48BB78' // High - Green
    if (rate > 2) return '#ECC94B' // Medium - Yellow
    return '#F56565' // Low - Red
  }

  return (
    <div className="rankings-table">
      <div className="table-header">
        <h2>Creator Rankings</h2>
        <span className="subtitle">Sorted by Engagement Rate</span>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Followers</th>
              <th>Engagement Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="user-row">
                <td>
                  <span 
                    className="rank-badge"
                    style={{ backgroundColor: getRankColor(user.rank) }}
                  >
                    #{user.rank}
                  </span>
                </td>
                <td className="username-cell">
                  <span className="profile-pic">{user.profilePic}</span>
                  @{user.username}
                </td>
                <td>{user.followers.toLocaleString()}</td>
                <td>
                  <span 
                    className="engagement-rate"
                    style={{ color: getEngagementColor(user.engagementRate) }}
                  >
                    {user.engagementRate}%
                  </span>
                </td>
                <td>
                  <button 
                    className="view-btn"
                    onClick={() => onUserSelect(user)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RankingsTable