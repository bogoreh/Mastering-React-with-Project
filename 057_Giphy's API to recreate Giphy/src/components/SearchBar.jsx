import { useState } from 'react';
import '../styles/App.css';

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleTrending = () => {
    setQuery('');
    onSearch('trending');
  };

  return (
    <div className="search-section">
      <div className="container">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-input-group">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for GIFs..."
              className="search-input"
              disabled={loading}
            />
            <button 
              type="submit" 
              className="search-button"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
        <button 
          onClick={handleTrending}
          className="trending-button"
          disabled={loading}
        >
          Trending GIFs
        </button>
      </div>
    </div>
  );
};

export default SearchBar;