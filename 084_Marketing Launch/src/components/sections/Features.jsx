import { features } from '../../data/features'

function Features() {
  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Powerful Features</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>
            Designed to boost your team's productivity and collaboration
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map(feature => (
            <div key={feature.id} style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-light)' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features