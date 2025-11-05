import Card, { CardContent } from '../ui/Card'
import Button from '../common/Button'
import { priorityColors } from '../../data/mockData'

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <Card>
        <CardContent className="text-center">
          <h3>No tasks found</h3>
          <p>Create your first task to get started!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <Card key={task.id} hover className="task-item">
          <CardContent>
            <div className="task-header">
              <div className="task-info">
                <h3 className={task.completed ? 'completed' : ''}>
                  {task.title}
                </h3>
                <span 
                  className="priority-badge"
                  style={{ 
                    backgroundColor: priorityColors[task.priority] 
                  }}
                >
                  {task.priority}
                </span>
              </div>
              
              <div className="task-actions">
                <Button
                  size="small"
                  variant={task.completed ? "secondary" : "outline"}
                  onClick={() => onToggleComplete(task.id)}
                >
                  {task.completed ? 'Completed' : 'Mark Complete'}
                </Button>
                
                <Button
                  size="small"
                  variant="outline"
                  onClick={() => onEdit(task)}
                >
                  Edit
                </Button>
                
                <Button
                  size="small"
                  variant="outline"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </Button>
              </div>
            </div>

            {task.description && (
              <p className="task-description">{task.description}</p>
            )}

            <div className="task-meta">
              <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default TaskList