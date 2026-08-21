import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Terminal, Tv, Volume2, VolumeX, Menu, X, Command } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface HeaderProps {
  scanlinesEnabled: boolean;
  onToggleScanlines: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenTerminal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  scanlinesEnabled,
  onToggleScanlines,
  soundEnabled,
  onToggleSound,
  onOpenTerminal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '~/home' },
    { path: '/about', label: '~/about' },
    { path: '/projects', label: '~/projects' },
    { path: '/now', label: '~/now' },
    { path: '/contact', label: '~/contact' },
  ];

  const getBreadcrumb = () => {
    const p = location.pathname;
    if (p === '/') return '~/home';
    if (p.startsWith('/projects/')) return `~/projects/${p.split('/')[2]}`;
    return `~${p}`;
  };

  return (
    <header className="sticky top-0 z-40 bg-void-950/90 backdrop-blur-md border-b border-retro-border">
      {/* Topmost System Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs border-b border-void-800/60 font-mono">
        <div className="flex items-center space-x-3 text-retro-muted">
          <span className="inline-flex items-center space-x-2 text-terminal-green">
            <img
              src={PROFILE_DATA.avatarUrl || '/avatar.png'}
              alt="Avatar"
              className="w-5 h-5 rounded border border-terminal-green/60 object-cover shrink-0"
              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
            />
            <span className="font-bold text-retro-text">kareem@localhost</span>
          </span>
          <span className="text-retro-subtle hidden sm:inline">:</span>
          <span className="text-terminal-cyan hidden sm:inline font-semibold">{getBreadcrumb()}</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          {/* CLI Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center space-x-1.5 px-2 py-1 bg-void-850 hover:bg-void-800 border border-retro-border hover:border-terminal-green/50 text-retro-text hover:text-terminal-green rounded transition text-[11px]"
            title="Open Interactive Command Terminal (Ctrl+K)"
          >
            <Command className="w-3 h-3 text-terminal-green" />
            <span className="hidden md:inline font-mono">CLI</span>
            <kbd className="hidden lg:inline px-1 py-0.2 bg-void-900 border border-retro-border text-[9px] text-retro-muted">Ctrl+K</kbd>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={onToggleScanlines}
            className={`flex items-center space-x-1 px-2 py-1 border text-[11px] rounded transition ${
              scanlinesEnabled
                ? 'bg-terminal-green/10 border-terminal-green text-terminal-green'
                : 'bg-void-850 border-retro-border text-retro-muted hover:text-retro-text'
            }`}
            title="Toggle CRT Scanline Effect"
          >
            <Tv className="w-3 h-3" />
            <span className="hidden sm:inline">CRT</span>
          </button>

          {/* Audio Toggle */}
          <button
            onClick={onToggleSound}
            className={`flex items-center space-x-1 px-2 py-1 border text-[11px] rounded transition ${
              soundEnabled
                ? 'bg-terminal-cyan/10 border-terminal-cyan text-terminal-cyan'
                : 'bg-void-850 border-retro-border text-retro-muted hover:text-retro-text'
            }`}
            title="Toggle Tactile Web Audio Clicks"
          >
            {soundEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
            <span className="hidden sm:inline">AUDIO</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 sm:hidden text-retro-muted hover:text-retro-text border border-retro-border rounded bg-void-850"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Desktop */}
      <nav className="hidden sm:block max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex items-center space-x-6 text-sm font-mono">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors flex items-center space-x-1 py-1 ${
                  isActive
                    ? 'text-terminal-green font-bold border-b-2 border-terminal-green'
                    : 'text-retro-muted hover:text-retro-text hover:border-b-2 hover:border-retro-subtle'
                }`
              }
            >
              <span>{item.label}</span>
            </NavLink>
          ))}
          <div className="flex-1 text-right text-xs text-retro-subtle">
            <span className="hover:text-terminal-amber transition-colors cursor-pointer" onClick={onOpenTerminal}>
              $ type &quot;help&quot; for cli
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav className="sm:hidden border-b border-retro-border bg-void-900 p-4 space-y-3 font-mono">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 border border-retro-border rounded transition ${
                  isActive
                    ? 'bg-terminal-green/10 border-terminal-green text-terminal-green font-bold'
                    : 'text-retro-muted hover:text-retro-text hover:bg-void-850'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-void-800 text-xs text-retro-muted">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2 bg-void-800 border border-retro-border rounded text-terminal-green"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch Terminal CLI</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
