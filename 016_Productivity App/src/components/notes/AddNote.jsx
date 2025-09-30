import { useState } from 'react'

function AddNote({ onAddNote }) {
  const [noteText, setNoteText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (noteText.trim()) {
      onAddNote(noteText.trim())
      setNoteText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Write your note here..."
        className="note-input"
        rows="4"
      />
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  )
}

export default AddNote