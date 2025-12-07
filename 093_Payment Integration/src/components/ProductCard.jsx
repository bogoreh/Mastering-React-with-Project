import React from 'react'

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price.toFixed(2)}</div>
      <button onClick={() => onSelect(product)}>Buy Now</button>
    </div>
  )
}

export default ProductCard