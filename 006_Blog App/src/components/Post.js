import React from 'react';
import '../styles/Post.css';

const Post = ({ post }) => {
  return (
    <article className="post">
      <h3>{post.title}</h3>
      <p className="post-date">{post.date}</p>
      <p>{post.content}</p>
    </article>
  );
};

export default Post;