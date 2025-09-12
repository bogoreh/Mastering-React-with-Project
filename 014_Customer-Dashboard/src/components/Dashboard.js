import React from 'react';
import StatsCard from './StatsCard';
import RecentActivity from './RecentActivity';
import CustomerChart from './CustomerChart';
import QuickActions from './QuickActions';

const Dashboard = () => {
  const statsData = [
    { title: 'Total Customers', value: '2,420', change: '+12%', icon: 'fas fa-users' },
    { title: 'Active Sessions', value: '1,210', change: '+8%', icon: 'fas fa-eye' },
    { title: 'Conversion Rate', value: '24.8%', change: '+3.2%', icon: 'fas fa-chart-pie' },
    { title: 'Avg. Order Value', value: '$42.50', change: '-2.1%', icon: 'fas fa-dollar-sign' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <div className="date-filter">
          <select>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>
      
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="dashboard-content">
        <div className="chart-section">
          <CustomerChart />
        </div>
        <div className="activity-section">
          <RecentActivity />
        </div>
      </div>
      
      <QuickActions />
    </div>
  );
};

export default Dashboard;