// src/components/HabitForm.js
import React, { useState } from 'react';

const HabitForm = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName);
      setHabitName('');
    }
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter habit name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        className="habit-input"
      />
      <button type="submit" className="btn-primary">Add Habit</button>
    </form>
  );
};

export default HabitForm;