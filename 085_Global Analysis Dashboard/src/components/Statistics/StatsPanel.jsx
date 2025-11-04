function StatsPanel({ selectedCountry, globalData }) {
  const globalStats = {
    totalPopulation: globalData.reduce((sum, country) => sum + country.population, 0),
    averageGDP: globalData.reduce((sum, country) => sum + country.gdp, 0) / globalData.length,
    totalCountries: globalData.length,
    highestPopulation: Math.max(...globalData.map(c => c.population))
  }

  return (
    <div className="stats-panel">
      <h2>Statistics</h2>
      
      {selectedCountry ? (
        <div className="country-info">
          <h3>{selectedCountry.name}</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Population</h3>
              <div className="value">
                {(selectedCountry.population / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="stat-card">
              <h3>GDP</h3>
              <div className="value">${selectedCountry.gdp}B</div>
            </div>
            <div className="stat-card">
              <h3>Growth Rate</h3>
              <div className="value">{selectedCountry.growth}%</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="global-info">
          <h3>Global Overview</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Population</h3>
              <div className="value">
                {(globalStats.totalPopulation / 1000000000).toFixed(1)}B
              </div>
            </div>
            <div className="stat-card">
              <h3>Average GDP</h3>
              <div className="value">${globalStats.averageGDP.toFixed(1)}B</div>
            </div>
            <div className="stat-card">
              <h3>Total Countries</h3>
              <div className="value">{globalStats.totalCountries}</div>
            </div>
          </div>
        </div>
      )}

      <div className="country-list">
        <h4>Country Data</h4>
        {globalData.map(country => (
          <div key={country.name} className="country-item">
            <span>{country.name}</span>
            <span>${country.gdp}B</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsPanel