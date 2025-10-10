import { useState, useEffect } from 'react'
import RankingsTable from './components/RankingsTable'
import UserCard from './components/UserCard'
import './index.css'

function App() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  // Sample data - in real app, this would come from an API
  useEffect(() => {
    const sampleUsers = [
      {
        id: 1,
        username: 'travel_wanderer',
        followers: 15420,
        likes: 2450,
        comments: 189,
        profilePic: '👩‍💼'
      },
      {
        id: 2,
        username: 'foodie_adventures',
        followers: 8920,
        likes: 1560,
        comments: 95,
        profilePic: '👨‍🍳'
      },
      {
        id: 3,
        username: 'fitness_guru',
        followers: 23450,
        likes: 3200,
        comments: 210,
        profilePic: '💪'
      },
      {
        id: 4,
        username: 'tech_reviews',
        followers: 18760,
        likes: 890,
        comments: 45,
        profilePic: '📱'
      },
      {
        id: 5,
        username: 'art_daily',
        followers: 5670,
        likes: 1230,
        comments: 78,
        profilePic: '🎨'
      },
      {
        id: 6,
        username: 'fashion_trends',
        followers: 31200,
        likes: 2800,
        comments: 156,
        profilePic: '👗'
      }
    ]

    // Calculate engagement rate for each user
    const usersWithEngagement = sampleUsers.map(user => ({
      ...user,
      engagementRate: calculateEngagementRate(user.likes, user.comments, user.followers)
    }))

    // Sort by engagement rate (highest first)
    const sortedUsers = usersWithEngagement.sort((a, b) => b.engagementRate - a.engagementRate)
    
    // Add ranking
    const rankedUsers = sortedUsers.map((user, index) => ({
      ...user,
      rank: index + 1
    }))

    setUsers(rankedUsers)
  }, [])

  const calculateEngagementRate = (likes, comments, followers) => {
    const totalEngagement = likes + comments
    return ((totalEngagement / followers) * 100).toFixed(2)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📊 Instagram Rankings</h1>
        <p>Top creators based on engagement rate</p>
      </header>

      <div className="app-content">
        <div className="rankings-section">
          <RankingsTable 
            users={users} 
            onUserSelect={setSelectedUser}
          />
        </div>
        
        {selectedUser && (
          <div className="user-detail-section">
            <UserCard 
              user={selectedUser} 
              onClose={() => setSelectedUser(null)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App