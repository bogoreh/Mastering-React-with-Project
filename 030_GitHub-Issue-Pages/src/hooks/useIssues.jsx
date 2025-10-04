import { createContext, useState, useContext } from 'react'

const IssueContext = createContext()

export function IssueProvider({ children }) {
  const [issues, setIssues] = useState([
    {
      id: 1,
      title: 'Fix login page styling',
      description: 'The login page has alignment issues on mobile devices',
      status: 'open',
      priority: 'high',
      labels: ['bug', 'css'],
      createdAt: new Date('2024-01-15'),
    },
    {
      id: 2,
      title: 'Add dark mode support',
      description: 'Implement dark/light theme toggle functionality',
      status: 'in-progress',
      priority: 'medium',
      labels: ['enhancement', 'ui'],
      createdAt: new Date('2024-01-10'),
    },
    {
      id: 3,
      title: 'Update documentation',
      description: 'Add new API endpoints to the documentation',
      status: 'closed',
      priority: 'low',
      labels: ['documentation'],
      createdAt: new Date('2024-01-05'),
    }
  ])

  const addIssue = (issue) => {
    const newIssue = {
      ...issue,
      id: Math.max(...issues.map(i => i.id), 0) + 1,
      createdAt: new Date(),
      status: 'open'
    }
    setIssues([...issues, newIssue])
  }

  const updateIssueStatus = (issueId, newStatus) => {
    setIssues(issues.map(issue =>
      issue.id === issueId ? { ...issue, status: newStatus } : issue
    ))
  }

  const deleteIssue = (issueId) => {
    setIssues(issues.filter(issue => issue.id !== issueId))
  }

  const value = {
    issues,
    addIssue,
    updateIssueStatus,
    deleteIssue
  }

  return (
    <IssueContext.Provider value={value}>
      {children}
    </IssueContext.Provider>
  )
}

export const useIssues = () => {
  const context = useContext(IssueContext)
  if (!context) {
    throw new Error('useIssues must be used within an IssueProvider')
  }
  return context
}