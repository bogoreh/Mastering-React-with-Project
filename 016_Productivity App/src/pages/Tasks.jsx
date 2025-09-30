import { useState } from 'react'
import TaskList from '../components/tasks/TaskList'
import AddTask from '../components/tasks/AddTask'

function Tasks() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date().toLocaleDateString()
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="tasks-page">
      <h2>My Tasks</h2>
      <AddTask onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default Tasks