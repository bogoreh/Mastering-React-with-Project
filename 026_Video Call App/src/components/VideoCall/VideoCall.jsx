import React, { useState, useRef, useEffect } from 'react'
import VideoPlayer from './VideoPlayer'
import Controls from './Controls'
import Participants from './Participants'
import { X, Users } from 'lucide-react'
import useMediaStream from '../../hooks/useMediaStream'

const VideoCall = ({ roomId }) => {
  const [participants, setParticipants] = useState([])
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false)
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  
  const {
    localStream,
    remoteStream,
    isVideoEnabled,
    isAudioEnabled,
    toggleVideo,
    toggleAudio,
    shareScreen,
    endCall
  } = useMediaStream(localVideoRef, remoteVideoRef, roomId)

  // Mock participants for demo
  useEffect(() => {
    setParticipants([
      { id: 1, name: 'You', isYou: true, videoEnabled: isVideoEnabled, audioEnabled: isAudioEnabled },
      { id: 2, name: 'John Doe', videoEnabled: true, audioEnabled: true },
      { id: 3, name: 'Jane Smith', videoEnabled: false, audioEnabled: true }
    ])
  }, [isVideoEnabled, isAudioEnabled])

  return (
    <div className="video-call">
      <div className="video-call-header">
        <div className="room-info">
          <span className="room-id">Room: {roomId}</span>
          <span className="participant-count">
            <Users size={16} />
            {participants.length} participants
          </span>
        </div>
        <button
          className="participants-toggle"
          onClick={() => setIsParticipantsOpen(!isParticipantsOpen)}
        >
          <Users size={20} />
        </button>
      </div>

      <div className="video-container">
        <VideoPlayer
          ref={remoteVideoRef}
          stream={remoteStream}
          isLocal={false}
          name="Remote Participant"
        />
        
        <VideoPlayer
          ref={localVideoRef}
          stream={localStream}
          isLocal={true}
          name="You"
          videoEnabled={isVideoEnabled}
          audioEnabled={isAudioEnabled}
        />
      </div>

      <Controls
        isVideoEnabled={isVideoEnabled}
        isAudioEnabled={isAudioEnabled}
        onToggleVideo={toggleVideo}
        onToggleAudio={toggleAudio}
        onShareScreen={shareScreen}
        onEndCall={endCall}
      />

      <Participants
        isOpen={isParticipantsOpen}
        participants={participants}
        onClose={() => setIsParticipantsOpen(false)}
      />
    </div>
  )
}

export default VideoCall