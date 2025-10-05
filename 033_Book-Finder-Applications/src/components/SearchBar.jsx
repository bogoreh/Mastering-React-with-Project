import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim())
    }
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for books by title, author, or genre..."
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <span className="search-icon">🔍</span>
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar