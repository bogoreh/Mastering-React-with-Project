import React, { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import ItemList from './components/ItemList/ItemList'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  // Sample data
  const items = [
    { id: 1, name: 'Apple', category: 'fruits' },
    { id: 2, name: 'Banana', category: 'fruits' },
    { id: 3, name: 'Carrot', category: 'vegetables' },
    { id: 4, name: 'Broccoli', category: 'vegetables' },
    { id: 5, name: 'Chicken', category: 'meat' },
    { id: 6, name: 'Beef', category: 'meat' },
    { id: 7, name: 'Milk', category: 'dairy' },
    { id: 8, name: 'Cheese', category: 'dairy' },
    { id: 9, name: 'Orange', category: 'fruits' },
    { id: 10, name: 'Spinach', category: 'vegetables' }
  ]

  // Filter items based on search term and category
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">Product Search</h1>
        <p className="app-subtitle">Find what you're looking for</p>
        
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        
        <ItemList items={filteredItems} />
      </div>
    </div>
  )
}

export default App