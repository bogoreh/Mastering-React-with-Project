import React, { useState } from 'react';
import './SnippetCard.css';

const SnippetCard = ({ snippet, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      alert('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className={`snippet-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="snippet-header">
        <div className="snippet-title-section">
          <h3 className="snippet-title">{snippet.title}</h3>
          <span className={`language-tag ${snippet.language}`}>
            {snippet.language}
          </span>
        </div>
        
        <div className="snippet-actions">
          <button 
            onClick={copyToClipboard}
            className="btn-icon"
            title="Copy to clipboard"
          >
            📋
          </button>
          <button 
            onClick={() => onEdit(snippet)}
            className="btn-icon"
            title="Edit snippet"
          >
            ✏️
          </button>
          <button 
            onClick={() => onDelete(snippet.id)}
            className="btn-icon btn-delete"
            title="Delete snippet"
          >
            🗑️
          </button>
        </div>
      </div>

      {snippet.description && (
        <p className="snippet-description">{snippet.description}</p>
      )}

      <div className="code-section">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="toggle-code-btn"
        >
          {isExpanded ? '▲ Collapse Code' : '▼ View Code'}
        </button>
        
        {isExpanded && (
          <pre className="snippet-code">
            <code>{snippet.code}</code>
          </pre>
        )}
      </div>

      <div className="snippet-footer">
        <span className="date-info">
          Created: {formatDate(snippet.createdAt)}
        </span>
        {snippet.updatedAt !== snippet.createdAt && (
          <span className="date-info">
            Updated: {formatDate(snippet.updatedAt)}
          </span>
        )}
      </div>
    </div>
  );
};

export default SnippetCard;