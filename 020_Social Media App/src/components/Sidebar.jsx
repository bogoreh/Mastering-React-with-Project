function Sidebar() {
  const menuItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '👤', label: 'Profile' },
    { icon: '👥', label: 'Friends' },
    { icon: '💬', label: 'Messages' },
    { icon: '🔔', label: 'Notifications' },
    { icon: '⚙️', label: 'Settings' }
  ]

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <button key={index} className="sidebar-item">
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">👤</div>
          <div className="user-details">
            <strong>Current User</strong>
            <span>@current_user</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar