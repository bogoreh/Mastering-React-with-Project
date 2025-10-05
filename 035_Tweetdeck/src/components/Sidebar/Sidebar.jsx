import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">TweetDeck</h2>
      </div>
      
      <nav className="sidebar-nav">
        <button className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Home</span>
        </button>
        
        <button className="nav-item">
          <span className="nav-icon">🔍</span>
          <span className="nav-text">Search</span>
        </button>
        
        <button className="nav-item">
          <span className="nav-icon">🔔</span>
          <span className="nav-text">Notifications</span>
        </button>
        
        <button className="nav-item">
          <span className="nav-icon">✉️</span>
          <span className="nav-text">Messages</span>
        </button>
        
        <button className="nav-item">
          <span className="nav-icon">📊</span>
          <span className="nav-text">Analytics</span>
        </button>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">👤</div>
          <div className="user-info">
            <div className="user-name">Your Name</div>
            <div className="user-handle">@yourhandle</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar