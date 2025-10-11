import React from 'react'

const MovieCard = ({ movie }) => {
  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMzQzQTRGIi8+CjxwYXRoIGQ9Ik0xMjUgMTc1SDE3NVYyMjVIMTI1VjE3NVoiIGZpbGw9IiM2NzZGN0QiLz4KPHRleHQgeD0iMTUwIiB5PSIyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NzZGN0QiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+Tm8gSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo='
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMzQzQTRGIi8+CjxwYXRoIGQ9Ik0xMjUgMTc1SDE3NVYyMjVIMTI1VjE3NVoiIGZpbGw9IiM2NzZGN0QiLz4KPHRleHQgeD0iMTUwIiB5PSIyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NzZGN0QiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+Tm8gSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo='}
          alt={movie.Title}
          onError={handleImageError}
          loading="lazy"
        />
        <div className="movie-year">{movie.Year}</div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-type">{movie.Type}</p>
      </div>
    </div>
  )
}

export default MovieCard