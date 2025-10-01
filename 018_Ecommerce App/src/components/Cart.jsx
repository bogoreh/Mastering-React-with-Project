const Cart = ({ cartItems, removeFromCart, onClose }) => {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={onClose}>×</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">
                    ${item.price} × {item.quantity}
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ff4757',
                    cursor: 'pointer',
                    fontSize: '1.2rem'
                  }}
                >
                  ×
                </button>
              </div>
            ))}
            
            <div className="cart-total">
              Total: ${totalPrice.toFixed(2)}
            </div>
            
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;