import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import './styles/variables.css';
import './styles/globals.css';
import './styles/animations.css';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Beautiful Design",
      description: "Modern and clean design that captures attention",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400"
    },
    {
      id: 2,
      title: "Smooth Animations",
      description: "Fluid animations and transitions for better UX",
      image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400"
    },
    {
      id: 3,
      title: "Responsive Layout",
      description: "Works perfectly on all devices and screen sizes",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400"
    }
  ]);

  const handleCardClick = (cardId) => {
    console.log('Card clicked:', cardId);
  };

  const handleButtonClick = () => {
    alert('Button clicked! 🎉');
  };

  return (
    <div className="container">
      <Navigation />
      
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #fff, #e0e7ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Welcome to AwesomeApp
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          Experience beautiful hover interactions and modern design
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Button variant="primary" onClick={handleButtonClick}>
          Get Started
        </Button>
        <Button variant="secondary" onClick={handleButtonClick}>
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default App;