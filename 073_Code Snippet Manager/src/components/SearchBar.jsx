import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, onFilterChange, filterLanguage }) => {
  const languages = [
    'all', 'javascript', 'python', 'java', 'html', 'css', 'typescript',
    'php', 'ruby', 'cpp', 'csharp', 'go', 'rust'
  ];

  return (
    <div className="search-bar">
      <div className="search-input-group">
        <input
          type="text"
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      
      <select
        value={filterLanguage}
        onChange={(e) => onFilterChange(e.target.value)}
        className="language-filter"
      >
        {languages.map(lang => (
          <option key={lang} value={lang}>
            {lang === 'all' ? 'All Languages' : lang.charAt(0).toUpperCase() + lang.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;