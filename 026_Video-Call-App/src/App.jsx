import React, { useState } from 'react'
import VideoCall from './components/VideoCall/VideoCall'
import Header from './components/Layout/Header'
import { Video, Users } from 'lucide-react'

function App() {
  const [roomId, setRoomId] = useState('')
  const [joined, setJoined] = useState(false)

  const handleJoinRoom = (e) => {
    e.preventDefault()
    if (roomId.trim()) {
      setJoined(true)
    }
  }

  if (joined) {
    return <VideoCall roomId={roomId} />
  }

  return (
    <div className="app">
      <Header />
      <div className="join-container">
        <div className="join-card">
          <div className="join-header">
            <Video className="join-icon" size={48} />
            <h1>Video Call App</h1>
            <p>Connect with anyone, anywhere</p>
          </div>
          
          <form onSubmit={handleJoinRoom} className="join-form">
            <div className="input-group">
              <Users className="input-icon" size={20} />
              <input
                type="text"
                placeholder="Enter Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="room-input"
              />
            </div>
            
            <button type="submit" className="join-button">
              Join Call
            </button>
          </form>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <span>Secure & Encrypted</span>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <span>Low Latency</span>
            </div>
            <div className="feature">
              <div className="feature-icon">🎥</div>
              <span>HD Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App