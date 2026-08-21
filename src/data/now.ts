export interface NowStatus {
  lastUpdated: string;
  location: string;
  currentFocus: string[];
  activeProjects: {
    name: string;
    description: string;
    progress: number; // percentage
    tag: string;
  }[];
  readingAndExploring: string[];
  listeningTo: string[];
  systemLogSnippet: string[];
}

export const NOW_DATA: NowStatus = {
  lastUpdated: '2026-08-21',
  location: 'Egypt',
  currentFocus: [
    'Building custom retro & underground web experiences with React & TypeScript',
    'Exploring deep frontend optimization, WASM, and high-frequency WebSocket streams',
    'Finetuning personal developer workflow tools & custom Linux environment configs'
  ],
  activeProjects: [
    {
      name: 'Personal Digital Workspace',
      description: 'Engineering a personal corner of the internet inspired by 90s hacker culture & modern React UI.',
      progress: 95,
      tag: 'PORTFOLIO'
    },
    {
      name: 'Deceit Online Updates',
      description: 'Expanding WebSocket multiplayer room mechanics and spectator lobby controls.',
      progress: 80,
      tag: 'WEBSOCKETS'
    },
    {
      name: 'Kitchen AI Engine',
      description: 'Enhancing ingredient token processing and streaming recipe generation speeds.',
      progress: 88,
      tag: 'AI / LLM'
    }
  ],
  readingAndExploring: [
    'Computer Systems: A Programmer\'s Perspective (Randal E. Bryant)',
    'The Linux Programming Interface & POSIX standards',
    'Modern Web Security & OWASP Top 10 vulnerabilities'
  ],
  listeningTo: [
    'Lorn - Acid Rain / Anvil',
    'Synthwave & Cyberpunk Ambient (Master Boot Record, Perturbator)',
    'Lo-Fi Coding Beats & Low Frequency Dark Ambient'
  ],
  systemLogSnippet: [
    '[08:59:12] SYS_INIT: Booting Kareem OS Kernel v6.12.0...',
    '[08:59:14] NET_CHECK: Link established (Egypt Node -> Global Mesh)',
    '[08:59:18] STATUS: All 7 projects online and verified on Vercel deployment infrastructure.',
    '[09:04:00] EXEC: Operating at peak creative productivity.'
  ]
};
