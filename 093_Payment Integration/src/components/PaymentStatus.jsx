import React from 'react'

const PaymentStatus = ({ status, message, transactionId }) => {
  const isSuccess = status === 'success'
  const isError = status === 'error'
  const isPending = status === 'pending'

  return (
    <div className={`payment-status ${status}`}>
      <div className="status-icon">
        {isSuccess && '✅'}
        {isError && '❌'}
        {isPending && '⏳'}
      </div>
      <h3>
        {isSuccess && 'Payment Successful!'}
        {isError && 'Payment Failed'}
        {isPending && 'Payment Processing'}
      </h3>
      <p>{message}</p>
      {transactionId && (
        <div className="transaction-id">
          Transaction ID: <code>{transactionId}</code>
        </div>
      )}
      {isSuccess && (
        <button onClick={() => window.location.href = '/'}>
          Back to Shopping
        </button>
      )}
      {isError && (
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      )}
    </div>
  )
}

export default PaymentStatus