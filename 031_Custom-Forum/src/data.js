export const initialPosts = [
  {
    id: 1,
    title: "Welcome to our Forum!",
    content: "This is the first post in our amazing community forum. Feel free to introduce yourself and start discussions!",
    author: "Admin",
    category: "Announcements",
    createdAt: "2024-01-15T10:00:00Z",
    upvotes: 15,
    comments: [
      {
        id: 1,
        author: "John Doe",
        content: "Great to be here! Looking forward to engaging discussions.",
        createdAt: "2024-01-15T11:30:00Z"
      },
      {
        id: 2,
        author: "Jane Smith",
        content: "Awesome forum design! Very user-friendly.",
        createdAt: "2024-01-15T12:15:00Z"
      }
    ]
  },
  {
    id: 2,
    title: "Best practices for React development",
    content: "Let's discuss some best practices and patterns for modern React development. What are your favorite tips?",
    author: "ReactDev",
    category: "Development",
    createdAt: "2024-01-14T14:20:00Z",
    upvotes: 8,
    comments: [
      {
        id: 3,
        author: "CodeMaster",
        content: "Custom hooks are game-changers for code reuse!",
        createdAt: "2024-01-14T15:45:00Z"
      }
    ]
  }
]