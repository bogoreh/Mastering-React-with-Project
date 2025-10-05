import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Column from './components/Column/Column'
import NewColumn from './components/NewColumn/NewColumn'
import { useLocalStorage } from './hooks/useLocalStorage'
import { defaultColumns, generateMockTweets } from './utils/mockData'
import './App.css'

function App() {
  const [columns, setColumns] = useLocalStorage('tweetdeck-columns', defaultColumns)

  const handleAddColumn = (newColumn) => {
    setColumns(prev => [...prev, {
      ...newColumn,
      tweets: generateMockTweets(5)
    }])
  }

  const handleRemoveColumn = (columnId) => {
    setColumns(prev => prev.filter(col => col.id !== columnId))
  }

  const handleAddTweet = (columnId, tweet) => {
    setColumns(prev => prev.map(col => 
      col.id === columnId 
        ? { ...col, tweets: [tweet, ...col.tweets] }
        : col
    ))
  }

  return (
    <div className="app">
      <Sidebar />
      
      <div className="main-content">
        <div className="columns-container">
          {columns.map(column => (
            <Column
              key={column.id}
              column={column}
              onRemove={handleRemoveColumn}
              onAddTweet={handleAddTweet}
            />
          ))}
          
          <NewColumn onAddColumn={handleAddColumn} />
        </div>
      </div>
    </div>
  )
}

export default App