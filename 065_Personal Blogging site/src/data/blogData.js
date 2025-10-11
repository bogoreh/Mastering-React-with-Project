export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    content: `React Hooks have revolutionized the way we write React components. They allow you to use state and other React features without writing a class.

In this post, we'll explore the most commonly used hooks like useState, useEffect, and useContext. We'll see how they can make your code cleaner and more reusable.

The useState hook lets you add state to functional components. It returns a stateful value and a function to update it. This is perfect for managing form inputs, toggle states, and any other piece of state that affects your component's rendering.

The useEffect hook serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes. You can use it to perform side effects in your components, like data fetching, subscriptions, or manually changing the DOM.

By mastering these hooks, you'll be able to write more concise and maintainable React code. The functional approach with hooks has become the standard in modern React development.`,
    author: "John Doe",
    date: "March 15, 2024",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to CSS Grid Layout and how it can transform your web design workflow.",
    content: `CSS Grid Layout is a powerful tool that allows you to create complex, responsive web layouts with ease. Unlike Flexbox, which is one-dimensional, Grid works in two dimensions, making it perfect for overall page layout.

In this comprehensive guide, we'll cover everything from basic grid concepts to advanced techniques. You'll learn how to create responsive layouts without media queries, using features like minmax(), auto-fit, and auto-fill.

One of the most powerful features of CSS Grid is the ability to create responsive layouts without media queries. By using functions like minmax() and properties like auto-fit, you can create layouts that automatically adjust to their container's size.

We'll also explore practical examples like creating a magazine-style layout, a photo gallery, and a dashboard interface. By the end of this guide, you'll be able to create any layout you can imagine with CSS Grid.`,
    author: "Jane Smith",
    date: "March 12, 2024",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    content: `The web development landscape is constantly evolving, with new technologies and approaches emerging every year. In this post, we'll explore the trends that are shaping the future of how we build for the web.

Serverless architecture has gained significant traction, allowing developers to focus on writing code without worrying about infrastructure. Combined with JAMstack principles, it's enabling faster, more secure websites.

Web Assembly (WASM) is another exciting development that allows running code written in multiple languages on the web at near-native speed. This opens up new possibilities for performance-intensive applications.

AI and machine learning are also making their way into web development, with tools that can help with code generation, testing, and optimization. The future looks bright for web developers who are willing to adapt and learn continuously.`,
    author: "Mike Johnson",
    date: "March 10, 2024",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "JavaScript ES2023 Features",
    excerpt: "Discover the new features and improvements in JavaScript ES2023 and how to use them in your projects.",
    content: `JavaScript continues to evolve with each new ECMAScript specification. ES2023 brings several useful features that make JavaScript development more enjoyable and efficient.

One of the most anticipated features is the array find from last method, which allows you to search arrays from the end. This is particularly useful when you need the last occurrence of an element that matches your criteria.

The change array by copy proposal introduces methods that return new arrays instead of modifying the original. This includes methods like toReversed(), toSorted(), and toSpliced(), which align better with functional programming principles.

Other improvements include better support for shebangs in ECMAScript modules and various performance optimizations. Staying up-to-date with these new features helps you write cleaner, more modern JavaScript code.`,
    author: "Sarah Wilson",
    date: "March 8, 2024",
    category: "JavaScript",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Building RESTful APIs with Node.js",
    excerpt: "Learn how to create robust and scalable RESTful APIs using Node.js and Express framework.",
    content: `Building RESTful APIs is a fundamental skill for modern web developers. In this tutorial, we'll walk through creating a complete REST API using Node.js and Express.

We'll start by setting up our project structure and installing necessary dependencies. Then we'll implement CRUD operations (Create, Read, Update, Delete) for a sample resource, following REST conventions.

Error handling is crucial for any API. We'll implement proper error handling middleware and learn how to return appropriate HTTP status codes. We'll also cover input validation and sanitization to ensure data integrity.

Authentication and authorization are essential for protecting your API. We'll implement JWT-based authentication and learn how to protect routes. Finally, we'll discuss API documentation using OpenAPI/Swagger and testing strategies to ensure your API works as expected.`,
    author: "Alex Chen",
    date: "March 5, 2024",
    category: "Node.js",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    excerpt: "Why TypeScript is becoming essential for modern web development and how to get started.",
    content: `TypeScript has gained tremendous popularity in the web development community, and for good reason. It's a superset of JavaScript that adds static typing, making your code more predictable and easier to debug.

In this introduction, we'll explore the key benefits of TypeScript. Static typing helps catch errors at compile time rather than runtime, which is especially valuable in large codebases. The enhanced IDE support with better autocompletion and refactoring tools is another major advantage.

We'll start with basic types and gradually move to more advanced concepts like interfaces, generics, and type inference. You'll learn how TypeScript's structural type system differs from nominal typing and how this flexibility can be both powerful and challenging.

By the end of this guide, you'll understand why many teams are adopting TypeScript and how it can improve your development workflow. We'll also discuss migration strategies for existing JavaScript projects.`,
    author: "Emily Davis",
    date: "March 3, 2024",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=500&h=300&fit=crop"
  }
]