import React from 'react'

const FilterSection = ({ filteredData }) => {
  const categoryCounts = filteredData.categoryBreakdown

  return (
    <div className="filter-section">
      <h3>📊 Category Breakdown</h3>
      <div className="categories-grid">
        {Object.entries(categoryCounts).map(([category, count]) => (
          <div key={category} className="category-card">
            <div className="category-name">{category}</div>
            <div className="category-count">{count}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterSection