import { useState } from 'react'

export const useComments = () => {
  const [comments, setComments] = useState([])

  const addComment = (comment) => {
    setComments(prev => [...prev, { text: comment, id: Date.now() }])
  }

  const clearComments = () => {
    setComments([])
  }

  return {
    comments,
    addComment,
    clearComments
  }
}