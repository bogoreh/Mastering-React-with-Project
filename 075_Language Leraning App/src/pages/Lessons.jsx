import React, { useState } from 'react'
import LessonCard from '../components/lessons/LessonCard'
import Quiz from '../components/lessons/Quiz'
import { lessons } from '../data/lessons'

const Lessons = () => {
  const [currentView, setCurrentView] = useState('list')
  const [selectedLesson, setSelectedLesson] = useState(null)

  const handleStartLesson = (lessonId) => {
    const lesson = lessons.find(l => l.id === lessonId)
    setSelectedLesson(lesson)
    setCurrentView('quiz')
  }

  const handleQuizComplete = (score) => {
    // Handle quiz completion logic here
    console.log(`Quiz completed with score: ${score}`)
    setCurrentView('list')
    setSelectedLesson(null)
  }

  if (currentView === 'quiz' && selectedLesson) {
    return (
      <div className="lessons-page">
        <div className="page-header">
          <button 
            className="back-button"
            onClick={() => setCurrentView('list')}
          >
            ← Back to Lessons
          </button>
          <h2>{selectedLesson.title}</h2>
        </div>
        <Quiz 
          questions={selectedLesson.questions}
          onComplete={handleQuizComplete}
        />
      </div>
    )
  }

  return (
    <div className="lessons-page">
      <div className="page-header">
        <h2>Lessons 📚</h2>
        <p>Choose a lesson to start learning</p>
      </div>

      <div className="lessons-grid">
        {lessons.map(lesson => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onStart={handleStartLesson}
          />
        ))}
      </div>
    </div>
  )
}

export default Lessons