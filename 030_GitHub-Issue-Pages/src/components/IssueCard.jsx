import { useIssues } from '../hooks/useIssues'

function IssueCard({ issue }) {
  const { updateIssueStatus, deleteIssue } = useIssues()

  const getPriorityColor = (priority) => {
    const colors = {
      low: '#6c757d',
      medium: '#fd7e14',
      high: '#dc3545'
    }
    return colors[priority] || colors.medium
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const handleStatusChange = (newStatus) => {
    updateIssueStatus(issue.id, newStatus)
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this issue?')) {
      deleteIssue(issue.id)
    }
  }

  return (
    <div className="issue-card">
      <div className="issue-header">
        <div 
          className="priority-indicator" 
          style={{ backgroundColor: getPriorityColor(issue.priority) }} 
        />
        <h4 className="issue-title">{issue.title}</h4>
        <button 
          className="btn-icon"
          onClick={handleDelete}
          title="Delete issue"
        >
          ×
        </button>
      </div>
      
      <p className="issue-description">{issue.description}</p>
      
      <div className="issue-labels">
        {issue.labels.map((label, index) => (
          <span key={index} className="label">{label}</span>
        ))}
      </div>
      
      <div className="issue-footer">
        <span className="issue-date">
          {formatDate(issue.createdAt)}
        </span>
        
        <div className="status-actions">
          <select 
            value={issue.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="status-select"
          >
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default IssueCard