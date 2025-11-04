function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Revolutionize Your Workflow
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
            The next-generation productivity tool that helps teams collaborate smarter, 
            work faster, and achieve more together.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#survey" className="btn btn-primary">Join Beta Program</a>
            <a href="#features" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero