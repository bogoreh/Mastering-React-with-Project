import React, { useState } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import UserProfile from './components/UserProfile/UserProfile';
import './App.css';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user'
  });

  const handleButtonClick = (buttonName) => {
    alert(`${buttonName} button clicked!`);
  };

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
    alert('User profile updated successfully!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Writing Test</h1>
      </header>
      
      <main className="App-main">
        <section className="component-section">
          <h2>Button Components</h2>
          <div className="button-group">
            <Button onClick={() => handleButtonClick('Primary')} variant="primary">
              Primary Button
            </Button>
            <Button onClick={() => handleButtonClick('Secondary')} variant="secondary">
              Secondary Button
            </Button>
            <Button onClick={() => handleButtonClick('Success')} variant="success">
              Success Button
            </Button>
            <Button disabled>
              Disabled Button
            </Button>
          </div>
        </section>

        <section className="component-section">
          <h2>Card Components</h2>
          <div className="card-group">
            <Card title="Simple Card">
              <p>This is a simple card with some content inside.</p>
              <p>It can contain any React elements.</p>
            </Card>
            
            <Card title="Card with Footer" footer={
              <div>
                <Button variant="primary">Action 1</Button>
                <Button variant="secondary">Action 2</Button>
              </div>
            }>
              <p>This card has a footer with action buttons.</p>
            </Card>
            
            <Card>
              <p>This card doesn't have a title.</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="component-section">
          <h2>User Profile Component</h2>
          <UserProfile user={user} onUpdate={handleUserUpdate} />
        </section>
      </main>
    </div>
  );
}

export default App;