import '../../styles/components/card.css'

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className = '' }) => (
  <div className={`card-header ${className}`}>{children}</div>
)

export const CardContent = ({ children, className = '' }) => (
  <div className={`card-content ${className}`}>{children}</div>
)

export const CardFooter = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>{children}</div>
)

export default Card