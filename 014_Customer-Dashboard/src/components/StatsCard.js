import React from 'react';

const StatsCard = ({ title, value, change, icon }) => {
  const isPositive = change.includes('+');
  
  return (
    <div className="stats-card">
      <div className="stats-info">
        <h3>{title}</h3>
        <div className="stats-value">{value}</div>
        <div className={`stats-change ${isPositive ? 'positive' : 'negative'}`}>
          {change}
        </div>
      </div>
      <div className="stats-icon">
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default StatsCard;