import React from 'react';
import './Header.css';

const Header = ({ onRefresh }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo">📈 Stockfolio</h1>
          <p className="tagline">Track your investments in real-time</p>
        </div>
        
        <div className="header-right">
          <div className="date-display">
            <span className="date-icon">📅</span>
            {currentDate}
          </div>
          <button className="refresh-btn" onClick={onRefresh}>
            <span className="refresh-icon">🔄</span> Refresh Prices
          </button>
        </div>
      </div>
      
      <div className="market-status">
        <div className="market-indicator active">
          <span className="indicator-dot"></span>
          Market Open
        </div>
        <div className="market-time">NASDAQ: 9:30 AM - 4:00 PM ET</div>
      </div>
    </header>
  );
};

export default Header;