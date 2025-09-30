function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="task-checkbox"
      />
      <span className="task-text">{task.text}</span>
      <span className="task-date">{task.createdAt}</span>
      <button 
        onClick={() => onDelete(task.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem