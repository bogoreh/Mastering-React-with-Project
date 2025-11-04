import { useState } from 'react'
import Header from './components/Header/Header'
import WorldMap from './components/Map/WorldMap'
import StatsPanel from './components/Statistics/StatsPanel'
import { countryData } from './data/sampleData'

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null)

  return (
    <div className="app">
      <Header />
      <div className="dashboard">
        <div className="map-container">
          <WorldMap 
            data={countryData}
            onCountrySelect={setSelectedCountry}
          />
        </div>
        <div className="stats-container">
          <StatsPanel 
            selectedCountry={selectedCountry}
            globalData={countryData}
          />
        </div>
      </div>
    </div>
  )
}

export default App