import React from 'react';
import Navbar from './components/Navigation/Navbar';
import GlassCard from './components/GlassCard/GlassCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-container">
        <h1 className="app-title">Glassmorphism App</h1>
        <div className="cards-grid">
          <GlassCard 
            title="Welcome 👋" 
            content="This is a beautiful glassmorphism design example perfect for beginners."
            icon="🌟"
          />
          <GlassCard 
            title="Features ✨" 
            content="Smooth animations, blur effects, and modern UI design."
            icon="💎"
          />
          <GlassCard 
            title="Easy to Use 🚀" 
            content="Simple components that you can customize for your projects."
            icon="🎯"
          />
          <GlassCard 
            title="Get Started 📝" 
            content="Clone, modify, and create your own stunning designs!"
            icon="⭐"
          />
        </div>
      </div>
    </div>
  );
}

export default App;