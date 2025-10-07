import React, { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import FlightCard from './components/FlightCard/FlightCard'
import Loading from './components/Loading/Loading'
import { useFlights } from './hooks/useFlights'
import { AIRLINES } from './utils/constants'

function App() {
  const [searchParams, setSearchParams] = useState({
    flightNumber: '',
    airline: ''
  })
  
  const { flights, loading, error } = useFlights(searchParams)

  const handleSearch = (params) => {
    setSearchParams(params)
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">✈️ Flight Tracker</h1>
          <p className="subtitle">Real-time flight status and information</p>
        </header>

        <SearchBar onSearch={handleSearch} airlines={AIRLINES} />

        <main className="main-content">
          {loading && <Loading />}
          
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && flights.length === 0 && searchParams.flightNumber && (
            <div className="no-results">
              <p>No flights found for the specified criteria.</p>
            </div>
          )}

          {!loading && !error && flights.length > 0 && (
            <div className="flights-grid">
              {flights.map((flight, index) => (
                <FlightCard key={`${flight.flightNumber}-${index}`} flight={flight} />
              ))}
            </div>
          )}

          {!searchParams.flightNumber && !loading && (
            <div className="welcome-message">
              <div className="welcome-icon">🌍</div>
              <h2>Track Your Flight</h2>
              <p>Enter a flight number to get real-time status and information</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App