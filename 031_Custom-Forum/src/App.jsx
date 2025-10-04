import React, { useState } from 'react'
import Layout from './components/Layout/Layout'
import ForumHeader from './components/Forum/ForumHeader'
import PostCard from './components/Forum/PostCard'
import PostForm from './components/Forum/PostForm'
import { initialPosts } from './data'

function App() {
  const [posts, setPosts] = useState(initialPosts)
  const [showPostForm, setShowPostForm] = useState(false)

  const addPost = (newPost) => {
    const post = {
      id: Date.now(),
      ...newPost,
      createdAt: new Date().toISOString(),
      comments: []
    }
    setPosts([post, ...posts])
    setShowPostForm(false)
  }

  const addComment = (postId, comment) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? {
            ...post,
            comments: [
              ...post.comments,
              {
                id: Date.now(),
                ...comment,
                createdAt: new Date().toISOString()
              }
            ]
          }
        : post
    ))
  }

  return (
    <Layout>
      <div className="forum-container">
        <ForumHeader 
          postCount={posts.length} 
          onNewPost={() => setShowPostForm(true)}
        />
        
        <div className="posts-grid">
          {posts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              onAddComment={addComment}
            />
          ))}
        </div>

        {showPostForm && (
          <PostForm 
            onSubmit={addPost}
            onCancel={() => setShowPostForm(false)}
          />
        )}
      </div>
    </Layout>
  )
}

export default App