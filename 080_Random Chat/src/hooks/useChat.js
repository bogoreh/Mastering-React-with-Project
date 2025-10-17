import { useState, useEffect, useCallback } from 'react'

const PARTNERS = ['Alex', 'Taylor', 'Jordan', 'Casey', 'Riley', 'Avery']
const MESSAGES = [
  "Hello there! 👋",
  "How's your day going?",
  "Nice to meet you!",
  "What do you like to do for fun?",
  "The weather is great today!",
  "Have you tried any new hobbies lately?"
]

export const useChat = () => {
  const [messages, setMessages] = useState([])
  const [isConnected, setIsConnected] = useState(false)
  const [currentPartner, setCurrentPartner] = useState('')

  const generateTimestamp = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const startChat = useCallback(() => {
    setIsConnected(true)
    const randomPartner = PARTNERS[Math.floor(Math.random() * PARTNERS.length)]
    setCurrentPartner(randomPartner)
    
    // Simulate partner joining
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: `${randomPartner} joined the chat`,
        sender: 'System',
        timestamp: generateTimestamp()
      }])
    }, 500)
    
    // Simulate first message from partner
    setTimeout(() => {
      const randomMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
      setMessages(prev => [...prev, {
        text: randomMessage,
        sender: randomPartner,
        timestamp: generateTimestamp()
      }])
    }, 1000)
  }, [])

  const endChat = useCallback(() => {
    if (isConnected) {
      setMessages(prev => [...prev, {
        text: `${currentPartner} left the chat`,
        sender: 'System',
        timestamp: generateTimestamp()
      }])
      setIsConnected(false)
      setCurrentPartner('')
    }
  }, [isConnected, currentPartner])

  const sendMessage = useCallback((text) => {
    const newMessage = {
      text,
      sender: 'You',
      timestamp: generateTimestamp()
    }
    setMessages(prev => [...prev, newMessage])

    // Simulate partner response
    if (isConnected) {
      setTimeout(() => {
        const randomResponse = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
        setMessages(prev => [...prev, {
          text: randomResponse,
          sender: currentPartner,
          timestamp: generateTimestamp()
        }])
      }, 1000 + Math.random() * 2000)
    }
  }, [isConnected, currentPartner])

  return {
    messages,
    isConnected,
    currentPartner,
    sendMessage,
    startChat,
    endChat
  }
}