import React from 'react'

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <div className="company-header">
        <div className="company-logo">
          {company.logo}
        </div>
        <div className="company-info">
          <h3 className="company-name">{company.name}</h3>
          <p className="company-industry">{company.industry}</p>
        </div>
      </div>
      <p className="company-description">{company.description}</p>
      <div className="company-stats">
        <div className="stat">
          <strong>{company.openPositions}</strong>
          <span>Open Positions</span>
        </div>
        <div className="stat">
          <strong>{company.employees}+</strong>
          <span>Employees</span>
        </div>
      </div>
      <button className="view-jobs-btn">View Jobs</button>
    </div>
  )
}

export default CompanyCard