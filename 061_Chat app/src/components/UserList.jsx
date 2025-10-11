import React from 'react'

const UserList = ({ users, currentUser }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#4CAF50'
      case 'away': return '#FF9800'
      case 'offline': return '#9E9E9E'
      default: return '#9E9E9E'
    }
  }

  return (
    <div className="user-list">
      <h3>Online Users ({users.filter(u => u.status === 'online').length})</h3>
      <div className="users">
        {users.map(user => (
          <div key={user.id} className="user-item">
            <div className="user-avatar">
              {user.avatar}
              <span 
                className="status-dot"
                style={{ backgroundColor: getStatusColor(user.status) }}
              ></span>
            </div>
            <span className="user-name">
              {user.name} {user.id === currentUser.id && '(You)'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList