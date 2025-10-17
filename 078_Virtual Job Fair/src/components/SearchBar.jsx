import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm, placeholder = "Search jobs..." }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button className="search-btn">
        🔍
      </button>
    </div>
  )
}

export default SearchBar