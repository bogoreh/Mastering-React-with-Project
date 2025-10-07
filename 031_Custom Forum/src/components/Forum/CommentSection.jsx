import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'

const CommentSection = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('')
  const [authorName, setAuthorName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim() && authorName.trim()) {
      onAddComment({
        author: authorName,
        content: newComment
      })
      setNewComment('')
      setAuthorName('')
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="comment-section">
      <form onSubmit={handleSubmit} className="comment-form">
        <Input
          type="text"
          placeholder="Your name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
        />
        <Input
          type="textarea"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <Button type="submit" variant="primary">
          Post Comment
        </Button>
      </form>

      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment-header">
              <strong>{comment.author}</strong>
              <span className="comment-date">{formatDate(comment.createdAt)}</span>
            </div>
            <p className="comment-content">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection