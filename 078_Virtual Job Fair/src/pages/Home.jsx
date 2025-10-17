import React from 'react'
import { featuredJobs, featuredCompanies, stats } from '../data/mockData'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Find Your Dream Job Today</h1>
            <p>Connect with top companies and discover amazing career opportunities in our virtual job fair.</p>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Jobs</h2>
          <div className="jobs-grid">
            {featuredJobs.slice(0, 3).map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="company">{job.company}</span>
                </div>
                <div className="job-tags">
                  <span className="tag">{job.location}</span>
                  <span className="tag">{job.type}</span>
                </div>
                <button className="apply-btn">Quick Apply</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="companies-section">
        <div className="container">
          <h2>Featured Companies</h2>
          <div className="companies-grid">
            {featuredCompanies.slice(0, 4).map(company => (
              <div key={company.id} className="company-card">
                <div className="company-logo-large">{company.logo}</div>
                <h3>{company.name}</h3>
                <p>{company.openPositions} open positions</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home