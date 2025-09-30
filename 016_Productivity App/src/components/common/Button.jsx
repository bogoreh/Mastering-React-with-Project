function Button({ children, onClick, active = false }) {
  return (
    <button 
      className={`btn ${active ? 'btn-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button