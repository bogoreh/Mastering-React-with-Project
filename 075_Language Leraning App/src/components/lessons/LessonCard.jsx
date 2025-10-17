import React from 'react'
import ProgressBar from '../common/ProgressBar'
import Button from '../common/Button'

const LessonCard = ({ lesson, onStart }) => {
  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: '#10b981',
      intermediate: '#f59e0b',
      advanced: '#ef4444'
    }
    return colors[difficulty] || '#6b7280'
  }

  return (
    <div className="lesson-card">
      <div className="lesson-header">
        <span 
          className="lesson-difficulty"
          style={{ backgroundColor: getDifficultyColor(lesson.difficulty) }}
        >
          {lesson.difficulty}
        </span>
        <span className="lesson-duration">⏱️ {lesson.duration}</span>
      </div>
      
      <h3 className="lesson-title">{lesson.title}</h3>
      <p className="lesson-description">{lesson.description}</p>
      
      <div className="lesson-progress">
        <ProgressBar progress={lesson.progress} color="#4f46e5" />
      </div>
      
      <div className="lesson-footer">
        <span className="lesson-words">{lesson.words} words</span>
        <Button 
          variant={lesson.progress === 100 ? 'secondary' : 'primary'}
          onClick={() => onStart(lesson.id)}
        >
          {lesson.progress === 100 ? 'Review' : 'Start'}
        </Button>
      </div>
    </div>
  )
}

export default LessonCard