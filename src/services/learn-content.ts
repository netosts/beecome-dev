// // This file simulates a content service that would fetch data from an API
// // In a real application, this would make API calls to your backend

// // Sample categories data
// const categories = [
//   {
//     id: 'getting-started',
//     title: 'Getting Started',
//     description:
//       'Learn the basics of software engineering and set up your development environment.',
//   },
//   {
//     id: 'frontend-development',
//     title: 'Frontend Development',
//     description:
//       'Learn modern frontend development with HTML, CSS, JavaScript, and popular frameworks.',
//   },
//   {
//     id: 'backend-development',
//     title: 'Backend Development',
//     description: 'Learn server-side programming, databases, and API development.',
//   },
//   {
//     id: 'data-structures-algorithms',
//     title: 'Data Structures & Algorithms',
//     description: 'Master fundamental data structures and algorithms for efficient problem-solving.',
//   },
// ]

// // Sample tutorials data
// const tutorials: Record<string, { id: string; title: string; description: string }[]> = {
//   'getting-started': [
//     {
//       id: 'introduction',
//       title: 'Introduction',
//       description: 'An introduction to software engineering and this learning platform.',
//     },
//     {
//       id: 'installation',
//       title: 'Installation & Setup',
//       description: 'Set up your development environment with all the necessary tools.',
//     },
//     {
//       id: 'first-steps',
//       title: 'First Steps',
//       description: 'Your first steps in the world of software engineering.',
//     },
//   ],
//   'frontend-development': [
//     {
//       id: 'html-css-basics',
//       title: 'HTML & CSS Basics',
//       description: 'Learn the fundamentals of HTML and CSS for web development.',
//     },
//     {
//       id: 'javascript-fundamentals',
//       title: 'JavaScript Fundamentals',
//       description: 'Learn the core concepts of JavaScript programming.',
//     },
//     {
//       id: 'responsive-design',
//       title: 'Responsive Design',
//       description: 'Create websites that work well on any device.',
//     },
//   ],
//   'backend-development': [
//     {
//       id: 'intro-to-backend',
//       title: 'Introduction to Backend Development',
//       description: 'An overview of backend development concepts and technologies.',
//     },
//     {
//       id: 'databases',
//       title: 'Database Fundamentals',
//       description: 'Learn about different types of databases and how to use them.',
//     },
//   ],
//   'data-structures-algorithms': [
//     {
//       id: 'intro-to-dsa',
//       title: 'Introduction to Data Structures & Algorithms',
//       description:
//         'Learn why DSA is crucial for software engineers and get an overview of key concepts.',
//     },
//     {
//       id: 'arrays-linked-lists',
//       title: 'Arrays & Linked Lists',
//       description: 'Understanding fundamental data structures: arrays and linked lists.',
//     },
//   ],
// }

// // Sample content data (markdown)
// const content: Record<
//   string,
//   {
//     introduction: string
//     installation: string
//     'first-steps': string
//     'html-css-basics': string
//     'javascript-fundamentals': string
//     'responsive-design': string
//     'intro-to-backend': string
//     databases: string
//   }
// > = {
//   'getting-started': {
//     introduction: `
// # Introduction to Software Engineering

// Welcome to Beecome Dev, your comprehensive resource for becoming a mid-level software engineer. This platform is designed to help you navigate the journey from beginner to professional with structured learning paths and practical resources.

// ## What is Software Engineering?

// Software engineering is the systematic application of engineering approaches to the development of software. It goes beyond just coding to include:

// - **Requirements analysis**: Understanding what the software needs to do
// - **Design**: Planning how the software will be structured
// - **Implementation**: Writing the actual code
// - **Testing**: Ensuring the software works correctly
// - **Maintenance**: Updating and fixing the software over time

// ## Why Structured Learning Matters

// Many developers learn to code through tutorials, bootcamps, or on-the-job training. While these approaches can be effective for getting started, they often leave gaps in knowledge that become apparent as you try to advance in your career.

// Our structured learning paths are designed to:

// 1. **Build a solid foundation**: Ensuring you understand core concepts thoroughly
// 2. **Progress logically**: Each topic builds on previous knowledge
// 3. **Cover blind spots**: Address areas often missed in self-directed learning
// 4. **Emphasize practical skills**: Focus on real-world applications, not just theory
//     `,
//     installation: `
// # Installation & Setup

// Setting up a proper development environment is crucial for efficient and effective software engineering. This guide will walk you through the essential tools and configurations you'll need.

// ## Essential Development Tools

// ### 1. Code Editor or IDE

// A good code editor is the foundation of your development environment. We recommend:

// - **Visual Studio Code**: Lightweight, extensible, and supports nearly all programming languages through extensions
// - **JetBrains IDEs**: Language-specific IDEs like IntelliJ IDEA (Java), WebStorm (JavaScript), PyCharm (Python)
// - **Sublime Text**: Fast and minimalist editor with powerful features

// ### 2. Version Control

// Git is the industry standard for version control:

// 1. Install Git from [git-scm.com](https://git-scm.com/)
// 2. Configure your identity:
//    \`\`\`bash
//    git config --global user.name "Your Name"
//    git config --global user.email "your.email@example.com"
//    \`\`\`
// 3. Create a GitHub account at [github.com](https://github.com/)
//     `,
//     'first-steps': `
// # First Steps in Software Engineering

// Now that you have your development environment set up, let's take your first steps in software engineering. This guide will help you build a foundation and develop good habits from the start.

// ## Understanding the Development Workflow

// Before diving into code, it's important to understand the typical workflow of software development:

// 1. **Planning**: Define what you're building and why
// 2. **Design**: Plan how your software will work and look
// 3. **Implementation**: Write the actual code
// 4. **Testing**: Verify that your code works as expected
// 5. **Deployment**: Make your software available to users
// 6. **Maintenance**: Update and improve your software over time

// As a beginner, you might focus primarily on implementation and testing, but understanding the entire process will help you become a more effective engineer.
//     `,
//   },
//   'frontend-development': {
//     'html-css-basics': `
// # HTML & CSS Basics

// HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundation of web development. HTML provides the structure of a webpage, while CSS controls its appearance. This tutorial will cover the essential concepts you need to know.

// ## HTML Fundamentals

// HTML uses elements to define the structure of a webpage. Each element consists of a start tag, content, and an end tag.

// ### Basic Structure

// Every HTML document follows this basic structure:

// \`\`\`html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document Title</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <!-- Content goes here -->
// </body>
// </html>
// \`\`\`
//     `,
//     'javascript-fundamentals': `
// # JavaScript Fundamentals

// JavaScript is the programming language of the web. It allows you to add interactivity and dynamic behavior to websites. This tutorial covers the fundamental concepts of JavaScript that every developer should know.

// ## Getting Started

// You can include JavaScript in your HTML in three ways:

// 1. **Inline JavaScript**:
// \`\`\`html
// <button onclick="alert('Hello, World!')">Click Me</button>
// \`\`\`

// 2. **Internal JavaScript**:
// \`\`\`html
// <script>
//     // JavaScript code here
//     console.log('Hello, World!');
// </script>
// \`\`\`

// 3. **External JavaScript** (recommended):
// \`\`\`html
// <script src="script.js"></script>
// \`\`\`
//     `,
//     'responsive-design': `
// # Responsive Design

// Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. This tutorial will teach you how to create websites that look good on everything from mobile phones to desktop monitors.

// ## The Viewport Meta Tag

// The viewport meta tag is essential for responsive design. It tells the browser how to control the page's dimensions and scaling:

// \`\`\`html
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// \`\`\`

// This tag ensures that the browser will render the width of the page at the width of its own screen.
//     `,
//   },
//   'backend-development': {
//     'intro-to-backend': `
// # Introduction to Backend Development

// Backend development focuses on server-side programming, databases, APIs, and the architecture that powers web applications. This tutorial provides an overview of key backend concepts and technologies.

// ## What is Backend Development?

// Backend development involves creating and maintaining the server-side of web applications. While frontend development deals with what users see and interact with, backend development handles:

// - **Data processing and storage**
// - **Business logic**
// - **Authentication and authorization**
// - **API development**
// - **Server configuration and deployment**
//     `,
//     databases: `
// # Database Fundamentals

// Databases are organized collections of data stored and accessed electronically. They are essential components of most software applications. This tutorial covers the fundamental concepts of databases and how to work with them.

// ## Types of Databases

// ### Relational Databases

// Relational databases store data in tables with predefined relationships between them. Examples include:

// - MySQL
// - PostgreSQL
// - SQLite
// - Microsoft SQL Server
// - Oracle Database

// ### NoSQL Databases

// NoSQL databases provide mechanisms for storage and retrieval of data that are modeled differently from relational databases. Examples include:

// - MongoDB (document-based)
// - Redis (key-value store)
// - Cassandra (wide-column store)
// - Neo4j (graph database)
//     `,
//   },
//   'data-structures-algorithms': {
//     'intro-to-dsa': `
// # Introduction to Data Structures & Algorithms

// Data Structures and Algorithms (DSA) form the foundation of computer science and software engineering. Understanding DSA is crucial for writing efficient code, solving complex problems, and excelling in technical interviews. This tutorial provides an overview of key concepts and explains why DSA matters.

// ## Why Data Structures and Algorithms Matter

// ### 1. Efficiency and Performance

// Well-designed data structures and algorithms can dramatically improve the performance of your applications. The difference between an efficient and inefficient solution can be the difference between an application that runs in milliseconds versus hours.

// ### 2. Problem-Solving Skills

// DSA teaches you how to approach and solve complex problems systematically. These problem-solving skills are transferable across different programming languages and domains.
//     `,
//     'arrays-linked-lists': `
// # Arrays & Linked Lists

// Arrays and linked lists are two of the most fundamental data structures in computer science. Understanding their characteristics, strengths, and weaknesses is essential for effective programming.

// ## Arrays

// An array is a collection of elements stored at contiguous memory locations. The elements can be accessed using an index.

// ### Characteristics of Arrays

// - **Fixed size** (in many languages)
// - **Contiguous memory allocation**
// - **Random access** (O(1) time complexity)
// - **Efficient for reading, less efficient for insertion/deletion**

// ### Example of an Array

// \`\`\`javascript
// // Creating an array
// const numbers = [1, 2, 3, 4, 5];

// // Accessing elements
// console.log(numbers[0]); // Output: 1
// console.log(numbers[3]); // Output: 4

// // Modifying elements
// numbers[2] = 10;
// console.log(numbers); // Output: [1, 2, 10, 4, 5]
// \`\`\`
//     `,
//   },
// }

// // Service methods
// export default {
//   // Get all categories
//   getCategories() {
//     return Promise.resolve(categories)
//   },

//   // Get tutorials for a specific category
//   getTutorials(categoryId: string) {
//     return Promise.resolve(tutorials[categoryId] || [])
//   },

//   // Get content for a specific tutorial
//   getContent(categoryId: string, tutorialId: string) {
//     return Promise.resolve(content[categoryId]?.[tutorialId] || '# Content not found')
//   },

//   // Get a specific category by ID
//   getCategory(categoryId: string) {
//     return Promise.resolve(categories.find((category) => category.id === categoryId) || null)
//   },

//   // Get a specific tutorial by ID within a category
//   getTutorial(categoryId: string, tutorialId: string) {
//     const categoryTutorials = tutorials[categoryId] || []
//     return Promise.resolve(categoryTutorials.find((tutorial) => tutorial.id === tutorialId) || null)
//   },
// }
