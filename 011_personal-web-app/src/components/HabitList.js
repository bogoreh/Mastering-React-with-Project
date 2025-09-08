// src/components/HabitList.js
import React from 'react';

const HabitList = ({ habits, toggleHabit }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="habit-list">
      <div className="habit-list-header">
        <div className="habit-name-header">Habit</div>
        {days.map(day => (
          <div key={day} className="day-header">{day}</div>
        ))}
      </div>
      
      {habits.map(habit => (
        <div key={habit.id} className="habit-item">
          <div className="habit-name">{habit.name}</div>
          {habit.completed.map((completed, index) => (
            <div 
              key={index} 
              className={`day-cell ${completed ? 'completed' : ''}`}
              onClick={() => toggleHabit(habit.id, index)}
            >
              {completed ? '✓' : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HabitList;