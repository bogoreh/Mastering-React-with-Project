import React from 'react'

const MessageList = ({ messages, currentUser }) => {
  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender.id === currentUser.id ? 'own-message' : 'other-message'}`}
        >
          <div className="message-avatar">
            {message.sender.avatar}
          </div>
          <div className="message-content">
            <div className="message-header">
              <span className="message-sender">{message.sender.name}</span>
              <span className="message-time">{formatTime(message.timestamp)}</span>
            </div>
            <div className="message-text">{message.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessageList