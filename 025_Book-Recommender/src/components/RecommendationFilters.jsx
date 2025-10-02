import React from 'react'

const RecommendationFilters = ({ filters, onFiltersChange, genres, years }) => {
  const handleFilterChange = (key, value) => {
    onFiltersChange(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Genre Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Genre
        </label>
        <select
          value={filters.genre}
          onChange={(e) => handleFilterChange('genre', e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-lg"
        >
          <option value="all">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      {/* Rating Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Min Rating: {filters.rating}+
        </label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filters.rating}
          onChange={(e) => handleFilterChange('rating', parseFloat(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>0</span>
          <span>5</span>
        </div>
      </div>

      {/* Year Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Published Year
        </label>
        <select
          value={filters.year}
          onChange={(e) => handleFilterChange('year', e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-lg"
        >
          <option value="all">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default RecommendationFilters