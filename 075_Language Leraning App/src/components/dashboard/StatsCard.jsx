import React from 'react'

const StatsCard = ({ icon, title, value, subtitle, color }) => {
  return (
    <div className="stats-card" style={{ borderLeftColor: color }}>
      <div className="stats-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="stats-content">
        <h3>{value}</h3>
        <p className="stats-title">{title}</p>
        <p className="stats-subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default StatsCard