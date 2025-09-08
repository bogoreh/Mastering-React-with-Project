// src/components/Header.js
import React from 'react';

const Header = ({ activeView, setActiveView }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>Habit Tracker</h1>
        <nav className="nav">
          <button 
            className={activeView === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveView('dashboard')}
          >
            Dashboard
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;