import React, { useState } from 'react'
import CommentSection from './CommentSection'

const PostCard = ({ post, onAddComment }) => {
  const [showComments, setShowComments] = useState(false)
  const [upvoted, setUpvoted] = useState(false)
  const [downvoted, setDownvoted] = useState(false)

  const handleUpvote = () => {
    if (!upvoted) {
      setUpvoted(true)
      setDownvoted(false)
    }
  }

  const handleDownvote = () => {
    if (!downvoted) {
      setDownvoted(true)
      setUpvoted(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <article className="post-card">
      <div className="post-votes">
        <button 
          onClick={handleUpvote}
          className={`vote-btn ${upvoted ? 'active' : ''}`}
        >
          ▲
        </button>
        <span className="vote-count">{post.upvotes + (upvoted ? 1 : 0) - (downvoted ? 1 : 0)}</span>
        <button 
          onClick={handleDownvote}
          className={`vote-btn ${downvoted ? 'active' : ''}`}
        >
          ▼
        </button>
      </div>

      <div className="post-content">
        <div className="post-header">
          <span className="post-category">{post.category}</span>
          <h3 className="post-title">{post.title}</h3>
        </div>

        <div className="post-body">
          <p>{post.content}</p>
        </div>

        <div className="post-meta">
          <span className="post-author">Posted by {post.author}</span>
          <span className="post-date">{formatDate(post.createdAt)}</span>
        </div>

        <div className="post-actions">
          <button 
            onClick={() => setShowComments(!showComments)}
            className="action-btn"
          >
            💬 {post.comments.length} Comments
          </button>
          <button className="action-btn">🔗 Share</button>
          <button className="action-btn">📌 Save</button>
        </div>

        {showComments && (
          <CommentSection 
            comments={post.comments}
            onAddComment={(comment) => onAddComment(post.id, comment)}
          />
        )}
      </div>
    </article>
  )
}

export default PostCard