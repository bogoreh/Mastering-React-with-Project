import React from 'react'
import { conferenceData } from '../data/conferenceData'

const Home = () => {
  return (
    <div className="page home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to {conferenceData.name}</h1>
          <p className="subtitle">{conferenceData.date} • {conferenceData.location}</p>
          <p className="description">{conferenceData.description}</p>
          <button className="cta-button">Register Now</button>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <h2>Conference Highlights</h2>
          <div className="highlights-grid">
            {conferenceData.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home