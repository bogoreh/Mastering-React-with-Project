import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import MessageList from './components/MessageList'
import MessageInput from './components/MessageInput'
import { initialMessages } from './data/messages'
import './styles/App.css'

function App() {
  const [messages, setMessages] = useState(initialMessages)
  const [activeContact, setActiveContact] = useState('John Doe')

  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text: text,
      sender: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    }
    setMessages([...messages, newMessage])
  }

  const contacts = [
    { id: 1, name: 'John Doe', lastSeen: '2 min ago' },
    { id: 2, name: 'Jane Smith', lastSeen: '1 hour ago' },
    { id: 3, name: 'Mike Johnson', lastSeen: 'Online' },
    { id: 4, name: 'Sarah Wilson', lastSeen: '5 min ago' },
    { id: 5, name: 'Alex Brown', lastSeen: 'Yesterday' }
  ]

  return (
    <div className="app">
      <div className="chat-container">
        <Sidebar 
          contacts={contacts} 
          activeContact={activeContact}
          setActiveContact={setActiveContact}
        />
        <div className="chat-main">
          <div className="chat-header">
            <h2>{activeContact}</h2>
            <span className="status">Online</span>
          </div>
          <MessageList messages={messages} />
          <MessageInput onSendMessage={addMessage} />
        </div>
      </div>
    </div>
  )
}

export default App