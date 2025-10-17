import React, { useState } from 'react';
import './SnippetForm.css';

const SnippetForm = ({ onAddSnippet, editingSnippet, onUpdateSnippet, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    title: editingSnippet?.title || '',
    description: editingSnippet?.description || '',
    code: editingSnippet?.code || '',
    language: editingSnippet?.language || 'javascript'
  });

  const languages = [
    'javascript', 'python', 'java', 'html', 'css', 'typescript', 
    'php', 'ruby', 'cpp', 'csharp', 'go', 'rust'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.code.trim()) return;

    const snippet = {
      id: editingSnippet?.id || Date.now().toString(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      code: formData.code.trim(),
      language: formData.language,
      createdAt: editingSnippet?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (editingSnippet) {
      onUpdateSnippet(snippet);
    } else {
      onAddSnippet(snippet);
    }

    setFormData({
      title: '',
      description: '',
      code: '',
      language: 'javascript'
    });
  };

  const handleCancel = () => {
    onCancelEdit();
    setFormData({
      title: '',
      description: '',
      code: '',
      language: 'javascript'
    });
  };

  return (
    <div className="snippet-form-container">
      <h2>{editingSnippet ? 'Edit Snippet' : 'Add New Snippet'}</h2>
      <form onSubmit={handleSubmit} className="snippet-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            placeholder="Enter snippet title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Enter snippet description"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            value={formData.language}
            onChange={(e) => setFormData({...formData, language: e.target.value})}
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="code">Code *</label>
          <textarea
            id="code"
            value={formData.code}
            onChange={(e) => setFormData({...formData, code: e.target.value})}
            placeholder="Paste your code here..."
            rows="8"
            required
          />
        </div>

        <div className="form-actions">
          {editingSnippet && (
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              Cancel
            </button>
          )}
          <button type="submit" className="btn btn-primary">
            {editingSnippet ? 'Update Snippet' : 'Add Snippet'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SnippetForm;