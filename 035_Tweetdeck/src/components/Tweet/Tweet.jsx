import TweetActions from './TweetActions'
import './Tweet.css'

const Tweet = ({ tweet }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date
    
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    
    if (minutes < 60) return `${minutes}m`
    if (hours < 24) return `${hours}h`
    return `${days}d`
  }

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        {tweet.user.avatar}
      </div>
      
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="tweet-author">{tweet.user.name}</span>
          <span className="tweet-handle">@{tweet.user.handle}</span>
          <span className="tweet-time">· {formatTime(tweet.timestamp)}</span>
        </div>
        
        <div className="tweet-text">
          {tweet.content}
        </div>
        
        <TweetActions tweet={tweet} />
      </div>
    </div>
  )
}

export default Tweet