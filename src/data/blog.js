// ============================================================
// BLOG DATA
// To add a new post: copy one object, fill in details.
// content: array of { type: 'h2'|'p'|'code'|'pre'|'ul'|'blockquote'|'hr', value, language }
// For external posts: set local: false, content: []
// ============================================================

export const blogPosts = [
  {
    id: 'saga-vs-2pc',
    slug: 'saga-vs-2pc',
    title: 'The Problem With "All or Nothing" in Distributed Systems: Saga vs 2PC Explained With Real-Life Analogies',
    subtitle: '',
    excerpt: 'Distributed transactions and distributed locks — comparing the Saga pattern and Two-Phase Commit through real-life analogies.',
    category: 'Architecture',
    date: '',
    readTime: '',
    tags: ['Distributed Systems', 'Saga', '2PC', 'Distributed Transactions'],
    featured: true,
    local: false,
    externalLinks: [
      { label: 'Read on Medium', href: 'https://medium.com/@masum26/the-problem-with-all-or-nothing-in-distributed-systems-saga-vs-2pc-explained-with-real-life-4b73e5490534?sk=3ac042713ad5285948daedefd51049a7' },
    ],
    content: [],
  },
  {
    id: 'understanding-quantisation',
    slug: 'understanding-quantisation',
    title: 'Understanding "Quantisation" with Examples and Analogies: Public Notebook',
    subtitle: '',
    excerpt: 'A public notebook breaking down quantisation in AI and LLMs using examples and analogies.',
    category: 'AI/ML',
    date: '',
    readTime: '',
    tags: ['AI', 'Quantisation', 'LLM'],
    featured: false,
    local: false,
    externalLinks: [
      { label: 'Read on Medium', href: 'https://medium.com/@masum26/understanding-quantisation-with-examples-and-analogies-public-notebook-2b282e386c53' },
    ],
    content: [],
  },
  {
    id: 'high-availability-infra-design',
    slug: 'high-availability-infra-design',
    title: 'Ensuring High Availability — Infrastructures Design',
    subtitle: '',
    excerpt: 'Designing highly-available infrastructure — multi-node computing, load balancing, and database resilience.',
    category: 'Architecture',
    date: '',
    readTime: '',
    tags: ['High Availability', 'Multi-node Computing', 'Load Balancer', 'Database'],
    featured: false,
    local: false,
    externalLinks: [
      { label: 'Read on Medium', href: 'https://medium.datadriveninvestor.com/ensuring-high-availability-infrastructures-design-9cfe1bce27ae' },
    ],
    content: [],
  },
]

// Helper — get post by slug
export const getPostBySlug = (slug) => blogPosts.find(p => p.slug === slug)
