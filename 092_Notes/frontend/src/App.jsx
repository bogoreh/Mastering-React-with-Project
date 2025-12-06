import { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

const API_URL = 'http://localhost:5000/api/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const createNote = async (noteData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      });
      const newNote = await response.json();
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const updateNote = async (id, noteData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      });
      const updatedNote = await response.json();
      setNotes(notes.map(note => note.id === id ? updatedNote : note));
      setEditingNote(null);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setNotes(notes.filter(note => note.id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}/toggle`, {
        method: 'PATCH',
      });
      const updatedNote = await response.json();
      setNotes(notes.map(note => note.id === id ? updatedNote : note));
    } catch (error) {
      console.error('Error toggling note:', error);
    }
  };

  const startEditing = (note) => {
    setEditingNote(note);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Notes App</h1>
        <p>Create, read, update, and delete your notes</p>
      </header>
      
      <main className="app-main">
        <NoteForm 
          onSubmit={editingNote ? (data) => updateNote(editingNote.id, data) : createNote}
          initialData={editingNote}
          onCancel={() => setEditingNote(null)}
          isEditing={!!editingNote}
        />
        
        <NoteList 
          notes={notes}
          onDelete={deleteNote}
          onToggleComplete={toggleComplete}
          onEdit={startEditing}
        />
      </main>
      
      <footer className="app-footer">
        <p>Total Notes: {notes.length} | Completed: {notes.filter(n => n.completed).length}</p>
      </footer>
    </div>
  );
}

export default App;