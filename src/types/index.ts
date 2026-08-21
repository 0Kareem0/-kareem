export interface Project {
  id: string; // e.g. '001', '002'
  slug: string; // e.g. 'kaiju', 'kitchen-ai'
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Fullstack' | 'AI / Web' | 'Multiplayer / Web3' | 'Interactive Game' | 'Frontend / Tool';
  status: 'DEPLOYED' | 'LIVE' | 'STABLE' | 'ACTIVE';
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  technologies: string[];
  features: string[];
  technicalHighlights: string[];
  whatILearned: string;
  previewImage?: string;
  codeSnippet?: string;
  date: string;
}

export interface ProfileInfo {
  name: string;
  handles: string[];
  role: string;
  location: string;
  status: string;
  bio: string;
  philosophy: string;
  interests: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  currentlyLearning: string[];
  avatarUrl?: string;
  socials: {
    name: string;
    url: string;
    username: string;
    icon: string;
  }[];
}

export interface TerminalCommand {
  command: string;
  description: string;
  action?: (args?: string[]) => void;
}

export interface SystemLog {
  id: string;
  timestamp: string;
  level: 'INFO' | 'SYS' | 'LOG' | 'WARN';
  message: string;
}
