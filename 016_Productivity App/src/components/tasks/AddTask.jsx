import { useState } from 'react'

function AddTask({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      onAddTask(taskText.trim())
      setTaskText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task..."
        className="task-input"
      />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  )
}

export default AddTask