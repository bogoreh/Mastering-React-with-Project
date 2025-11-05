import { useState } from 'react'
import TaskList from '../components/features/TaskList'
import TaskForm from '../components/features/TaskForm'
import Button from '../components/common/Button'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialTasks } from '../data/mockData'

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage('hackathon-tasks', initialTasks)
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
      createdAt: new Date(),
      completed: false
    }
    setTasks([...tasks, newTask])
    setShowForm(false)
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ))
    setEditingTask(null)
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const startEdit = (task) => {
    setEditingTask(task)
    setShowForm(true)
  }

  const cancelEdit = () => {
    setEditingTask(null)
    setShowForm(false)
  }

  return (
    <div className="tasks-page">
      <div className="page-header">
        <h1>Task Management</h1>
        <p>Organize and track your tasks efficiently</p>
      </div>

      {!showForm ? (
        <>
          <div className="page-actions">
            <Button 
              variant="primary" 
              onClick={() => setShowForm(true)}
            >
              + Add New Task
            </Button>
          </div>
          
          <TaskList
            tasks={tasks}
            onEdit={startEdit}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
          />
        </>
      ) : (
        <TaskForm
          task={editingTask}
          onSubmit={editingTask ? updateTask : addTask}
          onCancel={cancelEdit}
        />
      )}
    </div>
  )
}

export default Tasks