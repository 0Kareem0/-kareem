import React, { useState } from 'react';
import { AsciiArt } from '../components/AsciiArt';
import { PROFILE_DATA } from '../data/profile';
import { Terminal, Shield, Cpu, BookOpen, Heart, FileText, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [viewRaw, setViewRaw] = useState(false);

  const rawConfigText = `[KAREEM_SYSTEM_CONFIG]
NAME       = "Kareem"
HANDLE     = "0Kareem0"
LOCATION   = "Egypt"
ROLE       = "Programmer / Builder"
STATUS     = "ONLINE"

[INTERESTS]
01 = "Systems & Linux Customization"
02 = "Modern Web Development (React / TS)"
03 = "Cybersecurity & Network Telemetry"
04 = "Artificial Intelligence & Prompts"
05 = "Retro Games & Assembly Mechanics"
06 = "Anime & Cyberpunk Aesthetics"
07 = "Chess & Tactical Logic"

[SKILLS_ARSENAL]
LANGUAGES  = ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python", "SQL", "C (Exploring)"]
FRAMEWORKS = ["React", "Vite", "Tailwind CSS", "Next.js", "React Router", "WebSockets"]
ENVIRONMENT= ["Linux (Terminal / Shell)", "Git / GitHub", "Vercel", "VS Code"]

[PHILOSOPHY]
TEXT = "Code is a medium for thought. Build stuff that works fast, looks distinct, respects user intent, and doesn't break when the network hiccups."`;

  return (
    <div className="space-y-10 font-mono">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-retro-border pb-4">
        <div>
          <div className="flex items-center space-x-2 text-xs text-terminal-green mb-1">
            <Terminal className="w-4 h-4" />
            <span>SYS_INFO // ABOUT_ME.txt</span>
          </div>
          <h1 className="text-3xl font-bold text-retro-text font-display">About Kareem</h1>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={() => setViewRaw(false)}
            className={`px-3 py-1 border rounded transition ${
              !viewRaw
                ? 'bg-terminal-green/10 border-terminal-green text-terminal-green font-bold'
                : 'bg-void-850 border-retro-border text-retro-muted hover:text-retro-text'
            }`}
          >
            PARSED_UI
          </button>
          <button
            onClick={() => setViewRaw(true)}
            className={`px-3 py-1 border rounded transition ${
              viewRaw
                ? 'bg-terminal-cyan/10 border-terminal-cyan text-terminal-cyan font-bold'
                : 'bg-void-850 border-retro-border text-retro-muted hover:text-retro-text'
            }`}
          >
            RAW_CONF
          </button>
        </div>
      </div>

      {viewRaw ? (
        /* Raw Config File View */
        <div className="retro-card p-6 bg-void-950 border-retro-border font-mono text-xs text-terminal-green leading-relaxed overflow-x-auto">
          <div className="flex items-center justify-between border-b border-void-800 pb-3 mb-4 text-retro-muted">
            <span className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-terminal-cyan" />
              <span>/etc/kareem.conf</span>
            </span>
            <span>UTF-8 // 46 LINES</span>
          </div>
          <pre>{rawConfigText}</pre>
        </div>
      ) : (
        /* Parsed Visual View */
        <div className="space-y-8">
          {/* Top Bio & Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Bio Card */}
            <div className="lg:col-span-2 retro-card p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-void-800 pb-3">
                <span className="text-xs text-terminal-cyan font-bold flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>IDENTITY_SUMMARY</span>
                </span>
                <span className="px-2 py-0.5 bg-terminal-green/10 border border-terminal-green/40 text-[10px] text-terminal-green font-bold">
                  {PROFILE_DATA.status}
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Profile Image / Avatar Container */}
                <div className="shrink-0 space-y-2 text-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded border-2 border-terminal-green/60 p-1 bg-void-950 shadow-glow-green overflow-hidden group">
                    <img
                      src={PROFILE_DATA.avatarUrl || '/avatar.png'}
                      alt="Kareem Profile"
                      className="w-full h-full object-cover rounded filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback SVG if image is broken or missing
                        (e.target as HTMLElement).style.display = 'none';
                        const parent = (e.target as HTMLElement).parentElement;
                        if (parent && !parent.querySelector('.fallback-avatar')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-avatar w-full h-full bg-void-900 flex items-center justify-center text-terminal-green font-mono text-2xl font-bold';
                          fallback.innerText = 'K0';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    {/* Retro Corner Badges */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-terminal-green"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-terminal-green"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-terminal-green"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-terminal-green"></div>
                  </div>
                  <span className="text-[10px] text-retro-muted block font-mono">AVATAR // 0Kareem0</span>
                </div>

                <div className="flex-1 space-y-4">
                  <p className="text-sm text-retro-text leading-relaxed">
                    {PROFILE_DATA.bio}
                  </p>
                  <div className="pt-4 border-t border-void-800 text-xs space-y-2">
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <div>
                        <span className="text-retro-muted">LOCATION: </span>
                        <span className="text-retro-text font-bold">{PROFILE_DATA.location}</span>
                      </div>
                      <div>
                        <span className="text-retro-muted">ROLE: </span>
                        <span className="text-terminal-amber font-bold">{PROFILE_DATA.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Specs Sidebar */}
            <div className="retro-card p-6 space-y-4">
              <div className="text-xs text-retro-muted font-bold border-b border-void-800 pb-3 flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-terminal-green" />
                <span>CORE_ATTRIBUTES</span>
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-retro-muted block mb-1">Primary Discipline:</span>
                  <span className="text-terminal-green font-bold">Fullstack Web & Systems Engineering</span>
                </div>
                <div>
                  <span className="text-retro-muted block mb-1">Current Base:</span>
                  <span className="text-retro-text">Egypt</span>
                </div>
                <div>
                  <span className="text-retro-muted block mb-1">Preferred Stack:</span>
                  <span className="text-terminal-cyan">React + TypeScript + Tailwind + Vite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Arsenal Grid */}
          <div className="retro-card p-6 space-y-6">
            <div className="flex items-center space-x-2 text-xs text-terminal-cyan font-bold border-b border-void-800 pb-3">
              <Cpu className="w-4 h-4" />
              <span>TECHNOLOGY_ARSENAL</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROFILE_DATA.skills.map((group) => (
                <div key={group.category} className="space-y-3 p-4 bg-void-900 border border-void-800 rounded">
                  <h4 className="text-xs font-bold text-terminal-green border-b border-void-800 pb-1.5">
                    {group.category}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-retro-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center space-x-1.5">
                        <span className="text-terminal-cyan font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Learning Goals */}
            <div className="retro-card p-6 space-y-4">
              <div className="flex items-center space-x-2 text-xs text-terminal-amber font-bold border-b border-void-800 pb-3">
                <BookOpen className="w-4 h-4" />
                <span>CURRENTLY_LEARNING</span>
              </div>
              <ul className="space-y-2 text-xs text-retro-muted">
                {PROFILE_DATA.currentlyLearning.map((goal, i) => (
                  <li key={i} className="flex items-start space-x-2 p-2 bg-void-900 border border-void-800 rounded">
                    <CheckCircle2 className="w-3.5 h-3.5 text-terminal-green mt-0.5 shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hobbies & Personal Interests */}
            <div className="retro-card p-6 space-y-4">
              <div className="flex items-center space-x-2 text-xs text-terminal-purple font-bold border-b border-void-800 pb-3">
                <Heart className="w-4 h-4" />
                <span>INTERESTS_&_PERSONALITY</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-void-900 border border-retro-border hover:border-terminal-purple/50 text-xs text-retro-text rounded transition"
                  >
                    ⚡ {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
