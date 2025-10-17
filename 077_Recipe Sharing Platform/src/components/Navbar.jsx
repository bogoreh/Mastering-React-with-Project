import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🍳 RecipeShare
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add-recipe" className="nav-link add-recipe-btn">
            + Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar