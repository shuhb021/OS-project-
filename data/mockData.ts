import { Journal, Article, EditorialMember } from '../types';

export const JOURNALS: Journal[] = [
  {
    id: 'skillsphere-tech-ed',
    category: 'Applied Engineering',
    title: 'SkillSphere Journal of Technical Education & Applied Sciences',
    shortTitle: 'SkillSphere Tech. Ed.',
    issn: '2345-1111',
    eissn: '2345-2222',
    impactFactor: 4.82,
    hIndex: 45,
    description: 'A flagship publication focusing on vocational training methodologies, industrial automation, and hands-on skill development in higher education.',
    aimsAndScope: 'Bridging technical expertise with academic research to empower the next generation of industry professionals.',
    coverImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
    metrics: [{ year: 2021, impactFactor: 3.5 }, { year: 2022, impactFactor: 4.1 }, { year: 2023, impactFactor: 4.82 }]
  },
  {
    id: 'skillsphere-digital-mgmt',
    category: 'Management',
    title: 'SkillSphere Journal of Digital Management & Retail Analytics',
    shortTitle: 'SkillSphere Dig. Mgmt.',
    issn: '2456-3333',
    eissn: '2456-4444',
    impactFactor: 3.95,
    hIndex: 32,
    description: 'Exploring the intersection of retail logistics, supply chain management, and digital transformation in emerging markets.',
    aimsAndScope: 'Dedicated to providing empirical research on skill-based management strategies and market analysis.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    metrics: [{ year: 2021, impactFactor: 2.8 }, { year: 2022, impactFactor: 3.4 }, { year: 2023, impactFactor: 3.95 }]
  },
  {
    id: 'skillsphere-vocational-health',
    category: 'Health Sciences',
    title: 'SkillSphere Review of Vocational Health & Allied Sciences',
    shortTitle: 'SkillSphere Health',
    issn: '2567-5555',
    eissn: '2567-6666',
    impactFactor: 5.12,
    hIndex: 54,
    description: 'Leading research on paramedics, nursing training, and allied healthcare professional development.',
    aimsAndScope: 'A platform for sharing best practices in clinical skill training and healthcare service innovation.',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    metrics: [{ year: 2021, impactFactor: 4.2 }, { year: 2022, impactFactor: 4.8 }, { year: 2023, impactFactor: 5.12 }]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-ss-001',
    journalId: 'skillsphere-tech-ed',
    title: 'Immersive VR Training in Applied Engineering: A Skill-Based Approach',
    authors: [
      { name: 'Dr. Rajesh Sharma', affiliation: 'Symbiosis University of Applied Sciences' },
      { name: 'Dr. Anita Desai', affiliation: 'IIT Bombay' }
    ],
    abstract: 'This paper examines the impact of Virtual Reality simulators on the skill acquisition rate of undergraduate mechanical engineering students during welding workshops.',
    publishedDate: '2024-03-20',
    year: 2024,
    publicationType: 'Research Article',
    doi: '10.suas.ss.2024.101',
    volume: 12,
    issue: 1,
    keywords: ['VR Training', 'Vocational Education', 'Engineering'],
    citations: 12,
    downloads: 450
  },
  {
    id: 'art-ss-002',
    journalId: 'skillsphere-tech-ed',
    title: 'Industry 4.0 Skill Requirements: A Gap Analysis for Emerging Economies',
    authors: [
      { name: 'Prof. Vikram Malhotra', affiliation: 'Symbiosis University' }
    ],
    abstract: 'A comprehensive study on the misalignment between traditional curriculum and modern smart-factory workforce requirements.',
    publishedDate: '2023-11-15',
    year: 2023,
    publicationType: 'Review Article',
    doi: '10.suas.ss.2023.088',
    volume: 11,
    issue: 4,
    keywords: ['Industry 4.0', 'Skill Gap', 'Digital India'],
    citations: 28,
    downloads: 820
  },
  {
    id: 'art-ss-003',
    journalId: 'skillsphere-digital-mgmt',
    title: 'Consumer Behavior in Digital Retail: The Role of Personalized Skill-Based Recommendation Engines',
    authors: [
      { name: 'Dr. Sarah Jenkins', affiliation: 'London School of Economics' },
      { name: 'Amit Verma', affiliation: 'Symbiosis University' }
    ],
    abstract: 'Analyzing how skill-matching algorithms influence purchase intent in high-ticket electronics retail environments.',
    publishedDate: '2024-01-10',
    year: 2024,
    publicationType: 'Research Article',
    doi: '10.suas.ss.2024.005',
    volume: 8,
    issue: 1,
    keywords: ['Retail Analytics', 'E-commerce', 'Machine Learning'],
    citations: 4,
    downloads: 310
  },
  {
    id: 'art-ss-004',
    journalId: 'skillsphere-vocational-health',
    title: 'Advancing Paramedical Skill Training through High-Fidelity Simulation',
    authors: [
      { name: 'Dr. Michael Chen', affiliation: 'Johns Hopkins University' },
      { name: 'Dr. Priya Nair', affiliation: 'Symbiosis University' }
    ],
    abstract: 'An investigation into the retention of emergency response protocols among nursing students using robotic patients.',
    publishedDate: '2023-05-22',
    year: 2023,
    publicationType: 'Research Article',
    doi: '10.suas.ss.2023.042',
    volume: 15,
    issue: 2,
    keywords: ['Healthcare Training', 'Simulation', 'Nursing Skills'],
    citations: 15,
    downloads: 580
  },
  {
    id: 'art-ss-005',
    journalId: 'skillsphere-tech-ed',
    title: 'The Future of Vocational Education: AI-Driven Curriculum Design',
    authors: [
      { name: 'Dr. Robert Wilson', affiliation: 'MIT' }
    ],
    abstract: 'Exploring the potential of generative AI in creating personalized learning pathways for vocational students.',
    publishedDate: '2022-12-01',
    year: 2022,
    publicationType: 'Survey Paper',
    doi: '10.suas.ss.2022.099',
    volume: 10,
    issue: 6,
    keywords: ['AI in Education', 'Curriculum Design', 'Vocational'],
    citations: 42,
    downloads: 1200
  }
];

export const EDITORIAL_BOARD: Record<string, EditorialMember[]> = {
  'skillsphere-tech-ed': [
    {
      id: 'ed-001',
      name: 'Dr. Rajesh Sharma',
      role: 'Editor-in-Chief',
      affiliation: 'Symbiosis University of Applied Sciences, Indore',
      image: 'https://i.pravatar.cc/150?u=ed001',
      expertise: ['Robotics', 'Vocational Pedagogy', 'Mechatronics']
    },
    {
      id: 'ed-002',
      name: 'Prof. Hans Weber',
      role: 'Associate Editor',
      affiliation: 'TU Munich, Germany',
      image: 'https://i.pravatar.cc/150?u=ed002',
      expertise: ['Industrial Automation', 'Skill Training']
    }
  ],
  'skillsphere-digital-mgmt': [
    {
      id: 'ed-003',
      name: 'Dr. Elena Petrova',
      role: 'Editor-in-Chief',
      affiliation: 'Stanford Graduate School of Business',
      image: 'https://i.pravatar.cc/150?u=ed003',
      expertise: ['Digital Economy', 'Retail Analytics']
    }
  ]
};