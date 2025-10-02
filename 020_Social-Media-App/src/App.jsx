import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import './index.css'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'john_doe',
      name: 'John Doe',
      content: 'Just learned React and built my first app! So excited! 🚀',
      timestamp: '2 hours ago',
      likes: 15,
      comments: 3
    },
    {
      id: 2,
      username: 'sarah_smith',
      name: 'Sarah Smith',
      content: 'Beautiful day for coding! ☀️ What are you working on today?',
      timestamp: '4 hours ago',
      likes: 8,
      comments: 5
    }
  ])

  const addPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      username: 'current_user',
      name: 'Current User',
      content: content,
      timestamp: 'Just now',
      likes: 0,
      comments: 0
    }
    setPosts([newPost, ...posts])
  }

  const likePost = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ))
  }

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <div className="main-content">
          <CreatePost onAddPost={addPost} />
          <div className="posts-container">
            {posts.map(post => (
              <Post 
                key={post.id} 
                post={post} 
                onLike={likePost}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App