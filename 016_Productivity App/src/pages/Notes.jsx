import { useState } from 'react'
import NoteList from '../components/notes/NoteList'
import AddNote from '../components/notes/AddNote'

function Notes() {
  const [notes, setNotes] = useState([])

  const addNote = (noteText) => {
    const newNote = {
      id: Date.now(),
      text: noteText,
      createdAt: new Date().toLocaleString()
    }
    setNotes([...notes, newNote])
  }

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId))
  }

  return (
    <div className="notes-page">
      <h2>My Notes</h2>
      <AddNote onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  )
}

export default Notes