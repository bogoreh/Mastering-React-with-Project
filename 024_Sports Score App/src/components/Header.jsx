import React from 'react'
import LiveIndicator from './LiveIndicator'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">🏆</div>
          <h1>SportScore</h1>
          <LiveIndicator />
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Live Games</span>
          </div>
          <div className="stat">
            <span className="stat-number">45</span>
            <span className="stat-label">Today</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header