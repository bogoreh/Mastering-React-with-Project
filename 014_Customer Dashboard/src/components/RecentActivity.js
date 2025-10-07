import React from 'react';

const RecentActivity = () => {
  const activities = [
    { id: 1, customer: 'Johnson', action: 'placed an order', time: '2 min ago' },
    { id: 2, customer: 'Brown', action: 'updated payment method', time: '15 min ago' },
    { id: 3, customer: 'Wilson', action: 'completed a purchase', time: '30 min ago' },
    { id: 4, customer: 'Miller', action: 'contacted support', time: '1 hour ago' },
    { id: 5, customer: 'Jennifer Davis', action: 'created an account', time: '2 hours ago' }
  ];

  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <div className="activity-list">
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <div className="activity-avatar">
              <img src="https://placehold.co/40" alt="Customer" />
            </div>
            <div className="activity-details">
              <p><strong>{activity.customer}</strong> {activity.action}</p>
              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;