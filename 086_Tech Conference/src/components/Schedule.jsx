import React from 'react'
import { conferenceData } from '../data/conferenceData'

const Schedule = () => {
  return (
    <div className="schedule">
      {conferenceData.schedule.map((daySchedule, dayIndex) => (
        <div key={dayIndex} className="day-schedule">
          <h2>Day {dayIndex + 1} - {daySchedule.date}</h2>
          <div className="sessions">
            {daySchedule.sessions.map((session, sessionIndex) => (
              <div key={sessionIndex} className="session-card">
                <div className="session-time">{session.time}</div>
                <div className="session-details">
                  <h3>{session.title}</h3>
                  <p className="session-speaker">By: {session.speaker}</p>
                  <p className="session-description">{session.description}</p>
                  <span className="session-track">{session.track}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Schedule