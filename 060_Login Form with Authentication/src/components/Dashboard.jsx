import React from 'react'

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="nav-content">
          <h1>Dashboard</h1>
          <div className="user-menu">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <span>Welcome, {user.name}</span>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Hello, {user.name}! 👋</h2>
          <p>You have successfully logged into your account.</p>
          <div className="stats">
            <div className="stat-card">
              <h3>Profile</h3>
              <p>Email: {user.email}</p>
              <p>Status: <span className="status-active">Active</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard