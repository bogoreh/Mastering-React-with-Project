import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const MapController = ({ center, zoom }) => {
  const map = useMap()
  
  useEffect(() => {
    map.setView(center, zoom)
  }, [center, zoom, map])

  return null
}

const Map = ({ locations, selectedLocation, onLocationSelect }) => {
  const defaultCenter = [20, 0]
  const defaultZoom = 2

  const getMarkerIcon = (type, isSelected) => {
    const color = isSelected ? '#ff6b6b' : 
                  type === 'landmark' ? '#4ecdc4' :
                  type === 'nature' ? '#45b7d1' :
                  type === 'city' ? '#96ceb4' : '#feca57'
    
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${color}; 
                        width: 20px; 
                        height: 20px; 
                        border-radius: 50%; 
                        border: 3px solid white;
                        box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    })
  }

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: '100%', width: '100%' }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {selectedLocation && (
        <MapController 
          center={selectedLocation.position} 
          zoom={10} 
        />
      )}

      {locations.map(location => (
        <Marker
          key={location.id}
          position={location.position}
          icon={getMarkerIcon(location.type, selectedLocation?.id === location.id)}
          eventHandlers={{
            click: () => onLocationSelect(location),
          }}
        >
          <Popup>
            <div className="popup-content">
              <h4>{location.name}</h4>
              <p>{location.type}</p>
              <small>{location.description}</small>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map