import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import Loader from './components/Loader'
import useMovies from './hooks/useMovies'

function App() {
  const [query, setQuery] = useState('')
  const { movies, loading, error, searchMovies } = useMovies()

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm)
    if (searchTerm.trim()) {
      searchMovies(searchTerm)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">🎬 Movie Search</h1>
          <p className="subtitle">Discover your next favorite movie</p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        {loading && <Loader />}

        {!loading && movies.length > 0 && (
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}

        {!loading && query && movies.length === 0 && (
          <div className="no-results">
            <h3>No movies found for "{query}"</h3>
            <p>Try searching for a different title</p>
          </div>
        )}

        {!loading && !query && (
          <div className="welcome-message">
            <h3>Welcome to Movie Search!</h3>
            <p>Enter a movie title above to get started</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App