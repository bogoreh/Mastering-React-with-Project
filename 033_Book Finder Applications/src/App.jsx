import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import BookCard from './components/BookCard'
import LoadingSpinner from './components/LoadingSpinner'
import useBooks from './hooks/useBooks'

function App() {
  const [query, setQuery] = useState('')
  const { books, loading, error, searchBooks } = useBooks()

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
    searchBooks(searchQuery)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">
            <span className="book-icon">📚</span>
            Book Finder
          </h1>
          <p className="app-subtitle">Discover your next favorite book</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <SearchBar onSearch={handleSearch} />
          
          {loading && <LoadingSpinner />}
          
          {error && (
            <div className="error-message">
              <p>😔 {error}</p>
            </div>
          )}

          {books.length > 0 && (
            <div className="results-section">
              <h2 className="results-title">
                Found {books.length} books for "{query}"
              </h2>
              <div className="books-grid">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          )}

          {!loading && !error && books.length === 0 && query && (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No books found</h3>
              <p>Try searching with different keywords</p>
            </div>
          )}

          {!loading && !error && !query && (
            <div className="welcome-state">
              <div className="welcome-icon">📖</div>
              <h3>Start Exploring Books</h3>
              <p>Search for any book title, author, or genre to get started</p>
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 Book Finder. Made with ❤️</p>
        </div>
      </footer>
    </div>
  )
}

export default App