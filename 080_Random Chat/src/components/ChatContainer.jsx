import React, { useState, useRef, useEffect } from 'react'
import Message from './Message'
import UserStatus from './UserStatus'
import ConnectionStatus from './ConnectionStatus'
import { useChat } from '../hooks/useChat'

const ChatContainer = () => {
  const {
    messages,
    isConnected,
    currentPartner,
    sendMessage,
    startChat,
    endChat
  } = useChat()

  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (inputMessage.trim() && isConnected) {
      sendMessage(inputMessage)
      setInputMessage('')
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <ConnectionStatus isConnected={isConnected} />
        <UserStatus 
          isConnected={isConnected} 
          partner={currentPartner}
          onStartChat={startChat}
          onEndChat={endChat}
        />
      </div>

      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">💭</div>
            <h3>No messages yet</h3>
            <p>Start a chat to begin conversation</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <Message key={index} message={message} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={isConnected ? "Type your message..." : "Connect to start chatting"}
          disabled={!isConnected}
          className="message-input"
        />
        <button 
          type="submit" 
          disabled={!isConnected || !inputMessage.trim()}
          className="send-button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default ChatContainer