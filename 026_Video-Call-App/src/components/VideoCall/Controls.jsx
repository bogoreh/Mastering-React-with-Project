import React from 'react'
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Monitor,
  PhoneOff,
  Share
} from 'lucide-react'

const Controls = ({
  isVideoEnabled,
  isAudioEnabled,
  onToggleVideo,
  onToggleAudio,
  onShareScreen,
  onEndCall
}) => {
  return (
    <div className="controls">
      <div className="controls-group">
        <button
          className={`control-button ${isVideoEnabled ? '' : 'muted'}`}
          onClick={onToggleVideo}
        >
          {isVideoEnabled ? <Video size={20} /> : <VideoOff size={20} />}
        </button>
        
        <button
          className={`control-button ${isAudioEnabled ? '' : 'muted'}`}
          onClick={onToggleAudio}
        >
          {isAudioEnabled ? <Mic size={20} /> : <MicOff size={20} />}
        </button>
        
        <button
          className="control-button share"
          onClick={onShareScreen}
        >
          <Monitor size={20} />
        </button>
        
        <button
          className="control-button invite"
        >
          <Share size={20} />
        </button>
      </div>
      
      <button
        className="end-call-button"
        onClick={onEndCall}
      >
        <PhoneOff size={20} />
      </button>
    </div>
  )
}

export default Controls