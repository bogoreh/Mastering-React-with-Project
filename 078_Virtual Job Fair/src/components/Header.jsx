import React from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>💼 Virtual Job Fair</h1>
        </div>
        <nav className="nav">
          <button 
            className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={`nav-btn ${currentPage === 'jobs' ? 'active' : ''}`}
            onClick={() => setCurrentPage('jobs')}
          >
            Jobs
          </button>
          <button 
            className={`nav-btn ${currentPage === 'companies' ? 'active' : ''}`}
            onClick={() => setCurrentPage('companies')}
          >
            Companies
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header