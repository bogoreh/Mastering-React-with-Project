export const initialTasks = [
  {
    id: 1,
    title: 'Learn React Hooks',
    description: 'Understand useState, useEffect, and custom hooks',
    completed: true,
    priority: 'high',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 2,
    title: 'Build Vite Project',
    description: 'Create a new React app with Vite',
    completed: true,
    priority: 'medium',
    createdAt: new Date('2024-01-16')
  },
  {
    id: 3,
    title: 'Style Components',
    description: 'Implement beautiful CSS design',
    completed: false,
    priority: 'high',
    createdAt: new Date('2024-01-17')
  },
  {
    id: 4,
    title: 'Add Routing',
    description: 'Implement React Router for navigation',
    completed: false,
    priority: 'medium',
    createdAt: new Date('2024-01-18')
  }
]

export const priorityColors = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#10b981'
}