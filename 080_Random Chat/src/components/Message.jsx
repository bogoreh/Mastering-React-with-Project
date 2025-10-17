import React from 'react'

const Message = ({ message }) => {
  const isOwn = message.sender === 'You'
  
  return (
    <div className={`message ${isOwn ? 'own-message' : 'partner-message'}`}>
      <div className="message-bubble">
        <div className="message-content">
          {message.text}
        </div>
        <div className="message-time">
          {message.timestamp}
        </div>
      </div>
    </div>
  )
}

export default Message