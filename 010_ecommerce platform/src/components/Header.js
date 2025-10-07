import React from 'react';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">E-Commerce Store</h1>
        <div className="cart-icon">
          <span>🛒</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;