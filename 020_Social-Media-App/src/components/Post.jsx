import { useState } from 'react'

function Post({ post, onLike }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    onLike(post.id)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="post-header">
        <div className="user-info">
          <div className="avatar">👤</div>
          <div className="user-details">
            <strong>{post.name}</strong>
            <span>@{post.username} · {post.timestamp}</span>
          </div>
        </div>
      </div>
      
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      
      <div className="post-stats">
        <span>{post.likes} likes</span>
        <span>{post.comments} comments</span>
      </div>
      
      <div className="post-actions">
        <button 
          className={`action-btn ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          👍 Like
        </button>
        <button className="action-btn">💬 Comment</button>
        <button className="action-btn">🔄 Share</button>
      </div>
    </div>
  )
}

export default Post