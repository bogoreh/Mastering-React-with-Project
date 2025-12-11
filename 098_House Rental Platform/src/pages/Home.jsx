import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import { properties } from '../data/properties';
import { Filter } from 'lucide-react';

const Home = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [selectedType, setSelectedType] = useState('all');

  const handleSearch = (filters) => {
    let filtered = properties;
    
    if (filters.searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }
    
    if (filters.location) {
      filtered = filtered.filter(property =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.maxPrice) {
      filtered = filtered.filter(property =>
        property.price <= parseInt(filters.maxPrice)
      );
    }
    
    if (selectedType !== 'all') {
      filtered = filtered.filter(property =>
        property.type === selectedType
      );
    }
    
    setFilteredProperties(filtered);
  };

  const propertyTypes = ['all', 'Apartment', 'House', 'Villa', 'Studio', 'Penthouse', 'Cabin'];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Find Your Perfect Home</h1>
          <p>Discover thousands of rental properties across the country. Your dream home is just a click away.</p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Property Types Filter */}
      <div className="container">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem', 
          marginBottom: '2rem',
          overflowX: 'auto',
          padding: '1rem 0'
        }}>
          <Filter size={20} />
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedType(type);
                handleSearch({});
              }}
              style={{
                padding: '0.5rem 1rem',
                background: selectedType === type ? '#3b82f6' : '#e2e8f0',
                color: selectedType === type ? 'white' : '#64748b',
                border: 'none',
                borderRadius: '2rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s'
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Featured Properties */}
        <h2 className="section-title">Featured Properties</h2>
        <div className="properties-grid">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
            No properties found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;