import React from 'react'

function Header({ onMenuToggle }) {
  return (
    <header className="header">
      <div className="header__left">
        <button className="menu-btn" onClick={onMenuToggle}>
          ☰
        </button>
        <div className="logo">
          <span className="logo__text">YouTube</span>
        </div>
      </div>
      
      <div className="header__center">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      
      <div className="header__right">
        <button className="icon-btn">📹</button>
        <button className="icon-btn">🔔</button>
        <div className="user-avatar">A</div>
      </div>
    </header>
  )
}

export default Header