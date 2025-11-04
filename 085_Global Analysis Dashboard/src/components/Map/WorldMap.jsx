import { useEffect, useRef } from 'react'

function WorldMap({ data, onCountrySelect }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // Simple SVG-based map implementation
    const createSimpleMap = () => {
      const svg = `
        <svg viewBox="0 0 800 400" style="width:100%; height:100%">
          <!-- Simplified continent shapes -->
          <path d="M100,200 Q150,150 200,200 Q250,250 200,300 Q150,350 100,300 Z" 
                fill="#4CAF50" stroke="#fff" stroke-width="2"
                class="country" data-country="North America"
                style="cursor: pointer"/>
          
          <path d="M300,150 Q350,100 400,150 Q450,200 400,250 Q350,300 300,250 Z" 
                fill="#2196F3" stroke="#fff" stroke-width="2"
                class="country" data-country="Europe"
                style="cursor: pointer"/>
          
          <path d="M500,250 Q550,200 600,250 Q650,300 600,350 Q550,400 500,350 Z" 
                fill="#FF9800" stroke="#fff" stroke-width="2"
                class="country" data-country="Asia"
                style="cursor: pointer"/>
          
          <path d="M350,300 Q400,350 350,400 Q300,450 250,400 Q200,350 250,300 Z" 
                fill="#9C27B0" stroke="#fff" stroke-width="2"
                class="country" data-country="Africa"
                style="cursor: pointer"/>
          
          <path d="M200,350 Q250,400 200,450 Q150,500 100,450 Q50,400 100,350 Z" 
                fill="#F44336" stroke="#fff" stroke-width="2"
                class="country" data-country="South America"
                style="cursor: pointer"/>
        </svg>
      `
      
      if (mapRef.current) {
        mapRef.current.innerHTML = svg
        
        // Add click handlers to countries
        const countries = mapRef.current.querySelectorAll('.country')
        countries.forEach(country => {
          country.addEventListener('click', () => {
            const countryName = country.getAttribute('data-country')
            const countryData = data.find(d => d.name === countryName)
            onCountrySelect(countryData || { name: countryName })
          })
        })
      }
    }

    createSimpleMap()
  }, [data, onCountrySelect])

  return (
    <div className="map">
      <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  )
}

export default WorldMap