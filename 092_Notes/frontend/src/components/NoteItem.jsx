function NoteItem({ note, onDelete, onToggleComplete, onEdit }) {
  return (
    <div className={`note-item ${note.completed ? 'completed' : ''}`}>
      <div className="note-content">
        <div className="note-header">
          <h3 className="note-title">{note.title}</h3>
          <span className={`note-status ${note.completed ? 'completed' : 'pending'}`}>
            {note.completed ? '✓ Completed' : '○ Pending'}
          </span>
        </div>
        <p className="note-text">{note.content}</p>
        {note.createdAt && (
          <small className="note-date">
            Created: {new Date(note.createdAt).toLocaleDateString()}
          </small>
        )}
      </div>
      <div className="note-actions">
        <button 
          onClick={() => onToggleComplete(note.id)} 
          className="btn btn-toggle"
        >
          {note.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button 
          onClick={() => onEdit(note)} 
          className="btn btn-edit"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(note.id)} 
          className="btn btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;