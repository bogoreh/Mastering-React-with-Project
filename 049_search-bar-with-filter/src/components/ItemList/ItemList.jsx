import React from 'react'
import './ItemList.css'

const ItemList = ({ items }) => {
  const getCategoryColor = (category) => {
    const colors = {
      fruits: '#4CAF50',
      vegetables: '#8BC34A',
      meat: '#F44336',
      dairy: '#FFC107'
    }
    return colors[category] || '#667eea'
  }

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h3>No items found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="item-list">
      <div className="results-count">
        Found {items.length} item{items.length !== 1 ? 's' : ''}
      </div>
      <div className="items-grid">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <div 
              className="item-category-badge"
              style={{ backgroundColor: getCategoryColor(item.category) }}
            >
              {item.category}
            </div>
            <h3 className="item-name">{item.name}</h3>
            <div className="item-details">
              <span className="item-category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemList