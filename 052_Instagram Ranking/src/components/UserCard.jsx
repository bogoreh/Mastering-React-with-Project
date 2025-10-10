import './UserCard.css'

const UserCard = ({ user, onClose }) => {
  const getEngagementLevel = (rate) => {
    if (rate > 5) return 'High'
    if (rate > 2) return 'Medium'
    return 'Low'
  }

  const getEngagementColor = (rate) => {
    if (rate > 5) return '#48BB78'
    if (rate > 2) return '#ECC94B'
    return '#F56565'
  }

  return (
    <div className="user-card">
      <button className="close-btn" onClick={onClose}>×</button>
      
      <div className="user-header">
        <div className="profile-pic-large">{user.profilePic}</div>
        <h2>@{user.username}</h2>
        <span 
          className="rank-badge-large"
          style={{ 
            backgroundColor: user.rank === 1 ? '#FFD700' : 
                           user.rank === 2 ? '#C0C0C0' : 
                           user.rank === 3 ? '#CD7F32' : '#4A5568' 
          }}
        >
          Rank #{user.rank}
        </span>
      </div>

      <div className="user-stats">
        <div className="stat-item">
          <div className="stat-value">{user.followers.toLocaleString()}</div>
          <div className="stat-label">Followers</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{user.likes.toLocaleString()}</div>
          <div className="stat-label">Likes</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{user.comments}</div>
          <div className="stat-label">Comments</div>
        </div>
      </div>

      <div className="engagement-section">
        <h3>Engagement Analytics</h3>
        <div className="engagement-rate-display">
          <div 
            className="engagement-circle"
            style={{ 
              borderColor: getEngagementColor(user.engagementRate),
              color: getEngagementColor(user.engagementRate)
            }}
          >
            <span className="rate-value">{user.engagementRate}%</span>
            <span className="rate-label">Engagement Rate</span>
          </div>
        </div>
        
        <div className="engagement-level">
          <span 
            className="level-badge"
            style={{ backgroundColor: getEngagementColor(user.engagementRate) }}
          >
            {getEngagementLevel(user.engagementRate)} Engagement
          </span>
        </div>
      </div>

      <div className="performance-metrics">
        <h4>Performance Metrics</h4>
        <div className="metrics-grid">
          <div className="metric">
            <span className="metric-label">Likes per Post</span>
            <span className="metric-value">
              {Math.round(user.likes / 10).toLocaleString()}
            </span>
          </div>
          <div className="metric">
            <span className="metric-label">Comments per Post</span>
            <span className="metric-value">
              {Math.round(user.comments / 10)}
            </span>
          </div>
          <div className="metric">
            <span className="metric-label">Total Engagement</span>
            <span className="metric-value">
              {(user.likes + user.comments).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard