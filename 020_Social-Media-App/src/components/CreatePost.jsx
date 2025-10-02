import { useState } from 'react'

function CreatePost({ onAddPost }) {
  const [postContent, setPostContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (postContent.trim()) {
      onAddPost(postContent)
      setPostContent('')
    }
  }

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit} className="post-form">
        <div className="post-input-container">
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="What's on your mind?"
            className="post-input"
            rows="3"
          />
        </div>
        <div className="post-actions">
          <div className="post-options">
            <button type="button" className="option-btn">📷 Photo</button>
            <button type="button" className="option-btn">🎥 Video</button>
            <button type="button" className="option-btn">😊 Feeling</button>
          </div>
          <button type="submit" className="btn-primary">
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost