import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || movie.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header />
      <main className="container">
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        <CategoryFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            color: 'white', 
            fontSize: '1.2rem',
            marginTop: '3rem'
          }}>
            No movies found. Try a different search or category.
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;