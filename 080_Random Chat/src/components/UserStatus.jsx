import React from 'react'

const UserStatus = ({ isConnected, partner, onStartChat, onEndChat }) => {
  return (
    <div className="user-status">
      {isConnected ? (
        <div className="connected-status">
          <span className="status-dot connected"></span>
          <span>Connected with {partner}</span>
          <button onClick={onEndChat} className="disconnect-btn">
            Disconnect
          </button>
        </div>
      ) : (
        <div className="disconnected-status">
          <span className="status-dot disconnected"></span>
          <span>Not connected</span>
          <button onClick={onStartChat} className="connect-btn">
            Find Partner
          </button>
        </div>
      )}
    </div>
  )
}

export default UserStatus