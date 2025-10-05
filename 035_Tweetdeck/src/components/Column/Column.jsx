import { useState } from 'react'
import ColumnHeader from './ColumnHeader'
import Tweet from '../Tweet/Tweet'
import './Column.css'

const Column = ({ column, onRemove, onAddTweet }) => {
  const [tweets, setTweets] = useState(column.tweets)

  const handleAddTweet = () => {
    const newTweet = {
      id: `tweet-${Date.now()}`,
      user: { name: 'You', handle: 'yourhandle', avatar: '👤' },
      content: 'This is a new tweet!',
      timestamp: Date.now(),
      likes: 0,
      retweets: 0,
      replies: 0,
      isLiked: false,
      isRetweeted: false
    }
    
    setTweets(prev => [newTweet, ...prev])
    onAddTweet(column.id, newTweet)
  }

  return (
    <div className="column">
      <ColumnHeader 
        title={column.title} 
        type={column.type}
        onRemove={() => onRemove(column.id)}
        onAddTweet={handleAddTweet}
      />
      
      <div className="column-content">
        {tweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Column