import { useState, useEffect } from 'react'

// Mock data - in a real app, this would come from an API
const mockEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Annual technology conference featuring the latest innovations in AI, Web Development, and Cloud Computing.",
    date: "2024-02-15T09:00:00",
    location: "Convention Center, Downtown",
    category: "technology",
    type: "conference",
    price: 99,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Jazz Night Live",
    description: "An evening of smooth jazz performances by local and international artists.",
    date: "2024-01-20T19:00:00",
    location: "Blue Note Jazz Club",
    category: "music",
    type: "concert",
    price: 45,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    description: "Watch promising startups pitch their ideas to a panel of investors.",
    date: "2024-03-10T14:00:00",
    location: "Innovation Hub",
    category: "business",
    type: "competition",
    price: 0,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Yoga & Mindfulness Workshop",
    description: "Beginner-friendly yoga session followed by mindfulness meditation.",
    date: "2024-01-25T08:00:00",
    location: "Community Wellness Center",
    category: "health",
    type: "workshop",
    price: 25,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Food & Wine Festival",
    description: "Sample gourmet foods and fine wines from local vendors and international wineries.",
    date: "2024-04-05T11:00:00",
    location: "City Park",
    category: "food",
    type: "festival",
    price: 60,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Charity Run 5K",
    description: "Annual 5K run to raise funds for local children's hospital.",
    date: "2024-02-28T07:00:00",
    location: "Riverside Park",
    category: "sports",
    type: "sports",
    price: 30,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=250&fit=crop"
  }
]

export const useEvents = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setEvents(mockEvents)
      } catch (err) {
        setError('Failed to load events')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return { events, loading, error }
}