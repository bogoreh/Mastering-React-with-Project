import React from 'react'
import { Video } from 'lucide-react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Video className="logo" size={32} />
        <h1>VideoCall</h1>
      </div>
    </header>
  )
}

export default Header