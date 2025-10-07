import '../styles/App.css';

function MovieCard({ movie }) {
  const getRatingColor = (rating) => {
    if (rating >= 8.5) return '#4CAF50';
    if (rating >= 7.0) return '#FFC107';
    return '#F44336';
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
        <div 
          className="movie-rating"
          style={{ backgroundColor: getRatingColor(movie.rating) }}
        >
          {movie.rating}
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{movie.year}</span>
          <span className="movie-genre">{movie.genre}</span>
        </div>
        <p className="movie-director">Director: {movie.director}</p>
        <p className="movie-plot">{movie.plot}</p>
      </div>
    </div>
  );
}

export default MovieCard;