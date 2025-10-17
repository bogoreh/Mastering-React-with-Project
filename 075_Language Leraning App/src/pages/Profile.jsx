import React from 'react'
import ProgressBar from '../components/common/ProgressBar'

const Profile = ({ progress }) => {
  return (
    <div className="profile-page">
      <div className="page-header">
        <h2>Your Profile 👤</h2>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">👨‍💻</div>
            <div className="profile-info">
              <h3>Language Learner</h3>
              <p>Learning since 2024</p>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-label">Current Level</span>
              <span className="stat-value">Level {progress.level}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total Points</span>
              <span className="stat-value">{progress.points}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Streak</span>
              <span className="stat-value">{progress.streak} days</span>
            </div>
          </div>
        </div>

        <div className="achievements-section">
          <h3>Achievements 🏆</h3>
          <div className="achievements-grid">
            <div className="achievement-card completed">
              <span className="achievement-icon">🔥</span>
              <span className="achievement-title">5 Day Streak</span>
            </div>
            <div className="achievement-card completed">
              <span className="achievement-icon">📚</span>
              <span className="achievement-title">10 Lessons</span>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon">⚡</span>
              <span className="achievement-title">Fast Learner</span>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon">🌟</span>
              <span className="achievement-title">Perfect Score</span>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <h3>Overall Progress</h3>
          <div className="progress-item">
            <span>Vocabulary</span>
            <ProgressBar progress={65} color="#4f46e5" />
          </div>
          <div className="progress-item">
            <span>Grammar</span>
            <ProgressBar progress={45} color="#10b981" />
          </div>
          <div className="progress-item">
            <span>Listening</span>
            <ProgressBar progress={30} color="#f59e0b" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile