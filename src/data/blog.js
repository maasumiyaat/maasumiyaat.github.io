// ============================================================
// BLOG DATA
// To add a new post: copy one object, fill in details.
// content: array of { type: 'h2'|'p'|'code'|'pre'|'ul'|'blockquote'|'hr', value, language }
// For external posts: set local: false, content: []
// ============================================================

export const blogPosts = [
  {
    id: 'rest-apis-nodejs',
    slug: 'rest-apis-nodejs',
    title: 'Building REST APIs with Node.js & Express',
    subtitle: 'A practical walkthrough on designing clean, production-ready REST APIs — covering routing, middleware, error handling, validation, and Postman testing.',
    excerpt: 'A practical walkthrough on designing clean, production-ready REST APIs — covering routing, middleware, error handling, and Postman testing.',
    category: 'Backend',
    date: 'Jan 15, 2025',
    readTime: '5 min',
    tags: ['Node.js', 'Express', 'REST API', 'Backend', 'JavaScript'],
    featured: true,
    local: true,
    externalLinks: [
      { label: 'Read on Medium', href: 'https://omarfaruk-k.medium.com/' },
      { label: 'Read on dev.to', href: 'https://dev.to/omarfaruk-k' },
    ],
    content: [
      { type: 'h2', value: 'Why REST APIs still matter' },
      { type: 'p', value: "REST APIs are the backbone of almost every modern web and mobile application. Whether you're building a backend for a React frontend, a Flutter mobile app, or integrating with third-party services, you'll be writing and consuming REST APIs constantly. Getting the fundamentals right from the start saves a lot of pain later." },
      { type: 'p', value: "In this post I'll walk through building a clean, production-ready API with Node.js and Express — the stack I use most often in my own projects." },

      { type: 'h2', value: 'Project setup' },
      { type: 'p', value: 'Start by initialising a new Node.js project and installing the core dependencies:' },
      { type: 'pre', value: `mkdir my-api && cd my-api\nnpm init -y\nnpm install express dotenv\nnpm install --save-dev nodemon` },
      { type: 'p', value: 'Create an index.js entry point. The structure I use for most projects looks like this:' },
      { type: 'pre', value: `my-api/\n├── src/\n│   ├── routes/\n│   │   └── users.js\n│   ├── controllers/\n│   │   └── userController.js\n│   ├── middleware/\n│   │   └── errorHandler.js\n│   └── app.js\n├── .env\n└── index.js` },

      { type: 'h2', value: 'Routing and controllers' },
      { type: 'p', value: 'Separating routes from controllers keeps your code clean and testable. The route file defines what the endpoint is; the controller defines what happens when it\'s hit.' },
      { type: 'pre', value: `// src/routes/users.js\nconst express = require('express');\nconst router  = express.Router();\nconst { getUsers, createUser } = require('../controllers/userController');\n\nrouter.get('/',    getUsers);\nrouter.post('/',   createUser);\n\nmodule.exports = router;` },
      { type: 'pre', value: `// src/controllers/userController.js\nexports.getUsers = async (req, res, next) => {\n  try {\n    res.json({ users: [] });\n  } catch (err) {\n    next(err);\n  }\n};\n\nexports.createUser = async (req, res, next) => {\n  try {\n    const { name, email } = req.body;\n    res.status(201).json({ message: 'User created', name, email });\n  } catch (err) {\n    next(err);\n  }\n};` },

      { type: 'h2', value: 'Error handling' },
      { type: 'p', value: 'A global error handler middleware catches anything passed to next(err). This way you avoid writing the same try/catch response logic everywhere.' },
      { type: 'pre', value: `// src/middleware/errorHandler.js\nmodule.exports = (err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.status || 500).json({\n    error: err.message || 'Internal Server Error',\n  });\n};` },
      { type: 'blockquote', value: 'Always pass errors to next(err) instead of sending a response directly inside catch blocks. It gives you one place to control all error output.' },

      { type: 'h2', value: 'Testing with Postman' },
      { type: 'p', value: 'Once your server is running (npm run dev), open Postman and:' },
      { type: 'ul', value: [
        'Send a GET request to http://localhost:3000/api/users',
        'Send a POST with a JSON body: {"name":"Omar","email":"test@test.com"}',
        'Check the response status codes — 200 for GET, 201 for created',
      ]},

      { type: 'hr' },

      { type: 'h2', value: "What's next" },
      { type: 'p', value: 'This covers the basics. In a follow-up post I\'ll add input validation with Joi, authentication with JWT, and rate limiting. Those three additions take an API from "it works locally" to "it\'s safe to deploy".' },
    ],
  },
  {
    id: 'firebase-vs-backend',
    slug: 'firebase-vs-backend',
    title: 'Firebase vs Traditional Backend: When to Use What',
    subtitle: 'A no-nonsense comparison of Firebase and traditional server backends.',
    excerpt: 'A no-nonsense comparison of Firebase and traditional server backends — when BaaS is the right call and when you need full control.',
    category: 'Mobile',
    date: 'Feb 2025',
    readTime: '4 min',
    tags: ['Firebase', 'Backend', 'Mobile'],
    featured: false,
    local: false,
    externalLinks: [
      { label: 'Read on Medium', href: 'https://omarfaruk-k.medium.com/' },
    ],
    content: [],
  },
]

// Helper — get post by slug
export const getPostBySlug = (slug) => blogPosts.find(p => p.slug === slug)