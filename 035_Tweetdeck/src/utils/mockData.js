export const generateMockTweets = (count = 10) => {
  const users = [
    { name: 'John Doe', handle: 'johndoe', avatar: '👨‍💻' },
    { name: 'Sarah Wilson', handle: 'sarahw', avatar: '👩‍🎨' },
    { name: 'Mike Chen', handle: 'mikechen', avatar: '👨‍🍳' },
    { name: 'Tech News', handle: 'technews', avatar: '📱' },
    { name: 'React', handle: 'reactjs', avatar: '⚛️' }
  ]

  const tweets = []
  
  for (let i = 0; i < count; i++) {
    const user = users[Math.floor(Math.random() * users.length)]
    const timestamp = Date.now() - Math.floor(Math.random() * 1000000000)
    
    tweets.push({
      id: `tweet-${i}-${Date.now()}`,
      user: user,
      content: `This is sample tweet content #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      timestamp: timestamp,
      likes: Math.floor(Math.random() * 1000),
      retweets: Math.floor(Math.random() * 500),
      replies: Math.floor(Math.random() * 200),
      isLiked: Math.random() > 0.7,
      isRetweeted: Math.random() > 0.8
    })
  }
  
  return tweets.sort((a, b) => b.timestamp - a.timestamp)
}

export const defaultColumns = [
  {
    id: 'home',
    title: 'Home',
    type: 'timeline',
    tweets: generateMockTweets(15)
  },
  {
    id: 'tech',
    title: 'Technology',
    type: 'search',
    query: '#technology',
    tweets: generateMockTweets(12)
  },
  {
    id: 'react',
    title: 'React',
    type: 'search',
    query: '#reactjs',
    tweets: generateMockTweets(8)
  }
]