import React from 'react'

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <span className="video-duration">{video.duration}</span>
      </div>
      <div className="video-info">
        <div className="channel-avatar">
          {video.channelName.charAt(0)}
        </div>
        <div className="video-details">
          <h3 className="video-title">{video.title}</h3>
          <p className="channel-name">{video.channelName}</p>
          <div className="video-stats">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.uploadTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard