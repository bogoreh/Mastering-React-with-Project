import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import JobCard from '../components/JobCard'
import { featuredJobs } from '../data/mockData'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredJobs, setFilteredJobs] = useState(featuredJobs)

  const handleSearch = () => {
    const filtered = featuredJobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredJobs(filtered)
  }

  React.useEffect(() => {
    handleSearch()
  }, [searchTerm])

  return (
    <div className="jobs-page">
      <div className="container">
        <div className="page-header">
          <h1>Available Jobs</h1>
          <p>Discover {filteredJobs.length} amazing opportunities</p>
        </div>
        
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search jobs by title, company, or skills..."
        />

        <div className="jobs-grid">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="no-results">
            <h3>No jobs found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Jobs