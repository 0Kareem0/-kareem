import { ProfileInfo } from '../types';

export const PROFILE_DATA: ProfileInfo = {
  name: 'Kareem',
  handles: ['~/kareem', '0Kareem0', 'kareem@localhost', 'KAREEM_001', 'kareem.exe'],
  role: 'Programmer. Builder. Curious human.',
  location: 'Egypt 🇪🇬',
  status: 'ONLINE // BUILDING & EXPLORING',
  bio: 'I build software from first principles. Fascinated by high-performance web systems, low-level mechanics, slick underground aesthetics, and clean user interfaces. I prefer readable code, minimal dependencies, and high-density information layouts over bloated SaaS trends.',
  philosophy: 'Code is a medium for thought. Build stuff that works fast, looks distinct, respects user intent, and doesn\'t break when the network hiccups.',
  interests: [
    'Systems & Linux Customization',
    'Modern Web Development (React / TS)',
    'Cybersecurity & Network Telemetry',
    'Artificial Intelligence & Prompts',
    'Retro Games & Assembly Mechanics',
    'Anime & Cyberpunk Aesthetics',
    'Chess & Tactical Logic'
  ],
  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript (ESNext)', 'HTML5 / CSS3','SQL', 'Bash (Exploring)']
    },
    {
      category: 'Frontend & Frameworks',
      items: ['React.js', 'Vite', 'Tailwind CSS', 'Next.js', 'React Router', 'Redux / Zustand', 'WebSockets']
    },
    {
      category: 'Tools & Ecosystem',
      items: ['Git / GitHub', 'Linux (Terminal / Shell)', 'Vercel', 'Postman', 'VS Code', 'npm / pnpm']
    },
    {
      category: 'Domains',
      items: ['Fullstack Web Apps', 'Interactive UI & Games', 'RESTful & Realtime APIs', 'AI Integrations']
    }
  ],
  currentlyLearning: [
    'Advanced TypeScript Type-Level Gymnastics',
    'Low-level Memory & System Calls in C/Rust',
    'Web Assembly (WASM) for Browser Engines',
    'Cyber Security CTFs & Network Security'
  ],
  avatarUrl: 'https://avatars.githubusercontent.com/u/102608397?v=4',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/0Kareem0',
      username: '0Kareem0',
      icon: 'Github'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kareemz01',
      username: '@kareemz01',
      icon: 'Instagram'
    },
    {
      name: 'X / Twitter',
      url: 'https://x.com/KareemLost001',
      username: '@KareemLost001',
      icon: 'Twitter'
    }
  ]
};
