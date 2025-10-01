import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { products } from './data/products';
import './index.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Header 
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <Home 
        products={products}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;