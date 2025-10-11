import React from 'react'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import { useAuth } from './hooks/useAuth'

function App() {
  const { user, login, logout } = useAuth()

  return (
    <div className="app">
      {user ? (
        <Dashboard user={user} onLogout={logout} />
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  )
}

export default App