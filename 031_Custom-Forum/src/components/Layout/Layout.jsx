import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1 className="logo">ForumHub</h1>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#members">Members</a>
          </nav>
        </div>
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 ForumHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout