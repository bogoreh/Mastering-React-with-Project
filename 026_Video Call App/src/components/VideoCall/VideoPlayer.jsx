import React, { forwardRef, useEffect } from 'react'
import { Mic, MicOff, Video, VideoOff } from 'lucide-react'

const VideoPlayer = forwardRef(({ stream, isLocal, name, videoEnabled = true, audioEnabled = true }, ref) => {
  useEffect(() => {
    if (ref.current && stream) {
      ref.current.srcObject = stream
    }
  }, [stream, ref])

  return (
    <div className={`video-player ${isLocal ? 'local' : 'remote'}`}>
      <video
        ref={ref}
        autoPlay
        muted={isLocal}
        playsInline
        className="video-element"
      />
      
      <div className="video-overlay">
        <div className="participant-info">
          <span className="participant-name">{name}</span>
          <div className="status-indicators">
            {!videoEnabled && <VideoOff size={14} />}
            {!audioEnabled && <MicOff size={14} />}
          </div>
        </div>
        
        {!stream && (
          <div className="video-placeholder">
            <div className="placeholder-avatar">
              {name.charAt(0).toUpperCase()}
            </div>
            <p>{name}</p>
          </div>
        )}
      </div>
    </div>
  )
})

export default VideoPlayer