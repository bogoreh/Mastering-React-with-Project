function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">SocialApp</h1>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
        <div className="header-actions">
          <button className="btn-primary">Profile</button>
        </div>
      </div>
    </header>
  )
}

export default Header