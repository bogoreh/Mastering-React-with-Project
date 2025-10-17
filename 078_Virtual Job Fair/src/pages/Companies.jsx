import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import CompanyCard from '../components/CompanyCard'
import { featuredCompanies } from '../data/mockData'

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCompanies, setFilteredCompanies] = useState(featuredCompanies)

  const handleSearch = () => {
    const filtered = featuredCompanies.filter(company =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCompanies(filtered)
  }

  React.useEffect(() => {
    handleSearch()
  }, [searchTerm])

  return (
    <div className="companies-page">
      <div className="container">
        <div className="page-header">
          <h1>Participating Companies</h1>
          <p>Connect with {filteredCompanies.length} top employers</p>
        </div>
        
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search companies by name or industry..."
        />

        <div className="companies-grid">
          {filteredCompanies.map(company => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="no-results">
            <h3>No companies found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Companies