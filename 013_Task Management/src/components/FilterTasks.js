// src/components/FilterTasks.js
import React from 'react';

const FilterTasks = ({ filter, setFilter }) => {
  return (
    <div className="filter-tasks">
      <button 
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button 
        className={filter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button 
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTasks;