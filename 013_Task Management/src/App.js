import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterTasks from './components/FilterTasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      text: task.text,
      completed: false,
      priority: task.priority || 'medium'
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Management App</h1>
        <p>Organize your work and life</p>
      </header>
      <div className="app-container">
        <TaskForm onAdd={addTask} />
        <FilterTasks filter={filter} setFilter={setFilter} />
        <TaskList 
          tasks={filteredTasks} 
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </div>
    </div>
  );
}

export default App;