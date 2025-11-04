import { useState } from 'react'

export const useSurvey = () => {
  const [surveyData, setSurveyData] = useState({
    email: '',
    role: '',
    teamSize: '',
    painPoints: [],
    features: [],
    feedback: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateSurveyData = (field, value) => {
    setSurveyData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const toggleArrayField = (field, value) => {
    setSurveyData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const submitSurvey = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Save to localStorage for demo purposes
      const existingSurveys = JSON.parse(localStorage.getItem('surveySubmissions') || '[]')
      localStorage.setItem('surveySubmissions', JSON.stringify([
        ...existingSurveys,
        { ...surveyData, submittedAt: new Date().toISOString() }
      ]))
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting survey:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    surveyData,
    updateSurveyData,
    toggleArrayField,
    submitSurvey,
    isSubmitting,
    isSubmitted
  }
}