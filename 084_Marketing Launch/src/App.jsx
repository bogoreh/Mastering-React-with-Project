import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  )
}

export default App