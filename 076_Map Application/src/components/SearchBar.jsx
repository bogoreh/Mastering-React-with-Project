import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search locations by name or type..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        {query && (
          <button
            type="button"
            className="clear-btn"
            onClick={handleClear}
          >
            ✕
          </button>
        )}
      </div>
      <button type="submit" className="search-btn">
        🔍 Search
      </button>
    </form>
  )
}

export default SearchBar