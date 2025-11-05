import React from 'react'
import { conferenceData } from '../data/conferenceData'

const Speakers = () => {
  return (
    <div className="speakers-grid">
      {conferenceData.speakers.map((speaker, index) => (
        <div key={index} className="speaker-card">
          <div className="speaker-image">
            <div className="avatar">{speaker.name.split(' ').map(n => n[0]).join('')}</div>
          </div>
          <div className="speaker-info">
            <h3>{speaker.name}</h3>
            <p className="speaker-title">{speaker.title}</p>
            <p className="speaker-company">{speaker.company}</p>
            <p className="speaker-bio">{speaker.bio}</p>
            <div className="speaker-session">
              <strong>Session:</strong> {speaker.session}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Speakers