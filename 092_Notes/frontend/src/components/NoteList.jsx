import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onToggleComplete, onEdit }) {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <p>No notes yet. Create your first note above!</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      <h2>Your Notes ({notes.length})</h2>
      <div className="notes-container">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;