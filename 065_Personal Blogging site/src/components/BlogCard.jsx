import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card fade-in">
      <Link to={`/post/${post.id}`}>
        <img 
          src={post.image} 
          alt={post.title}
          className="blog-card-image"
        />
        <div className="blog-card-content">
          <span className="blog-card-tag">{post.category}</span>
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>
          <div className="blog-card-meta">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard