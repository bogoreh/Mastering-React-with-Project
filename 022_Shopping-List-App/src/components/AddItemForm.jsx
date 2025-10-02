import React, { useState } from 'react'
import './AddItemForm.css'

const AddItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (itemName.trim()) {
      onAddItem(itemName, quantity)
      setItemName('')
      setQuantity(1)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <div className="form-group">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="What do you need to buy?"
          className="item-input"
        />
      </div>
      
      <div className="form-row">
        <div className="quantity-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            max="99"
            className="quantity-input"
          />
        </div>
        
        <button type="submit" className="add-btn">
          Add Item
        </button>
      </div>
    </form>
  )
}

export default AddItemForm