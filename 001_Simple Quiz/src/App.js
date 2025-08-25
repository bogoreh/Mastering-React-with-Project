import React from 'react';
import Quiz from './components/Quiz';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Simple Quiz</h1>
        <p>Test your knowledge with this interactive quiz</p>
      </header>
      <main className="app-main">
        <Quiz />
      </main>
    </div>
  );
}

export default App;