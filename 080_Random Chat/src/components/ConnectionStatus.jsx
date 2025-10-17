import React from 'react'

const ConnectionStatus = ({ isConnected }) => {
  return (
    <div className="connection-status">
      <div className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
        {isConnected ? '🟢 Online' : '🔴 Offline'}
      </div>
    </div>
  )
}

export default ConnectionStatus