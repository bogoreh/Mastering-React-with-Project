import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 1, name: 'Dashboard', icon: 'fas fa-home' },
    { id: 2, name: 'Customers', icon: 'fas fa-users' },
    { id: 3, name: 'Orders', icon: 'fas fa-shopping-cart' },
    { id: 4, name: 'Analytics', icon: 'fas fa-chart-line' },
    { id: 5, name: 'Messages', icon: 'fas fa-envelope' },
    { id: 6, name: 'Settings', icon: 'fas fa-cog' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <i className={item.icon}></i>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="help-item">
          <i className="fas fa-question-circle"></i>
          <span>Help & Support</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;