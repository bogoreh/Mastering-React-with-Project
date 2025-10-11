import React from 'react'
import BlogCard from '../components/BlogCard'
import Sidebar from '../components/Sidebar'
import { blogPosts } from '../data/blogData'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Blog</h1>
        <p>Sharing thoughts, ideas, and experiences about technology and life</p>
      </section>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        <div>
          <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--text-color)' }}>
            Latest Posts
          </h2>
          <div className="blog-grid">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        
        <Sidebar />
      </div>
    </div>
  )
}

export default Home