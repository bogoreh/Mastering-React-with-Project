import React from 'react'
import { blogPosts } from '../data/blogData'

const Sidebar = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))]

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>About Me</h3>
        <p className="about-text">
          Welcome to my blog! I share thoughts on technology, programming, and life experiences. 
          Join me on this journey of learning and discovery.
        </p>
      </div>
      
      <div className="sidebar-section">
        <h3>Categories</h3>
        <ul className="categories-list">
          {categories.map(category => (
            <li key={category}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3>Subscribe</h3>
        <p className="about-text">
          Get the latest posts delivered right to your inbox.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <input 
            type="email" 
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              marginBottom: '0.5rem'
            }}
          />
          <button
            style={{
              width: '100%',
              padding: '0.5rem',
              background: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar