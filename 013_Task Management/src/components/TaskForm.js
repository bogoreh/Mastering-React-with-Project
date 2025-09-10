// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd({ text, priority });
      setText('');
      setPriority('medium');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;