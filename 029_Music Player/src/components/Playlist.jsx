import React from 'react'

const Playlist = ({ songs, currentSong, onSelectSong }) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>
      <div className="playlist-items">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={`playlist-item ${currentSong.id === song.id ? 'active' : ''}`}
            onClick={() => onSelectSong(index)}
          >
            <img src={song.cover} alt={song.title} className="playlist-cover" />
            <div className="playlist-info">
              <div className="playlist-title">{song.title}</div>
              <div className="playlist-artist">{song.artist}</div>
            </div>
            {currentSong.id === song.id && (
              <div className="playing-indicator">
                <div className="equalizer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Playlist