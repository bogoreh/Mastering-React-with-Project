import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">
            Cine<span>Max</span>
          </a>
          <nav>
            <a href="#" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>
              Home
            </a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>
              Movies
            </a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>
              TV Shows
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;