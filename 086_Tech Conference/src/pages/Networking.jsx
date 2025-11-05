import React from 'react'
import ChatRoom from '../components/ChatRoom'
import QnA from '../components/QnA'

const Networking = () => {
  return (
    <div className="page networking">
      <div className="container">
        <h1>Networking & Communication</h1>
        <div className="networking-grid">
          <div className="networking-section">
            <h2>General Chat</h2>
            <ChatRoom />
          </div>
          <div className="networking-section">
            <h2>Q&A Board</h2>
            <QnA />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Networking