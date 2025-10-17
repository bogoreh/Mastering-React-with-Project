import ContactCard from './ContactCard'

const ContactList = ({ contacts, onEditContact, onDeleteContact }) => {
  if (contacts.length === 0) {
    return (
      <div className="contacts-container">
        <div className="contacts-header">
          <h2>
            📋 Contacts
            <span className="contacts-count">0</span>
          </h2>
        </div>
        <div className="no-contacts">
          <div className="no-contacts-icon">📭</div>
          <h3>No Contacts Yet</h3>
          <p>Add your first contact to get started!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h2>
          📋 Contacts
          <span className="contacts-count">{contacts.length}</span>
        </h2>
      </div>
      
      <div className="contacts-list">
        {contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onEdit={onEditContact}
            onDelete={onDeleteContact}
          />
        ))}
      </div>
    </div>
  )
}

export default ContactList