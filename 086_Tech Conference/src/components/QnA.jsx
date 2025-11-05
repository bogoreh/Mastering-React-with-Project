import React, { useState } from 'react'

const QnA = () => {
  const [questions, setQuestions] = useState([
    { 
      id: 1, 
      question: 'Will the sessions be recorded?', 
      answer: 'Yes, all sessions will be recorded and available for attendees.',
      user: 'Attendee1',
      time: '9:30 AM'
    }
  ])
  const [newQuestion, setNewQuestion] = useState('')

  const handleSubmitQuestion = (e) => {
    e.preventDefault()
    if (newQuestion.trim()) {
      const question = {
        id: questions.length + 1,
        question: newQuestion,
        answer: '',
        user: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setQuestions([...questions, question])
      setNewQuestion('')
    }
  }

  return (
    <div className="qna">
      <form onSubmit={handleSubmitQuestion} className="question-form">
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="question-input"
        />
        <button type="submit" className="submit-button">Ask</button>
      </form>

      <div className="questions-list">
        {questions.map(q => (
          <div key={q.id} className="question-card">
            <div className="question-header">
              <strong>{q.user}</strong>
              <span className="question-time">{q.time}</span>
            </div>
            <div className="question-text">{q.question}</div>
            {q.answer && (
              <div className="answer">
                <strong>Answer:</strong> {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QnA