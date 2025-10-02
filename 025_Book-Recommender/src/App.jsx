import React, { useState, useMemo } from 'react'
import BookCard from './components/BookCard'
import SearchBar from './components/SearchBar'
import RecommendationFilters from './components/RecommendationFilters'
import LoadingSpinner from './components/LoadingSpinner'
import { useBooks } from './hooks/useBooks'

function App() {
  const { books, loading, error } = useBooks()
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    genre: 'all',
    rating: 0,
    year: 'all'
  })

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.genre.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesGenre = filters.genre === 'all' || book.genre === filters.genre
      const matchesRating = book.rating >= filters.rating
      const matchesYear = filters.year === 'all' || book.publishedYear.toString() === filters.year

      return matchesSearch && matchesGenre && matchesRating && matchesYear
    })
  }, [books, searchTerm, filters])

  const genres = [...new Set(books.map(book => book.genre))]
  const years = [...new Set(books.map(book => book.publishedYear.toString()))].sort((a, b) => b - a)

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">Error loading books: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Book Recommender
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover your next favorite read with AI-powered recommendations and intelligent filtering
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <SearchBar 
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm} 
              />
            </div>
            <div className="lg:col-span-2">
              <RecommendationFilters
                filters={filters}
                onFiltersChange={setFilters}
                genres={genres}
                years={years}
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-white">
            Recommended Books
            <span className="text-gray-400 text-lg ml-2">
              ({filteredBooks.length} results)
            </span>
          </h2>
        </div>

        {/* Books Grid */}
        {loading ? (
          <LoadingSpinner />
        ) : filteredBooks.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-xl">No books found matching your criteria</div>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App