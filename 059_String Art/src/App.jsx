import React from 'react'
import StringArt from './components/StringArt'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>✨ String Art Generator</h1>
        <p>Create beautiful geometric patterns with strings</p>
      </header>
      <main className="app-main">
        <StringArt />
      </main>
      <footer className="app-footer">
        <p>Made with Abdibogoreh 🚀</p>
      </footer>
    </div>
  )
}

export default App