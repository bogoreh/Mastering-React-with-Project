import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">🎵</div>
          <h1>Instagram Radio</h1>
        </div>
        <nav className="nav">
          <button className="nav-btn active">Discover</button>
          <button className="nav-btn">Your Stations</button>
          <button className="nav-btn">Liked Songs</button>
        </nav>
        <div className="user-actions">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">🔔</button>
          <div className="user-avatar">👤</div>
        </div>
      </div>
    </header>
  )
}

export default Header