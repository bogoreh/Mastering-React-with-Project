import React from 'react'

function Sidebar({ isOpen }) {
  const menuItems = [
    { icon: '🏠', text: 'Home' },
    { icon: '🔥', text: 'Trending' },
    { icon: '📚', text: 'Subscriptions' },
    { icon: '📚', text: 'Library' },
    { icon: '📜', text: 'History' },
    { icon: '⏰', text: 'Watch Later' },
    { icon: '👍', text: 'Liked Videos' },
  ]

  if (!isOpen) return null

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        {menuItems.map((item, index) => (
          <div key={index} className="sidebar-item">
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.text}</span>
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar