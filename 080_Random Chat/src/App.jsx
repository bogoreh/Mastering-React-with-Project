import React from 'react'
import ChatContainer from './components/ChatContainer'

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>💬 Random Chat</h1>
          <p>Connect with random people around the world</p>
        </header>
        <ChatContainer />
      </div>
    </div>
  )
}

export default App