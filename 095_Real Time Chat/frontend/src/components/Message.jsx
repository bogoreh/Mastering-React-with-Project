import React from 'react';
import './Message.css';

const Message = ({ message, isOwn }) => {
  return (
    <div className={`message ${isOwn ? 'own' : 'other'}`}>
      <div className="message-content">
        <div className="message-sender">{message.sender}</div>
        <div className="message-text">{message.text}</div>
        <div className="message-time">
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};

export default Message;