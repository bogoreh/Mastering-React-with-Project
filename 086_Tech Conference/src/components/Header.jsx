import React from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'networking', label: 'Networking' }
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>CodeTech 2025</h1>
        </div>
        <nav className="nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-btn ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header