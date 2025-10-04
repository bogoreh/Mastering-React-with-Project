import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Modal from '../UI/Modal'

const PostForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: 'General'
  })

  const categories = ['General', 'Announcements', 'Development', 'Design', 'Feedback']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title.trim() && formData.content.trim() && formData.author.trim()) {
      onSubmit(formData)
    }
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <Modal onClose={onCancel}>
      <div className="post-form">
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.author}
            onChange={(e) => handleChange('author', e.target.value)}
            required
          />
          
          <Input
            type="text"
            placeholder="Post Title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            required
          />

          <div className="form-group">
            <label>Category:</label>
            <select 
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className="category-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <Input
            type="textarea"
            placeholder="Write your post content here..."
            value={formData.content}
            onChange={(e) => handleChange('content', e.target.value)}
            required
            rows={6}
          />

          <div className="form-actions">
            <Button type="button" variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Create Post
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default PostForm