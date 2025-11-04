import './Header.css'

function Header() {
  const headerStyles = {
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e5e7eb',
      zIndex: 1000
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0'
    },
    logo: {
      background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      alignItems: 'center'
    },
    navLink: {
      textDecoration: 'none',
      color: 'var(--text-dark)',
      fontWeight: '500',
      transition: 'color 0.3s ease'
    },
    navLinkHover: {
      color: 'var(--primary-color)'
    }
  }

  return (
    <header style={headerStyles.header}>
      <div className="container">
        <nav style={headerStyles.nav}>
          <div className="logo">
            <h2 style={headerStyles.logo}>LaunchPad</h2>
          </div>
          <ul style={headerStyles.navLinks}>
            <li><a href="#features" style={headerStyles.navLink}>Features</a></li>
            <li><a href="#survey" style={headerStyles.navLink}>Survey</a></li>
            <li><a href="#cta" className="btn btn-primary">Get Early Access</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header