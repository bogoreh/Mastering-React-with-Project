import './ColumnHeader.css'

const ColumnHeader = ({ title, type, onRemove, onAddTweet }) => {
  return (
    <div className="column-header">
      <div className="column-info">
        <h3 className="column-title">{title}</h3>
        {type && (
          <span className="column-type">{type === 'search' ? 'Search' : 'Timeline'}</span>
        )}
      </div>
      
      <div className="column-actions">
        <button 
          className="column-action-btn"
          onClick={onAddTweet}
          title="Add Tweet"
        >
          +
        </button>
        
        <button 
          className="column-action-btn remove-btn"
          onClick={onRemove}
          title="Remove Column"
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default ColumnHeader