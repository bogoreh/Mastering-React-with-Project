const ContactCard = ({ contact, onEdit, onDelete }) => {
  const getAvatarInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const handleEdit = () => {
    onEdit(contact)
  }

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      onDelete(contact.id)
    }
  }

  return (
    <div className="contact-card">
      <div className="contact-avatar">
        {getAvatarInitials(contact.name)}
      </div>
      
      <div className="contact-info">
        <h3 className="contact-name">{contact.name}</h3>
        <div className="contact-phone">
          📞 {contact.phone}
        </div>
        <div className="contact-email">
          ✉️ {contact.email}
        </div>
      </div>
      
      <div className="contact-actions">
        <button 
          className="btn-icon btn-edit" 
          onClick={handleEdit}
          title="Edit contact"
        >
          ✏️
        </button>
        <button 
          className="btn-icon btn-delete" 
          onClick={handleDelete}
          title="Delete contact"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default ContactCard