import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;