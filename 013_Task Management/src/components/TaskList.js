// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDelete, onEdit }) => {
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks to display</div>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;