import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://via.placeholder.com/300x200?text=Headphones"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 599.99,
    image: "https://via.placeholder.com/300x200?text=Smartphone"
  },
  {
    id: 3,
    name: "Laptop",
    price: 999.99,
    image: "https://via.placeholder.com/300x200?text=Laptop"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    image: "https://via.placeholder.com/300x200?text=Watch"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://via.placeholder.com/300x200?text=Speaker"
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 49.99,
    image: "https://via.placeholder.com/300x200?text=Mouse"
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="App">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <ProductList 
        products={products} 
        onAddToCart={addToCart} 
      />
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;