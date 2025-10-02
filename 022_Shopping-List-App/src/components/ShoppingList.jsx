import React, { useState } from 'react'
import AddItemForm from './AddItemForm'
import ShoppingItem from './ShoppingItem'
import './ShoppingList.css'

const ShoppingList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Milk', quantity: 1, completed: false },
    { id: 2, name: 'Bread', quantity: 2, completed: true },
    { id: 3, name: 'Eggs', quantity: 12, completed: false }
  ])

  const addItem = (itemName, quantity) => {
    if (itemName.trim()) {
      const newItem = {
        id: Date.now(),
        name: itemName,
        quantity: parseInt(quantity) || 1,
        completed: false
      }
      setItems([...items, newItem])
    }
  }

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const clearCompleted = () => {
    setItems(items.filter(item => !item.completed))
  }

  const completedCount = items.filter(item => item.completed).length
  const totalCount = items.length

  return (
    <div>
      <div className="header">
        <h1>🛒 Shopping List</h1>
        <p>Keep track of your shopping items</p>
      </div>

      <div className="card">
        <AddItemForm onAddItem={addItem} />
        
        <div className="stats">
          <span>{completedCount} of {totalCount} completed</span>
          {completedCount > 0 && (
            <button onClick={clearCompleted} className="clear-btn">
              Clear Completed
            </button>
          )}
        </div>

        <div className="items-list">
          {items.length === 0 ? (
            <p className="empty-message">Your shopping list is empty! Add some items above.</p>
          ) : (
            items.map(item => (
              <ShoppingItem
                key={item.id}
                item={item}
                onToggle={toggleItem}
                onDelete={deleteItem}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ShoppingList