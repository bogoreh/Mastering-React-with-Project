import { useIssues } from '../hooks/useIssues'
import IssueCard from './IssueCard'

function IssueList({ searchTerm }) {
  const { issues } = useIssues()

  const filteredIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.labels.some(label => label.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const getIssuesByStatus = (status) => {
    return filteredIssues.filter(issue => issue.status === status)
  }

  const statusColumns = [
    { key: 'open', title: 'Open', color: '#dc3545' },
    { key: 'in-progress', title: 'In Progress', color: '#fd7e14' },
    { key: 'closed', title: 'Closed', color: '#198754' }
  ]

  return (
    <div className="issue-board">
      {statusColumns.map(column => (
        <div key={column.key} className="status-column">
          <div className="column-header">
            <span 
              className="status-indicator"
              style={{ backgroundColor: column.color }}
            ></span>
            <h3>{column.title}</h3>
            <span className="issue-count">
              {getIssuesByStatus(column.key).length}
            </span>
          </div>
          <div className="issues-container">
            {getIssuesByStatus(column.key).map(issue => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
            {getIssuesByStatus(column.key).length === 0 && (
              <div className="empty-state">
                No issues found
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default IssueList