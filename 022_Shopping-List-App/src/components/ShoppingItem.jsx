import React from 'react'
import './ShoppingItem.css'

const ShoppingItem = ({ item, onToggle, onDelete }) => {
  return (
    <div className={`shopping-item ${item.completed ? 'completed' : ''}`}>
      <div className="item-content">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
          className="checkbox"
        />
        
        <div className="item-details">
          <span className="item-name">{item.name}</span>
          <span className="item-quantity">Qty: {item.quantity}</span>
        </div>
      </div>
      
      <button
        onClick={() => onDelete(item.id)}
        className="delete-btn"
        aria-label="Delete item"
      >
        🗑️
      </button>
    </div>
  )
}

export default ShoppingItem