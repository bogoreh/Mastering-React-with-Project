import React from 'react'
import useAudioPlayer from '../hooks/useAudioPlayer'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import Playlist from './Playlist'

const MusicPlayer = () => {
  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    volume,
    currentSong,
    songs,
    playPause,
    nextSong,
    prevSong,
    seek,
    changeVolume,
    selectSong
  } = useAudioPlayer()

  return (
    <div className="music-player">
      <audio ref={audioRef} src={currentSong.src} />
      
      <div className="player-main">
        <div className="album-art">
          <img src={currentSong.cover} alt={currentSong.title} />
          <div className={`vinyl ${isPlaying ? 'playing' : ''}`}>
            <div className="vinyl-inner"></div>
          </div>
        </div>
        
        <div className="song-info">
          <h1 className="song-title">{currentSong.title}</h1>
          <h2 className="song-artist">{currentSong.artist}</h2>
        </div>
        
        <ProgressBar 
          currentTime={currentTime} 
          duration={duration} 
          onSeek={seek} 
        />
        
        <Controls
          isPlaying={isPlaying}
          onPlayPause={playPause}
          onNext={nextSong}
          onPrev={prevSong}
          volume={volume}
          onVolumeChange={changeVolume}
        />
      </div>
      
      <Playlist
        songs={songs}
        currentSong={currentSong}
        onSelectSong={selectSong}
      />
    </div>
  )
}

export default MusicPlayer