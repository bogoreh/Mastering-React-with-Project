import React from 'react'
import VideoCard from './VideoCard'
import { videos } from '../data/videos'

function VideoGrid() {
  return (
    <div className="video-grid">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}

export default VideoGrid