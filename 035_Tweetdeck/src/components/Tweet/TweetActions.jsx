import './TweetActions.css'

const TweetActions = ({ tweet }) => {
  return (
    <div className="tweet-actions">
      <button className={`action-btn reply-btn ${tweet.replies > 0 ? 'has-count' : ''}`}>
        <span className="action-icon">💬</span>
        {tweet.replies > 0 && (
          <span className="action-count">{tweet.replies}</span>
        )}
      </button>
      
      <button className={`action-btn retweet-btn ${tweet.isRetweeted ? 'active' : ''} ${tweet.retweets > 0 ? 'has-count' : ''}`}>
        <span className="action-icon">🔄</span>
        {tweet.retweets > 0 && (
          <span className="action-count">{tweet.retweets}</span>
        )}
      </button>
      
      <button className={`action-btn like-btn ${tweet.isLiked ? 'active' : ''} ${tweet.likes > 0 ? 'has-count' : ''}`}>
        <span className="action-icon">❤️</span>
        {tweet.likes > 0 && (
          <span className="action-count">{tweet.likes}</span>
        )}
      </button>
      
      <button className="action-btn share-btn">
        <span className="action-icon">📤</span>
      </button>
    </div>
  )
}

export default TweetActions