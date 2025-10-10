import React from 'react'

const CommentList = ({ title, comments, type }) => {
  if (comments.length === 0) {
    return (
      <div className="comment-section">
        <h3>{title}</h3>
        <div className="no-comments">
          {type === 'shady' ? '🎉 No shady comments found!' : 'No clean comments to show'}
        </div>
      </div>
    )
  }

  return (
    <div className="comment-section">
      <h3>{title} ({comments.length})</h3>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className={`comment-item ${type}`}>
            <div className="comment-text">{comment.text}</div>
            {comment.category && (
              <div className="comment-category">
                Category: <span className="category-tag">{comment.category}</span>
              </div>
            )}
            {comment.matchedKeywords && comment.matchedKeywords.length > 0 && (
              <div className="comment-keywords">
                Detected: {comment.matchedKeywords.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentList