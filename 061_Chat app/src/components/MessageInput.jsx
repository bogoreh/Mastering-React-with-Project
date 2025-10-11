import React, { useState } from 'react'

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  return (
    <form className="message-input-container" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          <span className="send-icon">➤</span>
        </button>
      </div>
    </form>
  )
}

export default MessageInput