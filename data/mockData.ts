
import { Journal, Article, EditorialMember } from '../types';

export const JOURNALS: Journal[] = [
  {
    id: 'journal-ai-research',
    category: 'Computer Science',
    title: 'Journal of Artificial Intelligence Research & Ethics',
    shortTitle: 'J. AI Res. Eth.',
    issn: '2156-7843',
    eissn: '2156-7851',
    impactFactor: 11.24,
    hIndex: 184,
    description: 'Exploration of foundational algorithms and the ethical implications of autonomous systems in modern society.',
    aimsAndScope: 'Focusing on the intersection of deep learning, reinforcement learning, and the socio-ethical frameworks of AI deployment.',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
    metrics: [{ year: 2021, impactFactor: 9.2 }, { year: 2022, impactFactor: 10.1 }, { year: 2023, impactFactor: 11.24 }]
  },
  {
    id: 'int-journal-data-science',
    category: 'Information Systems',
    title: 'International Journal of Data Science & Big Data',
    shortTitle: 'Int. J. Data Sci.',
    issn: '2281-904X',
    eissn: '2281-9058',
    impactFactor: 8.92,
    hIndex: 142,
    description: 'A global platform for advanced analytics, data mining, and statistical modeling in high-velocity environments.',
    aimsAndScope: 'Bridging the gap between theory and application in large-scale data engineering and predictive analytics.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bbda64626dc1?auto=format&fit=crop&q=80&w=600',
    metrics: [{ year: 2021, impactFactor: 7.8 }, { year: 2022, impactFactor: 8.4 }, { year: 2023, impactFactor: 8.92 }]
  },
  {
    id: 'journal-cybersecurity-networks',
    category: 'Security',
    title: 'Journal of Cybersecurity, Privacy & Networks',
    shortTitle: 'J. Cyber. Priv.',
    issn: '1945-3321',
    eissn: '1945-333X',
    impactFactor: 7.15,
    hIndex: 98,
    description: 'Leading research on cryptology, network defense strategies, and individual privacy protections.',
    aimsAndScope: 'Advancing the state of the art in defensive computing and secure protocol design for IoT and cloud infrastructures.',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    metrics: [{ year: 2021, impactFactor: 5.9 }, { year: 2022, impactFactor: 6.5 }, { year: 2023, impactFactor: 7.15 }]
  },
  {
    id: 'renewable-energy-systems',
    category: 'Engineering',
    title: 'Journal of Renewable Energy Systems & Storage',
    shortTitle: 'J. Renew. Energy',
    issn: '2470-3412',
    eissn: '2470-3420',
    impactFactor: 10.05,
    hIndex: 138,
    description: 'Next-generation solar, wind, and battery technologies for a sustainable grid.',
    aimsAndScope: 'Addressing the challenges of energy density, efficiency, and environmental lifecycle of green energy.',
    coverImage: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=600',
    metrics: [{ year: 2021, impactFactor: 8.9 }, { year: 2022, impactFactor: 9.4 }, { year: 2023, impactFactor: 10.05 }]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-ai-001',
    journalId: 'journal-ai-research',
    title: 'Scaling Laws for Neural Language Models: A Comparative Study',
    authors: [
      { name: 'Dr. Emily Chen', affiliation: 'Stanford Institute for Human-Centered AI' },
      { name: 'Marcus Sterling', affiliation: 'DeepMind' }
    ],
    abstract: 'We present empirical evidence regarding the performance of large language models as a function of compute, dataset size, and parameter count.',
    publishedDate: '2024-02-14',
    year: 2024,
    publicationType: 'Research Article',
    doi: '10.1145/aireth.2024.102',
    volume: 15,
    issue: 2,
    keywords: ['LLMs', 'Scaling Laws'],
    citations: 154,
    downloads: 8420
  },
  {
    id: 'art-ai-002',
    journalId: 'journal-ai-research',
    title: 'Historical Perspectives on Algorithmic Bias (2015-2020)',
    authors: [
      { name: 'Prof. Julian Vane', affiliation: 'Oxford Internet Institute' }
    ],
    abstract: 'A comprehensive survey of bias detection methodologies developed during the first major wave of commercial AI integration.',
    publishedDate: '2019-11-05',
    year: 2019,
    publicationType: 'Survey Paper',
    doi: '10.1145/aireth.2019.045',
    volume: 10,
    issue: 4,
    keywords: ['Algorithmic Bias', 'Survey'],
    citations: 210,
    downloads: 4500
  },
  {
    id: 'art-ai-003',
    journalId: 'journal-ai-research',
    title: 'Reinforcement Learning in Robotics: A Decade of Progress',
    authors: [
      { name: 'Dr. Sarah Smith', affiliation: 'MIT' }
    ],
    abstract: 'A rigorous review of reinforcement learning applications in physical robotic systems from 2015 to the present day.',
    publishedDate: '2022-06-12',
    year: 2022,
    publicationType: 'Review Article',
    doi: '10.1145/aireth.2022.088',
    volume: 13,
    issue: 3,
    keywords: ['Robotics', 'Reinforcement Learning'],
    citations: 89,
    downloads: 2100
  }
];

export const EDITORIAL_BOARD: Record<string, EditorialMember[]> = {
  'journal-ai-research': [
    { id: 'ed-001', name: 'Prof. Andrew Ng', role: 'Editor-in-Chief', affiliation: 'Stanford University', expertise: ['Deep Learning', 'AI Ethics'], image: 'https://i.pravatar.cc/150?u=andrew' },
    { id: 'ed-002', name: 'Dr. Fei-Fei Li', role: 'Associate Editor', affiliation: 'Stanford University', expertise: ['Computer Vision'], image: 'https://i.pravatar.cc/150?u=feifei' },
    { id: 'ed-003', name: 'Dr. Yoshua Bengio', role: 'Editorial Board Member', affiliation: 'MILA', expertise: ['Neural Networks'], image: 'https://i.pravatar.cc/150?u=yoshua' }
  ]
};
