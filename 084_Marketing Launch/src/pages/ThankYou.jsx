import { Link } from 'react-router-dom'

function ThankYou() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background-alt)' }}>
      <div style={{ textAlign: 'center', background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '500px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Thank You!</h1>
        <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.125rem' }}>
          Your feedback is invaluable to us. We'll be in touch soon with early access details.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default ThankYou