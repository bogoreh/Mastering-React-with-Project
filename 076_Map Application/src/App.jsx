import React, { useState } from 'react'
import Map from './components/Map'
import SearchBar from './components/SearchBar'
import LocationCard from './components/LocationCard'
import { locations } from './data/locations'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [filteredLocations, setFilteredLocations] = useState(locations)

  const handleSearch = (query) => {
    if (!query) {
      setFilteredLocations(locations)
      return
    }
    
    const filtered = locations.filter(location =>
      location.name.toLowerCase().includes(query.toLowerCase()) ||
      location.type.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredLocations(filtered)
  }

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌍 Explore Beautiful Places</h1>
        <p>Discover amazing locations around the world</p>
      </header>

      <div className="app-container">
        <div className="sidebar">
          <SearchBar onSearch={handleSearch} />
          
          <div className="locations-list">
            <h3>Popular Locations</h3>
            {filteredLocations.map(location => (
              <LocationCard
                key={location.id}
                location={location}
                isSelected={selectedLocation?.id === location.id}
                onClick={() => handleLocationSelect(location)}
              />
            ))}
          </div>
        </div>

        <div className="map-container">
          <Map
            locations={filteredLocations}
            selectedLocation={selectedLocation}
            onLocationSelect={handleLocationSelect}
          />
        </div>
      </div>

      {selectedLocation && (
        <div className="location-details">
          <div className="details-content">
            <h2>{selectedLocation.name}</h2>
            <p>{selectedLocation.description}</p>
            <div className="location-meta">
              <span className="type-badge">{selectedLocation.type}</span>
              <span className="coordinates">
                {selectedLocation.position[0].toFixed(4)}, {selectedLocation.position[1].toFixed(4)}
              </span>
            </div>
            <button 
              className="close-btn"
              onClick={() => setSelectedLocation(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App