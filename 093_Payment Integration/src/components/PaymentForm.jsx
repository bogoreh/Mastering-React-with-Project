import React, { useState } from 'react'
import { processPayment } from '../services/paymentService'

const PaymentForm = ({ amount, onSuccess, onError }) => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const paymentData = {
      cardNumber: cardNumber.replace(/\s/g, ''),
      expiry: expiry.replace(/\s/g, ''),
      cvc,
      name,
      amount
    }

    try {
      const result = await processPayment(paymentData)
      onSuccess(result)
    } catch (error) {
      onError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h3>Payment Details</h3>
      <div className="form-group">
        <label>Cardholder Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          required
        />
      </div>
      <div className="form-group">
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '')
            const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ')
            setCardNumber(formatted)
          }}
          placeholder="4242 4242 4242 4242"
          maxLength="19"
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '')
              const formatted = value.replace(/(\d{2})(?=\d)/g, '$1/')
              setExpiry(formatted)
            }}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
        </div>
        <div className="form-group">
          <label>CVC</label>
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
            placeholder="123"
            maxLength="4"
            required
          />
        </div>
      </div>
      <div className="amount-display">
        Total Amount: <strong>${amount.toFixed(2)}</strong>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
      </button>
    </form>
  )
}

export default PaymentForm