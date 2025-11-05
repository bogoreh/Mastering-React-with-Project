import Card, { CardContent } from '../components/ui/Card'

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Hackathon App</h1>
        <p>Learn more about our application and its features</p>
      </div>

      <div className="grid grid-cols-1">
        <Card>
          <CardContent>
            <h2>Project Overview</h2>
            <p>
              This is a modern React application built with Vite, designed to demonstrate 
              excellent project structure, clean code practices, and beautiful UI design.
            </p>
            
            <h3>Features</h3>
            <ul>
              <li>⚡ Fast development with Vite</li>
              <li>🎨 Beautiful, responsive design</li>
              <li>📱 Mobile-friendly interface</li>
              <li>💾 Local storage persistence</li>
              <li>🔧 Component-based architecture</li>
              <li>🎯 Task management functionality</li>
            </ul>

            <h3>Technology Stack</h3>
            <div className="tech-stack">
              <span className="tech-badge">React 18</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">React Router</span>
              <span className="tech-badge">CSS3</span>
              <span className="tech-badge">Local Storage</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About