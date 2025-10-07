import React from 'react'

const Sidebar = ({ contacts, activeContact, setActiveContact }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>💬 Messages</h1>
        <p>Chat with your friends</p>
      </div>
      <div className="contact-list">
        {contacts.map(contact => (
          <div
            key={contact.id}
            className={`contact-item ${activeContact === contact.name ? 'active' : ''}`}
            onClick={() => setActiveContact(contact.name)}
          >
            <div className="contact-avatar">
              {contact.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="contact-info">
              <h3>{contact.name}</h3>
              <p>Last seen {contact.lastSeen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar