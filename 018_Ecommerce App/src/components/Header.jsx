import { useState } from 'react';
import Cart from './Cart';

const Header = ({ cartItems, removeFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">ShopEasy</div>
            <div 
              className="cart-icon"
              onClick={() => setIsCartOpen(true)}
            >
              🛒
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </div>
          </nav>
        </div>
      </header>

      {isCartOpen && (
        <Cart 
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
};

export default Header;