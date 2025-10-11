import React, { useState, useEffect } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import UserList from './UserList'

const ChatContainer = ({ currentUser }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! 👋 Welcome to the chat app!",
      sender: { id: 2, name: "Bot", avatar: "🤖" },
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 2,
      text: "Hello! This looks great!",
      sender: currentUser,
      timestamp: new Date(Date.now() - 1800000)
    }
  ])

  const [users] = useState([
    { id: 1, name: 'You', avatar: '👤', status: 'online' },
    { id: 2, name: 'Bot', avatar: '🤖', status: 'online' },
    { id: 3, name: 'Alice', avatar: '👩', status: 'online' },
    { id: 4, name: 'Bob', avatar: '👨', status: 'away' },
    { id: 5, name: 'Charlie', avatar: '👦', status: 'offline' }
  ])

  const addMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: currentUser,
      timestamp: new Date()
    }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="chat-container">
      <UserList users={users} currentUser={currentUser} />
      <div className="chat-main">
        <MessageList messages={messages} currentUser={currentUser} />
        <MessageInput onSendMessage={addMessage} />
      </div>
    </div>
  )
}

export default ChatContainer