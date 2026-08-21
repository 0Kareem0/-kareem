import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Terminal as TerminalIcon, ArrowRight, Code2, Cpu, ExternalLink, Github, Sparkles, Activity, ShieldAlert, Layers } from 'lucide-react';
import { AsciiArt } from '../components/AsciiArt';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS_DATA } from '../data/projects';
import { PROFILE_DATA } from '../data/profile';
import { useTypingEffect } from '../hooks/useTypingEffect';

export const Home: React.FC = () => {
  const [quickCmd, setQuickCmd] = useState('');
  const navigate = useNavigate();

  const heroWhoAmIText = `$ whoami\nKareem — Programmer. Builder. Curious human.\n\nCurrently:\n→ building high-performance web systems\n→ learning low-level mechanics & advanced TS\n→ breaking things\n→ fixing them again with better architecture`;

  const { displayedText } = useTypingEffect(heroWhoAmIText, 20, 100);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  const handleQuickCmdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = quickCmd.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'about' || cmd === 'cd /about') navigate('/about');
    else if (cmd === 'projects' || cmd === 'cd /projects') navigate('/projects');
    else if (cmd === 'now' || cmd === 'cd /now') navigate('/now');
    else if (cmd === 'contact' || cmd === 'cd /contact') navigate('/contact');
    else if (cmd.startsWith('kaiju')) navigate('/projects/kaiju');
    else if (cmd.startsWith('deceit')) navigate('/projects/deceit');
    else navigate('/projects');
  };

  return (
    <div className="space-y-16">
      {/* Hero Terminal Section */}
      <section className="relative pt-4 pb-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Main Hero Terminal Window */}
          <div className="flex-1 retro-card p-6 md:p-8 flex flex-col justify-between border-terminal-green/30 relative">
            <div className="flex items-center justify-between border-b border-void-800 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-terminal-red/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-terminal-amber/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-terminal-green/80 inline-block"></span>
                <span className="text-xs text-retro-muted font-mono ml-2">bash - kareem@localhost:~</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-terminal-green font-mono">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>ONLINE // READY</span>
              </div>
            </div>

            {/* Terminal Body Content */}
            <div className="font-mono text-sm md:text-base space-y-4 min-h-[180px]">
              <div className="text-retro-text whitespace-pre-wrap leading-relaxed">
                {displayedText}
                <span className="terminal-cursor ml-1"></span>
              </div>
            </div>

            {/* Quick Command Bar */}
            <div className="mt-8 pt-4 border-t border-void-800">
              <form onSubmit={handleQuickCmdSubmit} className="flex items-center space-x-2 text-xs font-mono">
                <span className="text-terminal-green font-bold select-none">$</span>
                <input
                  type="text"
                  value={quickCmd}
                  onChange={(e) => setQuickCmd(e.target.value)}
                  placeholder="type 'projects', 'about', 'deceit', 'now'..."
                  className="flex-1 bg-void-900 border border-retro-border rounded px-3 py-1.5 text-retro-text outline-none focus:border-terminal-green transition"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-terminal-green/10 border border-terminal-green/40 hover:bg-terminal-green hover:text-void-950 text-terminal-green font-bold rounded transition"
                >
                  EXEC
                </button>
              </form>
            </div>
          </div>

          {/* Right Status Sidebar */}
          <div className="w-full lg:w-80 space-y-4 font-mono">
            {/* System Status Spec Box */}
            <div className="retro-card p-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-retro-muted border-b border-void-800 pb-2">
                <span className="text-terminal-cyan font-bold flex items-center space-x-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>SYSTEM_SPECS</span>
                </span>
                <span className="text-[10px] text-retro-subtle">V6.12</span>
              </div>

              {/* Profile Avatar Frame */}
              <div className="flex items-center space-x-3 bg-void-900 p-2 border border-void-800 rounded">
                <div className="w-12 h-12 rounded border border-terminal-green/60 overflow-hidden bg-void-950 shrink-0">
                  <img
                    src={PROFILE_DATA.avatarUrl || '/avatar.png'}
                    alt="Kareem"
                    className="w-full h-full object-cover filter contrast-125 brightness-95"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-xs space-y-0.5 overflow-hidden">
                  <span className="text-retro-text font-bold block truncate">Kareem</span>
                  <span className="text-terminal-green text-[10px] font-mono block">0Kareem0</span>
                  <span className="text-retro-subtle text-[9px] block">OPERATOR</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-retro-muted">LOCATION:</span>
                  <span className="text-retro-text">{PROFILE_DATA.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-retro-muted">FOCUS:</span>
                  <span className="text-terminal-amber">React / TS / Web</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-retro-muted">ARCHIVES:</span>
                  <span className="text-terminal-cyan font-bold">007 PROJECTS</span>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="retro-card p-5 space-y-3">
              <div className="text-xs text-retro-muted font-bold border-b border-void-800 pb-2 flex items-center space-x-1">
                <Layers className="w-3.5 h-3.5 text-terminal-amber" />
                <span>QUICK_DISPATCH</span>
              </div>
              <div className="space-y-2 text-xs">
                <Link
                  to="/projects"
                  className="flex items-center justify-between p-2 bg-void-900 border border-retro-border hover:border-terminal-green text-retro-text hover:text-terminal-green rounded transition"
                >
                  <span>~/projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/about"
                  className="flex items-center justify-between p-2 bg-void-900 border border-retro-border hover:border-terminal-cyan text-retro-text hover:text-terminal-cyan rounded transition"
                >
                  <span>~/about</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/now"
                  className="flex items-center justify-between p-2 bg-void-900 border border-retro-border hover:border-terminal-amber text-retro-text hover:text-terminal-amber rounded transition"
                >
                  <span>~/now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-between p-2 bg-void-900 border border-retro-border hover:border-terminal-purple text-retro-text hover:text-terminal-purple rounded transition"
                >
                  <span>~/contact</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Archive Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-retro-border pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-terminal-green font-mono mb-1">
              <Code2 className="w-4 h-4" />
              <span>SELECTED_WORKS // ARCHIVE</span>
            </div>
            <h2 className="text-2xl font-bold text-retro-text font-display">Featured Projects</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono px-3 py-1.5 bg-void-850 border border-retro-border hover:border-terminal-green text-terminal-green rounded transition"
          >
            <span>VIEW ALL 007 PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} viewMode="grid" />
          ))}
        </div>
      </section>

      {/* Programming Mindset / Philosophy Section */}
      <section className="retro-card p-6 md:p-8 space-y-4 border-retro-border">
        <div className="flex items-center space-x-2 text-xs text-terminal-amber font-mono">
          <Sparkles className="w-4 h-4" />
          <span>PHILOSOPHY // CRAFT</span>
        </div>
        <h3 className="text-lg font-bold text-retro-text font-mono">How I Approach Software</h3>
        <p className="text-xs sm:text-sm text-retro-muted leading-relaxed font-mono">
          &quot;{PROFILE_DATA.philosophy}&quot;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-void-800 text-xs font-mono">
          <div className="p-3 bg-void-900 border border-void-800 rounded">
            <span className="text-terminal-green font-bold block mb-1">01. FIRST PRINCIPLES</span>
            <span className="text-retro-muted text-[11px]">Understand underlying specs, networking layers, and state machines rather than copying boilerplate.</span>
          </div>
          <div className="p-3 bg-void-900 border border-void-800 rounded">
            <span className="text-terminal-cyan font-bold block mb-1">02. HIGH DENSITY UI</span>
            <span className="text-retro-muted text-[11px]">Informative interfaces that respect screen space and provide immediate tactile feedback.</span>
          </div>
          <div className="p-3 bg-void-900 border border-void-800 rounded">
            <span className="text-terminal-amber font-bold block mb-1">03. ZERO BLOAT</span>
            <span className="text-retro-muted text-[11px]">Keep dependencies lean, bundle sizes small, and render trees crisp and responsive.</span>
          </div>
        </div>
      </section>

      {/* GitHub Overview Box */}
      <section className="retro-card p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-void-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-void-900 border border-retro-border rounded text-terminal-green">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-retro-text font-mono">SOURCE_CODE // GITHUB</h3>
              <p className="text-xs text-retro-muted font-mono">github.com/0Kareem0</p>
            </div>
          </div>
          <a
            href="https://github.com/0Kareem0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-terminal-green/10 border border-terminal-green/40 hover:bg-terminal-green hover:text-void-950 text-terminal-green font-bold text-xs font-mono rounded transition"
          >
            <span>EXPLORE REPOSITORIES</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="text-xs font-mono text-retro-muted space-y-2">
          <p>
            Most tools, experiments, and multiplayer games I build eventually end up open-source on GitHub.
          </p>
          <div className="p-4 bg-void-950 border border-retro-border rounded font-mono text-xs text-terminal-green/90 overflow-x-auto">
            <code>$ git clone https://github.com/0Kareem0/[project-name].git</code>
          </div>
        </div>
      </section>
    </div>
  );
};
