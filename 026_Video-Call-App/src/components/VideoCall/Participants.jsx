import React from 'react'
import { X, Mic, MicOff, Video, VideoOff, User } from 'lucide-react'

const Participants = ({ isOpen, participants, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="participants-sidebar">
      <div className="participants-header">
        <h3>Participants ({participants.length})</h3>
        <button className="close-button" onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      
      <div className="participants-list">
        {participants.map(participant => (
          <div key={participant.id} className="participant-item">
            <div className="participant-avatar">
              <User size={16} />
            </div>
            
            <div className="participant-info">
              <span className="participant-name">
                {participant.name}
                {participant.isYou && <span className="you-badge">You</span>}
              </span>
            </div>
            
            <div className="participant-status">
              {participant.videoEnabled ? (
                <Video size={16} className="enabled" />
              ) : (
                <VideoOff size={16} className="disabled" />
              )}
              {participant.audioEnabled ? (
                <Mic size={16} className="enabled" />
              ) : (
                <MicOff size={16} className="disabled" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Participants