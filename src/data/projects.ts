import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: '001',
    slug: 'kaiju',
    title: 'KAIJU',
    subtitle: 'High-Impact Fullstack Web Application Platform',
    description: 'A dark-themed, ultra-responsive web platform featuring real-time data sync, dynamic state orchestration, and custom UI components.',
    longDescription: 'KAIJU represents a robust fullstack web application designed with high performance, crisp ergonomics, and modern React patterns. Built to handle complex UI state transitions and live data feeds with sub-millisecond updates.',
    category: 'Fullstack',
    status: 'LIVE',
    liveUrl: 'https://kaiju-phi.vercel.app/',
    githubUrl: 'https://github.com/0Kareem0/KAIJU',
    featured: true,
    date: '2026-05',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST API', 'Framer Motion'],
    features: [
      'Modular component architecture with zero unneeded third-party bloat',
      'Instant responsive UI rendering with dark void styling',
      'Asynchronous state caching and optimistic UI updates',
      'Custom SVG graphics and visual indicators'
    ],
    technicalHighlights: [
      'Optimized Vite bundle chunking under 150kB gzipped',
      'Strict TypeScript interfaces for state management and API payloads',
      'Tailwind CSS tokens engineered for dark void contrast ratios'
    ],
    whatILearned: 'Deepened mastery of React component trees, render optimization hooks (useMemo, useCallback), and clean modular architecture for web apps.',
    codeSnippet: `// Kaiju core state handler snippet
export const useKaijuState = <T>(initial: T) => {
  const [data, setData] = useState<T>(initial);
  const [status, setStatus] = useState<'idle' | 'syncing' | 'ready'>('idle');

  const syncData = useCallback(async (payload: Partial<T>) => {
    setStatus('syncing');
    try {
      setData((prev) => ({ ...prev, ...payload }));
      setStatus('ready');
    } catch (err) {
      console.error('[KAIJU_SYNC_ERR]', err);
    }
  }, []);

  return { data, status, syncData };
};`
  },
  {
    id: '002',
    slug: 'kitchen-ai',
    title: 'Kitchen AI',
    subtitle: 'Intelligent Recipe & Culinary Assistance Workspace',
    description: 'AI-assisted cooking and recipe generation hub that parses available ingredients into personalized meal plans.',
    longDescription: 'Kitchen AI acts as an intelligent kitchen assistant. Users input raw inventory ingredients, macro targets, or dietary constraints, and the system leverages generative AI models to construct step-by-step recipes with detailed nutrition breakdowns.',
    category: 'AI / Web',
    status: 'LIVE',
    liveUrl: 'https://kitchen-ai-seven.vercel.app/',
    githubUrl: 'https://github.com/0Kareem0/kitchen-AI',
    featured: true,
    date: '2026-04',
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'OpenAI API / Gemini AI', 'Vite'],
    features: [
      'Smart ingredient parsing with multi-tag filtering',
      'Real-time streaming response render for AI recipe suggestions',
      'Macro calculator & step-by-step interactive cooking mode',
      'Local storage caching for saved favorite recipes'
    ],
    technicalHighlights: [
      'Prompt engineering with JSON mode output guarantees',
      'Robust fallbacks for API rate-limiting and offline mode',
      'Clean reactive form controls for ingredient inputs'
    ],
    whatILearned: 'Focused on structuring prompts for deterministic JSON parsing, streaming HTTP chunk responses, and building accessible interactive UI forms.',
    codeSnippet: `// Kitchen AI prompt generator snippet
export function buildRecipePrompt(ingredients: string[], dietary: string): string {
  return \`Given these available ingredients: \${ingredients.join(', ')}.
Dietary preference: \${dietary || 'None'}.
Return a strictly formatted JSON object with:
- recipeTitle (string)
- preparationTimeMinutes (number)
- ingredients (array of strings)
- stepByStepInstructions (array of strings)
- estimatedCalories (number)\`;
}`
  },
  {
    id: '003',
    slug: 'deceit',
    title: 'Deceit Online',
    subtitle: 'Multiplayer Social Deduction & Strategy Browser Game',
    description: 'An underground multiplayer social deduction web experience with real-time room orchestration and interactive gameplay.',
    longDescription: 'Deceit Online is a browser-based strategy game built around hidden roles, deductive reasoning, and real-time room communication. Players join game lobbies, receive secret roles, and participate in timed voting rounds to identify impostors.',
    category: 'Multiplayer / Web3',
    status: 'LIVE',
    liveUrl: 'https://www.deceit.online/',
    githubUrl: 'https://github.com/0Kareem0/Deceit_-',
    featured: true,
    date: '2026-08',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'WebSockets', 'Node.js', 'Vite'],
    features: [
      'Real-time WebSocket lobby synchronization with sub-50ms latency',
      'Role distribution algorithm ensuring fair role probability',
      'Interactive voting phase with countdown timers and secret ballot',
      'Custom room code generation & instant invite links'
    ],
    technicalHighlights: [
      'Engineered state machine for game phases (Lobby -> Dealing -> Discussion -> Voting -> Endgame)',
      'Custom WebSocket reconnect handler with exponential backoff',
      'Tailwind layout optimized for mobile screens during live party play'
    ],
    whatILearned: 'Mastered WebSocket message serialization, distributed state sync in multiplayer browser apps, and robust error handling during sudden user disconnections.',
    codeSnippet: `// Deceit Game Room State Handler
type GamePhase = 'LOBBY' | 'DEALING' | 'NIGHT' | 'DISCUSSION' | 'VOTE' | 'VICTORY';

interface Player {
  id: string;
  name: string;
  isAlive: boolean;
  role?: 'AGENT' | 'DECEITER' | 'NEUTRAL';
}

export class DeceitRoom {
  private phase: GamePhase = 'LOBBY';
  private players: Map<string, Player> = new Map();

  public broadcastState() {
    // Send sanitized player view depending on role visibility rules
  }
}`
  },
  {
    id: '004',
    slug: 'cyber-x',
    title: 'Cyber-X',
    subtitle: 'Cyberpunk Command Center & Security Dashboard',
    description: 'A futuristic cyber security visual interface featuring threat monitors, command line widgets, and telemetry graphs.',
    longDescription: 'Cyber-X is a high-tech visual dashboard designed to simulate cyber security monitoring, network packet analysis, and system diagnostic telemetry. Built with custom CSS canvas utilities and glowing neon vector aesthetics.',
    category: 'Fullstack',
    status: 'LIVE',
    liveUrl: 'https://cyber-x-lilac.vercel.app/',
    githubUrl: 'https://github.com/0Kareem0/CyberX',
    featured: true,
    date: '2026-01',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5 Canvas', 'Recharts'],
    features: [
      'Interactive visual telemetry displays with animated cyber metrics',
      'Simulated threat intrusion feed with real-time alert logs',
      'Custom matrix rain background & scanline canvas FX',
      'Fully responsive terminal command widgets'
    ],
    technicalHighlights: [
      'Custom RequestAnimationFrame canvas renderer for high FPS graphics',
      'Low memory overhead telemetry generators',
      'Sleek glassmorphism + dark grid design system'
    ],
    whatILearned: 'Deepened knowledge of HTML5 Canvas animation loops, performance profiling for high-frequency DOM repaints, and retro-futuristic UI styling.',
    codeSnippet: `// Cyber-X Matrix Rain Effect
export function drawMatrixRain(ctx: CanvasRenderingContext2D, width: number, height: number, drops: number[]) {
  ctx.fillStyle = 'rgba(7, 8, 12, 0.1)';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#00ff66';
  ctx.font = '12px JetBrains Mono';

  for (let i = 0; i < drops.length; i++) {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, i * 14, drops[i] * 14);
    if (drops[i] * 14 > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}`
  },
  {
    id: '005',
    slug: 'assembly-endgame',
    title: 'Assembly Endgame',
    subtitle: 'Programming Language Survival Word Game',
    description: 'A retro hacker hangman game where incorrect guesses erase programming language technologies from existence.',
    longDescription: 'Assembly Endgame is an interactive web word game themed after software development. The player must guess a secret technical word letter by letter. Every wrong letter choice permanently destroys a technology stack layer (HTML, CSS, JS, React, Python, Assembly...).',
    category: 'Interactive Game',
    status: 'LIVE',
    liveUrl: 'https://assembly-endgame-eta-eight.vercel.app/',
    githubUrl: 'https://github.com/0Kareem0/Assembly-Endgame',
    featured: false,
    date: '2025-12',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Canvas Confetti', 'Vite'],
    features: [
      '8 tech stack chips representing languages facing imminent destruction',
      'Interactive virtual keyboard with key state indicators (correct/wrong/unused)',
      'Dynamic status bar expressing atmospheric hacker humor upon losses',
      'Victory celebration effect using canvas particle physics'
    ],
    technicalHighlights: [
      'Clean immutable React state updates for guessed letters',
      'Accessible keyboard event listeners (type on physical keyboard or click virtual buttons)',
      'Custom CSS animations for chip disintegrations'
    ],
    whatILearned: 'Focused on state-driven visual feedback, keyboard accessibility hooks, and delightful micro-interactions for casual games.',
    codeSnippet: `// Assembly Endgame language status check
export const LANGUAGES = [
  { name: 'HTML', bg: '#E34F26', color: '#FFF' },
  { name: 'CSS', bg: '#1572B6', color: '#FFF' },
  { name: 'JavaScript', bg: '#F7DF1E', color: '#000' },
  { name: 'React', bg: '#61DAFB', color: '#000' },
  { name: 'TypeScript', bg: '#3178C6', color: '#FFF' },
  { name: 'Python', bg: '#3776AB', color: '#FFF' },
  { name: 'C++', bg: '#00599C', color: '#FFF' },
  { name: 'Assembly', bg: '#6E4C13', color: '#FFF' },
];`
  },
  {
    id: '006',
    slug: 'tenzies',
    title: 'Tenzies',
    subtitle: 'Fast-Paced Fast-Click Dice Roll Challenge',
    description: 'A classic high-speed dice matching game with hold mechanics, roll tracking, and high score timers.',
    longDescription: 'Tenzies is a sleek web implementation of the famous dice game. Players roll 10 dice continuously, freezing matching numbers until all 10 dice display the exact same digit. Features timer stats, roll counts, and local high scores.',
    category: 'Interactive Game',
    status: 'LIVE',
    liveUrl: 'https://tenzies-ten-green.vercel.app/',
    githubUrl: 'https://github.com/0Kareem0/Tenzies',
    featured: false,
    date: '2025-12',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'nanoid', 'Vite'],
    features: [
      '10 interactive 3D-styled dice with freeze toggles',
      'Automatic win condition detector using React useEffect',
      'Timer & minimum roll counter with high score storage',
      'Confetti visual effect on game victory'
    ],
    technicalHighlights: [
      'Nanoid key generation for unique die state objects',
      'Efficient state mutation prevention',
      'Polished tactile button states'
    ],
    whatILearned: 'Solidified React state synchronization, side effect management, and key performance practices for fast user input.',
    codeSnippet: `// Tenzies dice generator
export function generateNewDie() {
  return {
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: Math.random().toString(36).substring(2, 9)
  };
}`
  },
  {
    id: '007',
    slug: 'clima',
    title: 'Clima Weather App',
    subtitle: 'Minimalist Weather Telemetry & Forecast Engine',
    description: 'A clean, high-density weather dashboard fetching real-time meteorological metrics, humidity graphs, and 5-day forecasts.',
    longDescription: 'Clima is a responsive weather application designed for speed and clarity. Users search any city worldwide to fetch live temperature, barometric pressure, wind speeds, UV index, and multi-day hourly forecasts rendered in a crisp dark theme.',
    category: 'Frontend / Tool',
    status: 'LIVE',
    liveUrl: 'https://clima-virid-iota.vercel.app/',
    githubUrl: 'https://github.com/0Kareem0/clima',
    featured: false,
    date: '2026-05',
    technologies: ['JavaScript', 'OpenWeatherMap API', 'HTML5', 'CSS3', 'Tailwind CSS'],
    features: [
      'Global location lookup with automatic geolocation detection fallback',
      'Dynamic weather status icons with retro pixel/vector aesthetic',
      'Hourly temperature curve & atmospheric humidity breakdown',
      'Recent location search history memory'
    ],
    technicalHighlights: [
      'Asynchronous fetch API with strict HTTP error code handling',
      'Lightweight bundle footprint loaded under 1 second',
      'Dynamic weather theme color shifts based on day/night conditions'
    ],
    whatILearned: 'Mastered third-party REST API integration, browser geolocation security policies, and handling asynchronous loading states cleanly.',
    codeSnippet: `// Clima Weather Fetch snippet
export async function fetchWeather(city: string) {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo_key';
  const res = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&units=metric&appid=\${API_KEY}\`);
  if (!res.ok) throw new Error('City telemetry not found');
  return res.json();
}`
  }
];
