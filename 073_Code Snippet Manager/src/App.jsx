import React, { useState, useMemo } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import SnippetForm from './components/SnippetForm';
import SnippetCard from './components/SnippetCard';
import SearchBar from './components/SearchBar';
import './styles/App.css';

function App() {
  const [snippets, setSnippets] = useLocalStorage('code-snippets', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [editingSnippet, setEditingSnippet] = useState(null);

  const filteredSnippets = useMemo(() => {
    return snippets.filter(snippet => {
      const matchesSearch = snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          snippet.code.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLanguage = filterLanguage === 'all' || snippet.language === filterLanguage;
      
      return matchesSearch && matchesLanguage;
    });
  }, [snippets, searchTerm, filterLanguage]);

  const addSnippet = (snippet) => {
    setSnippets(prev => [snippet, ...prev]);
  };

  const updateSnippet = (updatedSnippet) => {
    setSnippets(prev => 
      prev.map(snippet => 
        snippet.id === updatedSnippet.id ? updatedSnippet : snippet
      )
    );
    setEditingSnippet(null);
  };

  const deleteSnippet = (snippetId) => {
    if (window.confirm('Are you sure you want to delete this snippet?')) {
      setSnippets(prev => prev.filter(snippet => snippet.id !== snippetId));
    }
  };

  const startEditing = (snippet) => {
    setEditingSnippet(snippet);
  };

  const cancelEdit = () => {
    setEditingSnippet(null);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>💾 Code Snippet Manager</h1>
          <p>Organize and manage your code snippets with ease</p>
        </header>

        <div className="main-content">
          <SnippetForm 
            onAddSnippet={addSnippet}
            editingSnippet={editingSnippet}
            onUpdateSnippet={updateSnippet}
            onCancelEdit={cancelEdit}
          />

          <div className="snippets-section">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filterLanguage={filterLanguage}
              onFilterChange={setFilterLanguage}
            />

            <div className="snippets-grid">
              {filteredSnippets.length > 0 ? (
                filteredSnippets.map(snippet => (
                  <SnippetCard 
                    key={snippet.id}
                    snippet={snippet}
                    onEdit={startEditing}
                    onDelete={deleteSnippet}
                  />
                ))
              ) : (
                <div className="empty-state">
                  {snippets.length === 0 
                    ? "No snippets yet. Add your first code snippet!" 
                    : "No snippets match your search criteria."}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;