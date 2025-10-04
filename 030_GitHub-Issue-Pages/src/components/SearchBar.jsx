import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search issues by title, description, or labels..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  )
}

export default SearchBar