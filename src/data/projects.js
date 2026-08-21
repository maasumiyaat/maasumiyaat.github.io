// ============================================================
// PROJECTS
// Chronological — most recent first. No source/repo links here
// by design (see Open Source page for that).
// ============================================================

export const projects = [
  {
    id: 'cdn-billing-service',
    title: 'CDN Billing Service',
    duration: 'Nov 2025',
    associatedWith: 'Tenbyte',
    description: 'Architected and built Tenbyte’s billing service around Flexprice and Stripe, enabling usage-based, subscription, and hybrid billing models. Implemented high-volume usage event ingestion, metering and aggregation, dynamic pricing plans, subscription lifecycle management, wallets and credits, invoicing, checkout, and payment orchestration for a globally scalable CDN platform.',
    skills: [  'Billing Systems', 'Flexprice', 'Stripe', 'Usage Metering', 'Subscriptions', 'Payments',],
  },
  {
    id: 'webp-edge',
    title: 'WebP Edge',
    duration: 'Feb 2025',
    associatedWith: 'Tenbyte',
    description: 'Converts images to WebP on the fly and re-caches them as CDN-ready assets, cutting size from ~4MB to ~400KB on average while keeping visual quality — improving load time, bandwidth, and cost.',
    skills: ['CDN', 'Image Processing'],
  },
  {
    id: 'booking-service',
    title: 'Booking Service',
    duration: 'Aug 2024',
    associatedWith: '10 Minute School',
    description: 'Arranges and organizes offline classes for K12 and IELTS students. Drove over 360K users to book free classes, achieving an approximate 10% conversion rate to paid users, with attendance increasing from 16% to 25%.',
    skills: ['Go', 'MongoDB'],
  },
  {
    id: 'tenlytics-service',
    title: 'Tenlytics Service',
    duration: 'Mar 2024 — Apr 2024',
    associatedWith: '10 Minute School',
    description: 'An analytics service tracking student engagement — time spent in the app, exams, class tests, homework, and MCQs completed, and consistency over time, including a daily streak feature.',
    skills: ['NestJS', 'Apache Airflow', 'InfluxDB'],
  },
  {
    id: 'gps-subscription',
    title: 'GPS Subscription',
    duration: 'Sep 2023',
    description:
      'Built a subscription and payment platform for GPS-based vehicle tracking, handling subscription lifecycle, payment processing, plan management, and service activation. Designed the backend in Go with MySQL and AWS, integrating external payment gateways for reliable transaction processing.',
    skills: ['MySQL', 'Go', 'Payment Gateways', 'Amazon Web Services (AWS)'],
  },
  {
    id: 'truck-marketplace',
    title: 'Truck Marketplace',
    duration: 'Aug 2023',
    description:
      'Developed backend services for a truck marketplace connecting shippers with truck owners. Designed RESTful APIs and business workflows for marketplace operations, with Go and MySQL powering the core service layer and data management.',
    skills: ['MySQL', 'Go', 'RESTful WebServices'],
  },
  {
    id: 'price-predictor',
    title: 'Price Predictor',
    duration: 'Jun 2023',
    description:
      'Built a backend service for predicting truck transportation prices through a REST API, with Go handling the service layer and MySQL supporting pricing data and historical information. Designed the service for reliable integration with downstream applications.',
    skills: ['REST API', 'MySQL', 'Go'],
  },
  {
    id: 'image-server',
    title: 'Image Server',
    duration: 'Apr 2022',
    description:
      'Built a dedicated image-serving backend using Go and Google Cloud Storage, with Redis providing caching for frequently accessed assets. Designed the service to efficiently handle image storage, retrieval, and high-frequency content delivery.',
    skills: ['Go', 'Google Cloud Platform (GCP)', 'Redis'],
  },
  {
    id: 'api-gateway',
    title: 'API Gateway',
    duration: 'Mar 2022',
    description:
      'Developed an API gateway for a microservices architecture, providing a unified entry point for downstream services and centralizing request routing and service communication.',
    skills: ['Express Gateway'],
  },
  {
    id: 'driver-referral',
    title: 'Driver Referral',
    duration: 'Nov 2021',
    description:
      'Built a driver referral service in Go to manage referral workflows and reward processing within a microservices architecture. Implemented scheduled background jobs with cron and MySQL-backed persistence for reliable referral tracking and processing.',
    skills: ['Go', 'MySQL', 'Cron'],
  },
  {
    id: 'cash-disbursement',
    title: 'Cash Disbursement',
    duration: 'Jan 2020',
    description:
      'Developed a cash disbursement platform for managing payment and payout workflows, integrating external payment gateways with a Node.js backend. Implemented transaction processing, persistence, and operational workflows across MySQL and MongoDB, with Angular supporting the frontend experience.',
    skills: ['Node.js', 'MySQL', 'Payment Gateway', 'MongoDB', 'Angular'],
  },
  {
    id: 'mfs-payment-gateway',
    title: 'MFS - Payment Gateway',
    duration: 'Apr 2019 — Jun 2019',
    description:
      'Developed a mobile financial services (MFS) payment gateway integrating payment workflows through REST APIs. Built backend services with Node.js, MySQL, and MongoDB to handle transaction processing, request validation, persistence, and communication with external payment systems.',
    technologies: ['Node.js', 'MySQL', 'MongoDB', 'REST'],
  },
  {
    id: 'shipper-app',
    title: 'Truck Lagbe Shipper App',
    duration: 'Apr 2019',
    description:
      'Contributed to the development of the Truck Lagbe Shipper application, implementing frontend functionality and business workflows using JavaScript and object-oriented programming principles.',
    skills: ['JavaScript', 'Object-Oriented Programming (OOP)'],
  },
  {
    id: 'owner-app',
    title: 'Truck Lagbe Owner App',
    duration: 'Mar 2019',
    description:
      'Contributed to the Truck Lagbe Owner application, implementing frontend features and application workflows using JavaScript, object-oriented programming, and JSON-based data communication.',
    skills: ['JavaScript', 'Object-Oriented Programming (OOP)', 'JSON'],
  },
  // {
  //   id: 'masum26',
  //   title: 'masum26',
  //   duration: 'Mar 2019',
  //   technologies: ['Node.js'],
  //   description: 'A fun npm package — a CLI app that shows my short resume right in the terminal.',
  // },
  {
    id: 'mini-compiler',
    title: 'Mini Compiler (While Loop Syntax Analyzing)',
    duration: 'Mar 2018',
    associatedWith: 'Daffodil International University',
    description:
      'A compiler-design project that performs lexical and syntactic analysis of while-loop constructs in C-like code using LEX and YACC, validating grammar rules and reporting syntax errors.',
  },
  {
    id: 'ftp-server-linux',
    title: 'FTP Server in Linux',
    duration: 'Nov 2017',
    associatedWith: 'Daffodil International University',
    description:
      'Built and configured a Linux-based FTP file server using Samba for network file sharing, supporting read/write access from other machines and cross-platform testing with Windows FTP clients.',
  },
]
