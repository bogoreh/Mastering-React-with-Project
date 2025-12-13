import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header>
      <div className="search-box">
        <Search size={20} />
        <input 
          type="text" 
          placeholder="Search..."
          style={{ border: 'none', outline: 'none', marginLeft: '10px' }}
        />
      </div>
      <div className="header-right">
        <Bell size={20} />
        <User size={20} />
        <span>Admin</span>
      </div>
    </header>
  );
};

export default Header;