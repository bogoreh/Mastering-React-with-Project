import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h2>User Profile</h2>
        {!isEditing && (
          <button 
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
      
      <div className="profile-content">
        <div className="field">
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.name}</span>
          )}
        </div>
        
        <div className="field">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.email}</span>
          )}
        </div>
        
        <div className="field">
          <label>Role:</label>
          {isEditing ? (
            <select
              name="role"
              value={editedUser.role}
              onChange={handleInputChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
          ) : (
            <span>{user.role}</span>
          )}
        </div>
        
        {isEditing && (
          <div className="actions">
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;