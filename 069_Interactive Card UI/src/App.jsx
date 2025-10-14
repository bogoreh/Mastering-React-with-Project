import React from 'react'
import CardGrid from './components/CardGrid/CardGrid'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Interactive Card UI</h1>
        <p>Beautiful, responsive cards with smooth interactions</p>
      </header>
      <CardGrid />
    </div>
  )
}

export default App