import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import PaymentForm from '../components/PaymentForm'
import PaymentStatus from '../components/PaymentStatus'

const products = [
  {
    id: 1,
    name: 'Premium Widget',
    description: 'High-quality widget with all features',
    price: 49.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Basic Widget',
    description: 'Simple widget for everyday use',
    price: 19.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Deluxe Bundle',
    description: 'Everything you need in one package',
    price: 99.99,
    image: 'https://via.placeholder.com/150'
  }
]

const CheckoutPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [paymentStatus, setPaymentStatus] = useState(null)
  const [paymentResult, setPaymentResult] = useState(null)

  const handlePaymentSuccess = (result) => {
    setPaymentStatus('success')
    setPaymentResult(result)
    // In a real app, you would redirect to success page
  }

  const handlePaymentError = (error) => {
    setPaymentStatus('error')
    setPaymentResult({ message: error })
  }

  return (
    <div className="checkout-page">
      {!selectedProduct ? (
        <>
          <h2>Select a Product</h2>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
              />
            ))}
          </div>
        </>
      ) : paymentStatus ? (
        <PaymentStatus
          status={paymentStatus}
          message={paymentResult?.message}
          transactionId={paymentResult?.transactionId}
        />
      ) : (
        <>
          <button 
            className="back-button"
            onClick={() => setSelectedProduct(null)}
          >
            ← Back to Products
          </button>
          <div className="checkout-container">
            <div className="product-summary">
              <h3>Order Summary</h3>
              <div className="summary-item">
                <span>{selectedProduct.name}</span>
                <span>${selectedProduct.price.toFixed(2)}</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${selectedProduct.price.toFixed(2)}</span>
              </div>
            </div>
            <PaymentForm
              amount={selectedProduct.price}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default CheckoutPage