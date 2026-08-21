/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: {
          950: '#07080c',
          900: '#0b0c12',
          850: '#10121a',
          800: '#161924',
          750: '#1d2130',
          700: '#262b3d',
        },
        terminal: {
          green: '#00ff66',
          'green-dim': '#00b347',
          cyan: '#00e5ff',
          amber: '#ffb000',
          purple: '#9d7cd8',
          red: '#ff4a4a',
        },
        retro: {
          border: '#1f2438',
          borderHighlight: '#323956',
          text: '#e6edf3',
          muted: '#8b949e',
          subtle: '#484f58',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Space Mono"', 'monospace'],
        display: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-start infinite',
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
        'matrix-rain': 'matrix 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      },
      boxShadow: {
        'glow-green': '0 0 15px rgba(0, 255, 102, 0.25)',
        'glow-cyan': '0 0 15px rgba(0, 229, 255, 0.25)',
        'glow-amber': '0 0 15px rgba(255, 176, 0, 0.25)',
        'terminal': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(31, 36, 56, 1)',
      }
    },
  },
  plugins: [],
}
