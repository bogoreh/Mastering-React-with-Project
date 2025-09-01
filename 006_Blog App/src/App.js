import React from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import Footer from './components/Footer';
import './styles/App.css';

// Sample blog posts data
const samplePosts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "May 15, 2023",
    content: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI when data changes."
  },
  {
    id: 2,
    title: "CSS Tips for Modern Web Development",
    date: "June 2, 2023",
    content: "CSS has evolved significantly over the years. With features like Flexbox and Grid, it's easier than ever to create responsive and attractive layouts."
  },
  {
    id: 3,
    title: "Introduction to React Hooks",
    date: "June 10, 2023",
    content: "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This post covers the basics of useState and useEffect."
  }
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <PostList posts={samplePosts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;