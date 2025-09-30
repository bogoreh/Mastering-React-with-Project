function NoteItem({ note, onDelete }) {
  return (
    <div className="note-item">
      <p className="note-text">{note.text}</p>
      <div className="note-footer">
        <span className="note-date">{note.createdAt}</span>
        <button 
          onClick={() => onDelete(note.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteItem