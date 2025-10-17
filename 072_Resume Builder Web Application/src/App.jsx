import React, { useState } from 'react'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'
import './styles/App.css'

function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      summary: ''
    },
    education: [],
    experience: [],
    skills: []
  })

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Resume Builder</h1>
        <p>Create your professional resume in minutes</p>
      </header>
      
      <div className="app-container">
        <ResumeForm 
          resumeData={resumeData} 
          updateResumeData={updateResumeData} 
        />
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  )
}

export default App