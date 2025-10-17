import React, { useState } from 'react'
import StatsCard from '../components/dashboard/StatsCard'
import LanguageSelector from '../components/dashboard/LanguageSelector'
import ProgressBar from '../components/common/ProgressBar'

const Dashboard = ({ progress }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es')

  const stats = [
    {
      icon: '🔥',
      title: 'Current Streak',
      value: `${progress.streak} days`,
      subtitle: 'Keep going!',
      color: '#f59e0b'
    },
    {
      icon: '⭐',
      title: 'Total Points',
      value: progress.points,
      subtitle: 'Language master',
      color: '#10b981'
    },
    {
      icon: '📈',
      title: 'Level',
      value: progress.level,
      subtitle: 'Intermediate',
      color: '#4f46e5'
    },
    {
      icon: '✅',
      title: 'Lessons Completed',
      value: progress.completedLessons,
      subtitle: 'Great progress!',
      color: '#ef4444'
    }
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome back! 👋</h2>
        <p>Continue your language learning journey</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="dashboard-content">
        <div className="content-section">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        </div>

        <div className="content-section">
          <h3>Daily Goal</h3>
          <div className="goal-card">
            <div className="goal-header">
              <span>5/7 lessons this week</span>
              <span>71%</span>
            </div>
            <ProgressBar progress={71} color="#10b981" />
            <p className="goal-motivation">
              Complete 2 more lessons to reach your weekly goal! 🎯
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard