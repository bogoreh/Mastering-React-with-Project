import Button from './Button'

function Header({ currentPage, onPageChange }) {
  return (
    <header className="header">
      <h1>Productivity App</h1>
      <nav className="nav">
        <Button 
          active={currentPage === 'home'} 
          onClick={() => onPageChange('home')}
        >
          Home
        </Button>
        <Button 
          active={currentPage === 'tasks'} 
          onClick={() => onPageChange('tasks')}
        >
          Tasks
        </Button>
        <Button 
          active={currentPage === 'notes'} 
          onClick={() => onPageChange('notes')}
        >
          Notes
        </Button>
      </nav>
    </header>
  )
}

export default Header