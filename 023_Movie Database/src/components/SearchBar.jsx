import { useState } from 'react';
import '../styles/App.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies by title, genre, or director..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;