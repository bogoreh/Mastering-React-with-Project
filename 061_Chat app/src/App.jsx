import React, { useState } from 'react'
import ChatContainer from './components/ChatContainer'
import './App.css'

function App() {
  const [currentUser] = useState({
    id: 1,
    name: 'You',
    avatar: '👤'
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>💬 Chat App</h1>
        <p>Simple and beautiful messaging</p>
      </header>
      <main className="app-main">
        <ChatContainer currentUser={currentUser} />
      </main>
    </div>
  )
}

export default App