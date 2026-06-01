// ============================================================
// PROJECTS DATA
// preview.content: add items in any order — text, image, or both
// { type: 'text', value: '...' }
// { type: 'image', src: '/assets/screenshots/x.png', caption: 'optional' }
// Leave content: [] if no details yet
// ============================================================

export const projects = [
  {
    id: 'redbond',
    title: 'redBond',
    subtitle: 'Blood Donation App',
    type: 'MOBILE',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2a0e0e 100%)',
    logo: '/assets/redbondlogo.png',
    excerpt: 'Real-time mobile app connecting blood donors and recipients in Bangladesh.',
    highlights: [
      'Led backend development in a team of 3; designed Firebase data architecture.',
      'Integrated Google Maps API to display nearby donors and blood banks.',
      'Configured Firebase Auth and Firestore for secure real-time syncing.',
    ],
    stack: ['Java', 'XML', 'Firebase', 'Retrofit', 'Google Maps API'],
    links: { github: 'https://github.com/omarfaruk-k/', live: null, playstore: null, blog: null },
    preview: {
      content: [
        { type: 'text', value: 'redBond was built to solve a real emergency — finding blood donors quickly in Bangladesh is often life-or-death. The app connects donors and recipients in real time using geolocation.' },
        // { type: 'image', src: '/assets/screenshots/redbond-1.png', caption: 'Home screen' },
        // { type: 'image', src: '/assets/screenshots/redbond-2.png', caption: 'Donor map' },
        // { type: 'text', value: 'Add more details here...' },
      ]
    }
  },
  {
    id: 'lostfound',
    title: 'Lost & Found',
    subtitle: 'Item Recovery App',
    type: 'MOBILE',
    gradient: 'linear-gradient(135deg, #0a1020 0%, #0d1a2e 100%)',
    logo: '/assets/lost_n_found_text_white.png',
    excerpt: 'Cross-platform app helping users report and locate lost items with real-time notifications.',
    highlights: [
      'Built Firebase backend handling item listings and reporting workflow.',
      'Implemented FCM for instant notifications when matching items are found.',
      'Added location filters and item categorisation for efficient search.',
    ],
    stack: ['Flutter', 'Firebase', 'FCM', 'Google Maps API', 'Firestore'],
    links: { github: 'https://github.com/omarfaruk-k/', live: null, playstore: null, blog: null },
    preview: {
      content: [
        { type: 'text', value: 'A community-powered lost and found network for Flutter users. Post lost or found items, get notified when there\'s a match nearby.' },
      ]
    }
  },
  {
    id: 'summator',
    title: 'Summator',
    subtitle: 'Mental Math Game',
    type: 'GAME',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #0e0e2a 100%)',
    logo: '/assets/SummatorWhite.png',
    excerpt: 'Mobile game that challenges users to improve mental math through timed summation rounds.',
    highlights: [
      'Designed difficulty progression logic with dynamic difficulty levels.',
      'Firebase Auth and Firestore for user sessions and score history.',
      'Currently live on Android — iOS and web versions planned.',
    ],
    stack: ['Flutter', 'Firebase', 'Firestore', 'Firebase Auth'],
    links: { github: 'https://github.com/omarfaruk-k/', live: null, playstore: '#', blog: null },
    preview: {
      content: [
        { type: 'text', value: 'Summator makes mental arithmetic addictive. Timed rounds, progressive difficulty, and leaderboards keep users coming back.' },
      ]
    }
  },
  {
    id: 'nirvar',
    title: 'NIRVAR',
    subtitle: 'Technician Hiring Platform',
    type: 'WEB',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #120e2a 100%)',
    logo: '/assets/nirvarW.png',
    excerpt: 'Platform enabling users to hire skilled workers with transparent pricing and payment milestones.',
    highlights: [
      'Built pricing engine with milestone-based payment tracking.',
      'Role-based access for clients, technicians, and admins.',
      'Booking flow with status tracking and review system.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    links: { github: 'https://github.com/omarfaruk-k/', live: null, playstore: null, blog: null },
    preview: {
      content: [
        { type: 'text', value: 'NIRVAR connects clients with verified technicians. The platform handles the full service lifecycle — from booking to payment milestones to admin oversight.' },
      ]
    }
  },
  {
    id: 'kontaka',
    title: 'KONTAKA',
    subtitle: 'AI Currency Recognition',
    type: 'AI/ML',
    gradient: 'linear-gradient(135deg, #0a1208 0%, #0e2a14 100%)',
    logo: '/assets/kontaka.svg',
    excerpt: 'ML-based Bangladeshi currency recognition system designed to assist visually impaired users.',
    highlights: [
      'Trained CNN model on Bangladeshi currency dataset with high accuracy.',
      'Real-time inference with text-to-speech audio feedback.',
      'Flutter app with offline model inference for low-connectivity areas.',
    ],
    stack: ['Python', 'TensorFlow', 'Flutter', 'OpenCV', 'Firebase'],
    links: { github: 'https://github.com/omarfaruk-k/kontaka', live: null, playstore: '#', blog: null },
    preview: {
      content: [
        { type: 'text', value: 'KONTAKA uses a custom-trained CNN to identify Bangladeshi currency denominations in real time, giving audio feedback so visually impaired users can independently handle money.' },
      ]
    }
  },
]