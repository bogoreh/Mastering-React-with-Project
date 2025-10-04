import React from 'react'

const FilterSection = ({
  selectedCategory,
  onCategoryChange,
  selectedType,
  onTypeChange,
  dateFilter,
  onDateFilterChange,
  categories,
  types
}) => {
  return (
    <div className="filter-section">
      <h3>Filters</h3>
      
      <div className="filter-group">
        <label className="filter-label">Date</label>
        <select 
          value={dateFilter} 
          onChange={(e) => onDateFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Dates</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past Events</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Category</label>
        <select 
          value={selectedCategory} 
          onChange={(e) => onCategoryChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Event Type</label>
        <select 
          value={selectedType} 
          onChange={(e) => onTypeChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Types</option>
          {types.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <button 
        className="reset-filters"
        onClick={() => {
          onCategoryChange('all')
          onTypeChange('all')
          onDateFilterChange('all')
        }}
      >
        Reset Filters
      </button>
    </div>
  )
}

export default FilterSection