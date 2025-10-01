import React from 'react'

const Message = ({ message }) => {
  return (
    <div className={`message ${message.isOwn ? 'own' : 'other'}`}>
      <div className="message-bubble">
        {message.text}
      </div>
      <div className="message-time">
        {message.sender} • {message.time}
      </div>
    </div>
  )
}

export default Message