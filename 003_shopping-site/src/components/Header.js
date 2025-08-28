import React from 'react';
import './Header.css';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="logo">ShopEasy</div>
      <div className="cart-icon" onClick={onCartClick}>
        🛒 <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;