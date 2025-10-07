import React, { useState } from 'react'

const SearchBar = ({ onSearch, airlines }) => {
  const [flightNumber, setFlightNumber] = useState('')
  const [airline, setAirline] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (flightNumber.trim()) {
      onSearch({ flightNumber: flightNumber.trim(), airline })
    }
  }

  const handleClear = () => {
    setFlightNumber('')
    setAirline('')
    onSearch({ flightNumber: '', airline: '' })
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-inputs">
        <div className="input-group">
          <label htmlFor="airline">Airline</label>
          <select
            id="airline"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
            className="select-input"
          >
            <option value="">All Airlines</option>
            {airlines.map((airline) => (
              <option key={airline.code} value={airline.code}>
                {airline.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="flightNumber">Flight Number</label>
          <input
            id="flightNumber"
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
            placeholder="e.g., AA123"
            className="text-input"
          />
        </div>
      </div>

      <div className="search-actions">
        <button type="submit" className="search-button primary">
          Search Flights
        </button>
        <button type="button" onClick={handleClear} className="search-button secondary">
          Clear
        </button>
      </div>
    </form>
  )
}

export default SearchBar