
export interface Author {
  name: string;
  affiliation: string;
}

export type PublicationType = 'Research Article' | 'Review Article' | 'Survey Paper' | 'Letter';

export interface Article {
  id: string;
  journalId: string;
  title: string;
  authors: Author[];
  abstract: string;
  publishedDate: string;
  year: number; // For formal year-wise filtering
  publicationType: PublicationType;
  doi: string;
  volume: number;
  issue: number;
  keywords: string[];
  citations: number;
  downloads: number;
}

export interface EditorialMember {
  id: string;
  name: string;
  role: 'Editor-in-Chief' | 'Associate Editor' | 'Editorial Board Member';
  affiliation: string;
  image: string;
  expertise?: string[];
}

export interface Journal {
  id: string;
  category: string;
  title: string;
  shortTitle: string;
  issn: string;
  eissn: string;
  impactFactor: number;
  hIndex: number;
  description: string;
  aimsAndScope: string;
  coverImage: string;
  metrics: {
    year: number;
    impactFactor: number;
  }[];
}
