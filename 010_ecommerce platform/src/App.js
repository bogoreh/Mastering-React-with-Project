import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import products from './data/products';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      // Check if product is already in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      // If not in cart, add with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
    
    // Show a quick confirmation
    alert(`Added ${product.name} to cart!`);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;