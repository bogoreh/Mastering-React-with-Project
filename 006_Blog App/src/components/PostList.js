import React from 'react';
import Post from './Post';
import '../styles/PostList.css';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      <div className="container">
        <h2>Latest Posts</h2>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;