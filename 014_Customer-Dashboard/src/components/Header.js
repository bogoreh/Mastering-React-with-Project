import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Customer Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>
        <div className="user-profile">
          <img src="https://placehold.co/40" alt="User" />
          <span>Abdibogoreh</span>
        </div>
      </div>
    </header>
  );
};

export default Header;