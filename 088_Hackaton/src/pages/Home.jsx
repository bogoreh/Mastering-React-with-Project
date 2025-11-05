import { Link } from 'react-router-dom'
import Card, { CardContent } from '../components/ui/Card'
import Button from '../components/common/Button'

const Home = () => {
  const features = [
    {
      icon: '✅',
      title: 'Task Management',
      description: 'Create, organize, and track your tasks efficiently.'
    },
    {
      icon: '⚡',
      title: 'Fast & Responsive',
      description: 'Built with Vite for lightning-fast development and performance.'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Clean, modern design with excellent user experience.'
    }
  ]

  return (
    <div className="home-page">
      <section className="hero text-center mb-4">
        <h1>Welcome to Hackathon App</h1>
        <p className="text-lg">
          A modern, fast, and beautiful React application built with Vite. 
          Manage your tasks and stay organized with our intuitive interface.
        </p>
        <div className="hero-actions">
          <Link to="/tasks">
            <Button size="large" variant="primary">
              Get Started
            </Button>
          </Link>
          <Link to="/about">
            <Button size="large" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2 className="text-center">Why Choose Our App?</h2>
        <div className="grid grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <CardContent>
                <div className="feature-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home