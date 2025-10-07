import { useState } from 'react'
import IssueList from './components/IssueList'
import IssueForm from './components/IssueForm'
import SearchBar from './components/SearchBar'
import { IssueProvider } from './hooks/useIssues' // Make sure this import is correct

function App() {
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <IssueProvider>
      <div className="app">
        <header className="app-header">
          <div className="container">
            <h1>GitHub Issues Manager</h1>
            <p>Track and manage your project issues</p>
          </div>
        </header>

        <main className="container">
          <div className="controls">
            <SearchBar onSearch={setSearchTerm} />
            <button 
              className="btn-primary"
              onClick={() => setShowForm(true)}
            >
              + New Issue
            </button>
          </div>

          <IssueList searchTerm={searchTerm} />
          
          {showForm && (
            <IssueForm onClose={() => setShowForm(false)} />
          )}
        </main>
      </div>
    </IssueProvider>
  )
}

export default App