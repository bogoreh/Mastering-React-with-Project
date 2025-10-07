import { useState } from 'react'
import { useIssues } from '../hooks/useIssues'

function IssueForm({ onClose }) {
  const { addIssue } = useIssues()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    labels: []
  })
  const [newLabel, setNewLabel] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim()) return

    addIssue(formData)
    onClose()
  }

  const addLabel = () => {
    if (newLabel.trim() && !formData.labels.includes(newLabel.trim())) {
      setFormData({
        ...formData,
        labels: [...formData.labels, newLabel.trim()]
      })
      setNewLabel('')
    }
  }

  const removeLabel = (labelToRemove) => {
    setFormData({
      ...formData,
      labels: formData.labels.filter(label => label !== labelToRemove)
    })
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Create New Issue</h2>
          <button className="btn-icon" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="issue-form">
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter issue title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the issue..."
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Labels</label>
            <div className="labels-input">
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="Add a label"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLabel())}
              />
              <button type="button" onClick={addLabel} className="btn-secondary">
                Add
              </button>
            </div>
            <div className="labels-list">
              {formData.labels.map((label, index) => (
                <span key={index} className="label">
                  {label}
                  <button 
                    type="button"
                    onClick={() => removeLabel(label)}
                    className="label-remove"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default IssueForm