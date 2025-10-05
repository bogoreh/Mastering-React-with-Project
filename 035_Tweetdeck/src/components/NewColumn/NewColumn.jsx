import { useState } from 'react'
import './NewColumn.css'

const NewColumn = ({ onAddColumn }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [columnType, setColumnType] = useState('search')
  const [title, setTitle] = useState('')
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title.trim()) return

    const newColumn = {
      id: `column-${Date.now()}`,
      title: title.trim(),
      type: columnType,
      query: columnType === 'search' ? query.trim() : '',
      tweets: []
    }

    onAddColumn(newColumn)
    setIsOpen(false)
    setTitle('')
    setQuery('')
  }

  if (!isOpen) {
    return (
      <button 
        className="new-column-trigger"
        onClick={() => setIsOpen(true)}
      >
        + Add Column
      </button>
    )
  }

  return (
    <div className="new-column-modal">
      <div className="new-column-content">
        <h3>Add New Column</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Column Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter column title..."
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Column Type</label>
            <select 
              value={columnType} 
              onChange={(e) => setColumnType(e.target.value)}
            >
              <option value="search">Search</option>
              <option value="timeline">Timeline</option>
            </select>
          </div>

          {columnType === 'search' && (
            <div className="form-group">
              <label>Search Query</label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search query..."
              />
            </div>
          )}

          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="add-btn"
              disabled={!title.trim()}
            >
              Add Column
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewColumn