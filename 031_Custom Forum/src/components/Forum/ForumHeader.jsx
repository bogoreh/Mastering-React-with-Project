import React from 'react'
import Button from '../UI/Button'

const ForumHeader = ({ postCount, onNewPost }) => {
  return (
    <div className="forum-header">
      <div className="forum-stats">
        <h2>Community Forum</h2>
        <p>{postCount} discussions and growing</p>
      </div>
      <div className="forum-actions">
        <Button onClick={onNewPost} variant="primary">
          + New Post
        </Button>
      </div>
    </div>
  )
}

export default ForumHeader