import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img 
        src={movie.poster} 
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
        <span className="movie-rating">⭐ {movie.rating}</span>
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;