function CTA() {
  return (
    <section id="cta" className="section" style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Transform Your Work?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.125rem', opacity: 0.9 }}>
            Join our beta program and be among the first to experience the future of team collaboration.
          </p>
          <a href="#survey" className="btn" style={{ background: 'white', color: 'var(--primary-color)' }}>
            Join Beta Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA