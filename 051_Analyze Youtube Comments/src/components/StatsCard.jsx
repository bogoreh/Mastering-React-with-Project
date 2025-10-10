import React from 'react'

const StatsCard = ({ title, value, color }) => {
  return (
    <div className={`stats-card ${color}`}>
      <div className="stats-value">{value}</div>
      <div className="stats-title">{title}</div>
    </div>
  )
}

export default StatsCard