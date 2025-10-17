import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [editingContact, setEditingContact] = useState(null)

  // Load contacts from localStorage on component mount
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [])

  // Save contacts to localStorage whenever contacts change
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (contact) => {
    const newContact = {
      id: Date.now().toString(),
      ...contact
    }
    setContacts([...contacts, newContact])
  }

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ))
    setEditingContact(null)
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const startEdit = (contact) => {
    setEditingContact(contact)
  }

  const cancelEdit = () => {
    setEditingContact(null)
  }

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>📱 Contact Manager</h1>
          <p>Manage your contacts efficiently</p>
        </header>

        <div className="app-content">
          <ContactForm 
            onAddContact={addContact}
            onUpdateContact={updateContact}
            editingContact={editingContact}
            onCancelEdit={cancelEdit}
          />
          
          <ContactList 
            contacts={contacts}
            onEditContact={startEdit}
            onDeleteContact={deleteContact}
          />
        </div>
      </div>
    </div>
  )
}

export default App