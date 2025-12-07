import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api'

// Mock payment processing function
// In a real app, this would call your backend API
export const processPayment = async (paymentData) => {
  // For demo purposes, simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate validation
      if (!paymentData.cardNumber || !paymentData.expiry || !paymentData.cvc) {
        reject(new Error('Please fill in all card details'))
        return
      }

      // Simulate card validation
      if (paymentData.cardNumber.replace(/\s/g, '').length !== 16) {
        reject(new Error('Invalid card number'))
        return
      }

      // Simulate successful payment 90% of the time
      if (Math.random() > 0.1) {
        resolve({
          success: true,
          transactionId: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          message: 'Payment processed successfully',
          amount: paymentData.amount,
          timestamp: new Date().toISOString()
        })
      } else {
        reject(new Error('Payment declined by bank'))
      }
    }, 2000)
  })
}

// Real implementation example with Stripe (commented out)
/*
export const createStripePayment = async (amount) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/create-payment-intent`, {
      amount: amount * 100, // Convert to cents
      currency: 'usd'
    })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Payment failed')
  }
}

export const confirmStripePayment = async (paymentMethodId, paymentIntentId) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/confirm-payment`, {
      paymentMethodId,
      paymentIntentId
    })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Payment confirmation failed')
  }
}
*/