import React from 'react';

const QuickActions = () => {
  const actions = [
    { id: 1, name: 'Add Customer', icon: 'fas fa-user-plus' },
    { id: 2, name: 'Send Message', icon: 'fas fa-envelope' },
    { id: 3, name: 'Create Offer', icon: 'fas fa-gift' },
    { id: 4, name: 'Generate Report', icon: 'fas fa-file-alt' }
  ];

  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        {actions.map(action => (
          <div key={action.id} className="action-item">
            <i className={action.icon}></i>
            <span>{action.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;