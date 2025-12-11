import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { 
  MapPin, Bed, Bath, Square, Star, Calendar, 
  CheckCircle, XCircle, ArrowLeft 
} from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [bookingDate, setBookingDate] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!property) {
    return (
      <div className="container">
        <div className="error">
          <h2>Property not found</h2>
          <Link to="/" style={{ 
            display: 'inline-block', 
            marginTop: '1rem',
            color: '#3b82f6',
            textDecoration: 'none'
          }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (bookingDate && property.available) {
      setBookingConfirmed(true);
      // In a real app, you would send this to a backend
      setTimeout(() => {
        setBookingConfirmed(false);
      }, 3000);
    }
  };

  return (
    <div className="property-details">
      <div className="container">
        <Link to="/" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          marginBottom: '2rem',
          color: '#3b82f6',
          textDecoration: 'none'
        }}>
          <ArrowLeft size={20} />
          Back to Properties
        </Link>

        <div className="details-container">
          <div>
            <img 
              src={property.image} 
              alt={property.title}
              className="details-image"
            />
            
            <div style={{ marginTop: '2rem' }}>
              <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {property.title}
              </h1>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div className="rating">
                  <Star size={20} fill="#f59e0b" color="#f59e0b" />
                  <span style={{ fontSize: '1.2rem' }}>{property.rating}</span>
                </div>
                <div className="property-location">
                  <MapPin size={20} />
                  {property.location}
                </div>
                <div className={property.available ? 'available' : 'unavailable'}>
                  {property.available ? 'Available' : 'Rented'}
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: '2rem',
                marginBottom: '2rem',
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: '0.5rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <Bed size={24} color="#64748b" />
                  <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{property.bedrooms}</div>
                  <div style={{ color: '#64748b' }}>Bedrooms</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Bath size={24} color="#64748b" />
                  <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{property.bathrooms}</div>
                  <div style={{ color: '#64748b' }}>Bathrooms</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Square size={24} color="#64748b" />
                  <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{property.sqft}</div>
                  <div style={{ color: '#64748b' }}>Square Feet</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{property.type}</div>
                  <div style={{ color: '#64748b' }}>Property Type</div>
                </div>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Description</h3>
                <p style={{ lineHeight: '1.8', color: '#64748b' }}>{property.description}</p>
              </div>
              
              <div style={{ 
                padding: '1.5rem', 
                background: '#f0f9ff',
                borderRadius: '0.5rem',
                border: '1px solid #bae6fd'
              }}>
                <h4 style={{ marginBottom: '1rem', color: '#0369a1' }}>Features</h4>
                <ul style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: '0.5rem',
                  listStyle: 'none'
                }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10b981" />
                    Air Conditioning
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10b981" />
                    Heating
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10b981" />
                    Parking
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10b981" />
                    Pet Friendly
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10b981" />
                    Washer/Dryer
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} color="#10b981" />
                    Balcony
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="booking-card">
            <div className="booking-price">${property.price}/month</div>
            
            {bookingConfirmed ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem',
                background: '#d1fae5',
                borderRadius: '0.5rem',
                color: '#065f46'
              }}>
                <CheckCircle size={48} style={{ marginBottom: '1rem' }} />
                <h3>Booking Confirmed!</h3>
                <p>We'll contact you shortly to finalize the details.</p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    <Calendar size={16} style={{ marginRight: '8px' }} />
                    Preferred Move-in Date
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <button 
                  onClick={handleBooking}
                  className="book-btn"
                  disabled={!property.available || !bookingDate}
                >
                  {property.available ? 'Book Now' : 'Not Available'}
                </button>
                
                <div style={{ 
                  marginTop: '2rem', 
                  padding: '1rem',
                  background: '#fef3c7',
                  borderRadius: '0.5rem',
                  color: '#92400e'
                }}>
                  <p style={{ fontSize: '0.9rem' }}>
                    <strong>Note:</strong> A security deposit of one month's rent is required.
                    Pets are allowed with additional deposit.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;