// src/components/Dashboard.js
import React, { useState } from 'react';
import HabitList from './HabitList';
import HabitForm from './HabitForm';
import ProgressChart from './ProgressChart';

const Dashboard = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Exercise', completed: [true, false, true, true, false, true, false] },
    { id: 2, name: 'Read', completed: [true, true, true, false, true, false, true] },
    { id: 3, name: 'Meditate', completed: [false, true, false, true, false, true, true] }
  ]);
  const [showForm, setShowForm] = useState(false);

  const addHabit = (habitName) => {
    const newHabit = {
      id: habits.length + 1,
      name: habitName,
      completed: [false, false, false, false, false, false, false]
    };
    setHabits([...habits, newHabit]);
    setShowForm(false);
  };

  const toggleHabit = (habitId, dayIndex) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const updatedCompleted = [...habit.completed];
        updatedCompleted[dayIndex] = !updatedCompleted[dayIndex];
        return { ...habit, completed: updatedCompleted };
      }
      return habit;
    }));
  };

  return (
    <div className="dashboard container">
      <div className="dashboard-header">
        <h2>My Habits</h2>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Habit'}
        </button>
      </div>
      
      {showForm && <HabitForm onAddHabit={addHabit} />}
      
      <div className="dashboard-content">
        <div className="habits-section">
          <HabitList habits={habits} toggleHabit={toggleHabit} />
        </div>
        
        <div className="progress-section">
          <ProgressChart habits={habits} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;