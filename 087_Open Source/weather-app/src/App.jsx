import { useState } from 'react'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  const mockWeatherData = {
    london: { temp: 15, condition: 'Cloudy', humidity: 65, icon: '☁️' },
    'new york': { temp: 22, condition: 'Sunny', humidity: 50, icon: '☀️' },
    tokyo: { temp: 18, condition: 'Rainy', humidity: 80, icon: '🌧️' },
    paris: { temp: 20, condition: 'Partly Cloudy', humidity: 60, icon: '⛅' }
  }

  const getWeather = () => {
    if (!city.trim()) return
    
    setLoading(true)
    setTimeout(() => {
      const cityKey = city.toLowerCase().trim()
      const data = mockWeatherData[cityKey] || { 
        temp: Math.floor(Math.random() * 30) + 5, 
        condition: 'Partly Cloudy', 
        humidity: Math.floor(Math.random() * 50) + 30,
        icon: '🌤️'
      }
      setWeather(data)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search-section">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name (try: London, New York, Tokyo)..."
          onKeyPress={(e) => e.key === 'Enter' && getWeather()}
        />
        <button onClick={getWeather} disabled={loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>
      
      {weather && (
        <div className="weather-card">
          <h2>{city}</h2>
          <div className="weather-icon">{weather.icon}</div>
          <div className="temperature">{weather.temp}°C</div>
          <div className="condition">{weather.condition}</div>
          <div className="details">
            <div className="detail">Humidity: {weather.humidity}%</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App