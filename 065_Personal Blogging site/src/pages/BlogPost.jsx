import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

const BlogPost = () => {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Post not found</h2>
        <Link to="/" style={{ color: 'var(--primary-color)' }}>
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <article className="blog-post fade-in">
      <div className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.category}</span>
        </div>
      </div>
      
      <img 
        src={post.image} 
        alt={post.title}
        className="post-image"
      />
      
      <div className="post-content">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link 
          to="/" 
          style={{
            color: 'var(--primary-color)',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  )
}

export default BlogPost