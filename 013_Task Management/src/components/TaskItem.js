// src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  const priorityClass = `priority-${task.priority}`;

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''} ${priorityClass}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className="task-text">{task.text}</span>
      )}
      <div className="task-actions">
        {isEditing ? (
          <>
            <button onClick={handleEdit}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;