import { useState, useEffect } from 'react'

const ContactForm = ({ onAddContact, onUpdateContact, editingContact, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  useEffect(() => {
    if (editingContact) {
      setFormData(editingContact)
    } else {
      setFormData({ name: '', phone: '', email: '' })
    }
  }, [editingContact])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert('Please fill in all fields')
      return
    }

    if (editingContact) {
      onUpdateContact(formData)
    } else {
      onAddContact(formData)
      setFormData({ name: '', phone: '', email: '' })
    }
  }

  const getAvatarInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : '?'
  }

  return (
    <div className="form-container">
      <h2 className="form-title">
        {editingContact ? '✏️ Edit Contact' : '👤 Add New Contact'}
      </h2>
      
      {editingContact && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
          <div className="contact-avatar" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
            {getAvatarInitials(formData.name)}
          </div>
          <div>
            <div style={{ fontWeight: '600', color: '#0369a1' }}>Editing Contact</div>
            <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Make your changes below</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          {editingContact ? (
            <>
              <button type="submit" className="btn btn-primary">
                💾 Update Contact
              </button>
              <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
                ❌ Cancel
              </button>
            </>
          ) : (
            <button type="submit" className="btn btn-primary">
              ➕ Add Contact
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default ContactForm