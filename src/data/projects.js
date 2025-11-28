const PROJECTS = [
  {
    id: 'taskflow',
    name: 'TaskFlow — Team Task Management',
    description: 'Collaborative task management dashboard with role-based access, task boards, and reporting.',
    tech: ['React','Node.js','Express','MongoDB','JWT','Socket.io'],
    features: [
      'JWT authentication (login/signup)',
      'Create / update / assign / delete tasks',
      'Real-time status updates via WebSockets',
      'Filter, search & priority labels',
      'Responsive admin & team dashboard with charts'
    ],
    code: 'https://github.com/USERNAME/taskflow',
    demo: 'https://taskflow.example.com'
  },
  {
    id: 'eduhub',
    name: 'EduHub — Online Course Platform',
    description: 'Platform for instructors to publish courses and learners to enroll and track progress.',
    tech: ['React','Node.js','Express','MongoDB','Stripe'],
    features: [
      'Role-based access (Admin / Instructor / Student)',
      'Course browsing, search & categories',
      'Enrollment and progress tracking',
      'Course authoring and admin dashboard'
    ],
    code: 'https://github.com/USERNAME/eduhub',
    demo: 'https://eduhub.example.com'
  },
  {
    id: 'shopsphere',
    name: 'ShopSphere — E-commerce Store',
    description: 'Complete e-commerce platform with product catalog, cart, checkout, and order management.',
    tech: ['React','Context API','Node.js','Express','MongoDB','Stripe'],
    features: [
      'Product catalog with filters and search',
      'Shopping cart with quantity updates',
      'User auth and protected routes',
      'Order placement and admin product management'
    ],
    code: 'https://github.com/USERNAME/shopsphere',
    demo: 'https://shopsphere.example.com'
  },
  {
    id: 'devconnect',
    name: 'DevConnect — Community & Blog',
    description: 'Developer community platform for sharing posts, profiles, and interacting via comments.',
    tech: ['React','Node.js','Express','MongoDB'],
    features: [
      'User profiles with bio and skills',
      'Create, edit, delete posts',
      'Like and comment on posts',
      'Public feed with pagination'
    ],
    code: 'https://github.com/USERNAME/devconnect',
    demo: 'https://devconnect.example.com'
  }
]

export default PROJECTS
