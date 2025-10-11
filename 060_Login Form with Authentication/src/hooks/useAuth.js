import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    // Simulate authentication - in real app, this would be an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password') {
          const userData = {
            id: 1,
            email: email,
            name: 'John Doe',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
          }
          setUser(userData)
          localStorage.setItem('user', JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error('Invalid email or password'))
        }
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  // Check for existing session on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  return { user, login, logout }
}