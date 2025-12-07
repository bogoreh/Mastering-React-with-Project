import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SuccessPage = () => {
  const [orderDetails, setOrderDetails] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // In a real app, you would fetch order details from backend
    // using transaction ID from URL params
    const params = new URLSearchParams(location.search)
    const transactionId = params.get('transaction_id')
    
    if (transactionId) {
      // Simulate fetching order details
      setOrderDetails({
        transactionId,
        amount: 49.99,
        date: new Date().toLocaleDateString(),
        items: ['Premium Widget']
      })
    }
  }, [location])

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">✅</div>
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
        
        {orderDetails && (
          <div className="order-details">
            <h3>Order Details</h3>
            <div className="detail-row">
              <span>Transaction ID:</span>
              <span>{orderDetails.transactionId}</span>
            </div>
            <div className="detail-row">
              <span>Amount:</span>
              <span>${orderDetails.amount.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Date:</span>
              <span>{orderDetails.date}</span>
            </div>
          </div>
        )}
        
        <div className="success-actions">
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button className="outline" onClick={() => window.print()}>
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage