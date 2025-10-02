import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import { movies } from './data/movies';
import './styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.director.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBar onSearch={setSearchTerm} />
        
        <div className="movies-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <div className="no-results">
              No movies found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;