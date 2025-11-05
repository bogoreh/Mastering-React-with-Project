import React, { useState, useRef, useEffect } from 'react'

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Organizer', text: 'Welcome to CodeTech 2025', time: '10:00 AM' },
    { id: 2, user: 'Attendee1', text: 'Excited to be here!', time: '10:02 AM' }
  ])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'You',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  return (
    <div className="chat-room">
      <div className="messages-container">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.user === 'You' ? 'own-message' : ''}`}>
            <div className="message-header">
              <strong>{message.user}</strong>
              <span className="message-time">{message.time}</span>
            </div>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  )
}

export default ChatRoom