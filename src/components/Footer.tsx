import React, { useState, useEffect } from 'react';
import { Github, Instagram, Twitter, ShieldCheck, Cpu } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Footer: React.FC = () => {
  const [uptimeSeconds, setUptimeSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <footer className="border-t border-retro-border bg-void-950 text-xs font-mono py-8 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Column: Host Details */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-retro-text font-bold">
            <Cpu className="w-4 h-4 text-terminal-green" />
            <span>KAREEM_SYSTEM_HOST // VIRTUAL_NODE</span>
          </div>
          <p className="text-retro-muted text-[11px]">
            Personal developer space built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="flex items-center space-x-2 text-[11px] text-retro-subtle">
            <span>LOCATION: {PROFILE_DATA.location}</span>
            <span>•</span>
            <span className="text-terminal-cyan">KERN: 6.12.0-custom</span>
          </div>
        </div>

        {/* Center Column: System Metrics */}
        <div className="flex flex-col items-start md:items-center space-y-1.5 py-2 border-y md:border-y-0 md:border-x border-void-800/80 px-4">
          <div className="flex items-center space-x-2 text-retro-muted text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-terminal-green" />
            <span>STATUS: <span className="text-terminal-green font-bold">ONLINE</span></span>
            <span>•</span>
            <span>PING: <span className="text-terminal-amber">24ms</span></span>
          </div>
          <div className="text-retro-muted text-[11px]">
            SESSION UPTIME: <span className="text-terminal-cyan font-mono">{formatUptime(uptimeSeconds)}</span>
          </div>
          <div className="text-[10px] text-retro-subtle">
            UTF-8 // ANSI COMPLIANT // SCANLINES OPTIONAL
          </div>
        </div>

        {/* Right Column: Social Links & Copyright */}
        <div className="flex flex-col items-start md:items-end space-y-3">
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/0Kareem0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-void-900 border border-retro-border hover:border-terminal-green text-retro-muted hover:text-terminal-green rounded transition"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/kareemz01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-void-900 border border-retro-border hover:border-terminal-purple text-retro-muted hover:text-terminal-purple rounded transition"
              title="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/KareemLost001"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-void-900 border border-retro-border hover:border-terminal-cyan text-retro-muted hover:text-terminal-cyan rounded transition"
              title="X / Twitter Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
          <div className="text-[11px] text-retro-subtle">
            © {new Date().getFullYear()} Kareem (0Kareem0). All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
