import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Star } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img 
        src={property.image} 
        alt={property.title}
        className="property-image"
      />
      <div className="property-content">
        <div className="property-header">
          <h3 className="property-title">{property.title}</h3>
          <div className="property-price">${property.price}/mo</div>
        </div>
        
        <div className="property-location">
          <MapPin size={16} />
          {property.location}
        </div>
        
        <div className="property-features">
          <div className="property-feature">
            <Bed size={18} />
            <span>{property.bedrooms} beds</span>
          </div>
          <div className="property-feature">
            <Bath size={18} />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="property-feature">
            <Square size={18} />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
        
        <div className="rating">
          <Star size={16} fill="#f59e0b" color="#f59e0b" />
          <span>{property.rating}</span>
        </div>
        
        <div className="availability" className={property.available ? 'available' : 'unavailable'}>
          {property.available ? 'Available Now' : 'Rented'}
        </div>
        
        <Link to={`/property/${property.id}`}>
          <button className="view-btn">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;