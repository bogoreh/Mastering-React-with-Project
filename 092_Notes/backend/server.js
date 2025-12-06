const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (replace with a real database in production)
let notes = [
  { id: 1, title: 'First Note', content: 'This is my first note', completed: false },
  { id: 2, title: 'Second Note', content: 'This is my second note', completed: true },
];

// Get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Get single note
app.get('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: 'Note not found' });
  res.json(note);
});

// Create a note
app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  
  const newNote = {
    id: notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1,
    title,
    content,
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Update a note
app.put('/api/notes/:id', (req, res) => {
  const { title, content, completed } = req.body;
  const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
  
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }
  
  notes[noteIndex] = {
    ...notes[noteIndex],
    title: title || notes[noteIndex].title,
    content: content || notes[noteIndex].content,
    completed: completed !== undefined ? completed : notes[noteIndex].completed,
    updatedAt: new Date().toISOString()
  };
  
  res.json(notes[noteIndex]);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
  const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
  
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }
  
  notes.splice(noteIndex, 1);
  res.json({ message: 'Note deleted successfully' });
});

// Toggle complete status
app.patch('/api/notes/:id/toggle', (req, res) => {
  const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
  
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }
  
  notes[noteIndex] = {
    ...notes[noteIndex],
    completed: !notes[noteIndex].completed,
    updatedAt: new Date().toISOString()
  };
  
  res.json(notes[noteIndex]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});