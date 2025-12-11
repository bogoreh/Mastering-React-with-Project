import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            🏠 RentEase
          </Link>
          
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                <Home size={18} style={{ marginRight: '8px' }} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className={location.pathname === '/properties' ? 'active' : ''}>
                <Search size={18} style={{ marginRight: '8px' }} />
                Browse
              </Link>
            </li>
            <li>
              <Link to="/favorites">
                <Heart size={18} style={{ marginRight: '8px' }} />
                Favorites
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <User size={18} style={{ marginRight: '8px' }} />
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;