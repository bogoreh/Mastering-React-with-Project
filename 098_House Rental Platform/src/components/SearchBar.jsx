import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Home } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, location, maxPrice });
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={20} style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#94a3b8'
          }} />
          <input
            type="text"
            placeholder="Search properties..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>
        
        <div style={{ position: 'relative', flex: 1 }}>
          <MapPin size={20} style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#94a3b8'
          }} />
          <input
            type="text"
            placeholder="Location"
            className="search-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>
        
        <div style={{ position: 'relative', flex: 1 }}>
          <DollarSign size={20} style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#94a3b8'
          }} />
          <input
            type="number"
            placeholder="Max Price"
            className="search-input"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>
        
        <button type="submit" className="search-btn">
          <Search size={20} style={{ marginRight: '8px' }} />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;