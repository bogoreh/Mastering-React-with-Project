import { useSurvey } from '../../hooks/useSurvey'
import { useNavigate } from 'react-router-dom'

function Survey() {
  const {
    surveyData,
    updateSurveyData,
    toggleArrayField,
    submitSurvey,
    isSubmitting
  } = useSurvey()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await submitSurvey()
    navigate('/thank-you')
  }

  const painPointOptions = [
    'Communication issues',
    'Tool fragmentation',
    'Slow decision making',
    'Lack of visibility',
    'Inefficient workflows'
  ]

  const featureOptions = [
    'Real-time collaboration',
    'AI assistance',
    'Advanced analytics',
    'Integration ecosystem',
    'Mobile app'
  ]

  return (
    <section id="survey" className="section">
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Help Us Build Better</h2>
            <p style={{ color: 'var(--text-light)' }}>
              Share your thoughts and get early access to our beta program
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Email Address *
              </label>
              <input
                type="email"
                required
                value={surveyData.email}
                onChange={(e) => updateSurveyData('email', e.target.value)}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
                placeholder="your@email.com"
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                What's your role?
              </label>
              <select
                value={surveyData.role}
                onChange={(e) => updateSurveyData('role', e.target.value)}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
              >
                <option value="">Select your role</option>
                <option value="founder">Founder/Executive</option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="marketer">Marketer</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Team Size
              </label>
              <select
                value={surveyData.teamSize}
                onChange={(e) => updateSurveyData('teamSize', e.target.value)}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
              >
                <option value="">Select team size</option>
                <option value="1-10">1-10 people</option>
                <option value="11-50">11-50 people</option>
                <option value="51-200">51-200 people</option>
                <option value="201+">201+ people</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                What are your biggest challenges? (Select all that apply)
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {painPointOptions.map(painPoint => (
                  <label key={painPoint} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="checkbox"
                      checked={surveyData.painPoints.includes(painPoint)}
                      onChange={() => toggleArrayField('painPoints', painPoint)}
                    />
                    {painPoint}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Which features interest you most? (Select all that apply)
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {featureOptions.map(feature => (
                  <label key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="checkbox"
                      checked={surveyData.features.includes(feature)}
                      onChange={() => toggleArrayField('features', feature)}
                    />
                    {feature}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Additional feedback or suggestions
              </label>
              <textarea
                value={surveyData.feedback}
                onChange={(e) => updateSurveyData('feedback', e.target.value)}
                rows="4"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
                placeholder="What would make this product perfect for your needs?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit & Get Early Access'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Survey