// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './styles/App.css';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="App">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="main-content">
        {activeView === 'dashboard' && <Dashboard />}
      </main>
    </div>
  );
}

export default App;