import React from 'react'

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">{job.title}</h3>
        <span className="company-name">{job.company}</span>
      </div>
      <div className="job-details">
        <div className="job-tags">
          <span className="tag location">{job.location}</span>
          <span className="tag type">{job.type}</span>
          <span className="tag salary">{job.salary}</span>
        </div>
        <p className="job-description">{job.description}</p>
        <div className="job-skills">
          {job.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      <button className="apply-btn">Apply Now</button>
    </div>
  )
}

export default JobCard