import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage'

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>{import.meta.env.VITE_APP_TITLE}</h1>
          <p className="subtitle">Secure Payment Processing Demo</p>
          <div className="header-badge">
            <span className="security-badge">🔒 SSL Secured</span>
            <span className="status-indicator">● Live</span>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </main>
        {/*<footer>
          <p>© 2024 Payment Integration. All transactions are simulated for testing purposes.</p>
        </footer>*/}
      </div>
    </Router>
  )
}

export default App