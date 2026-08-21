import React from 'react';
import { NOW_DATA } from '../data/now';
import { Clock, Activity, Cpu, Music, BookOpen, Layers, Terminal } from 'lucide-react';

export const Now: React.FC = () => {
  return (
    <div className="space-y-10 font-mono">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-retro-border pb-4">
        <div>
          <div className="flex items-center space-x-2 text-xs text-terminal-green mb-1">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>STATUS_BOARD // /now</span>
          </div>
          <h1 className="text-3xl font-bold text-retro-text font-display">What I&apos;m Doing Now</h1>
        </div>

        <div className="flex items-center space-x-2 text-xs text-retro-muted bg-void-900 px-3 py-1.5 border border-retro-border rounded">
          <Clock className="w-3.5 h-3.5 text-terminal-cyan" />
          <span>LAST UPDATED: <span className="text-terminal-cyan font-bold">{NOW_DATA.lastUpdated}</span></span>
        </div>
      </div>

      {/* Intro Note */}
      <div className="retro-card p-4 text-xs text-retro-muted border-terminal-green/30">
        <p>
          This is a <strong className="text-terminal-green">/now page</strong> (inspired by Derek Sivers). It serves as a public log of what I&apos;m currently prioritizing, building, reading, and exploring right now in Egypt.
        </p>
      </div>

      {/* Main Focus & Active Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Primary Focus & Reading */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Focus Card */}
          <div className="retro-card p-6 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-terminal-green font-bold border-b border-void-800 pb-3">
              <Cpu className="w-4 h-4" />
              <span>CURRENT_FOCUS</span>
            </div>
            <ul className="space-y-3 text-xs text-retro-text">
              {NOW_DATA.currentFocus.map((f, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 p-3 bg-void-900 border border-void-800 rounded">
                  <span className="text-terminal-green font-bold shrink-0">→</span>
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Active Projects Tracker */}
          <div className="retro-card p-6 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-terminal-cyan font-bold border-b border-void-800 pb-3">
              <Layers className="w-4 h-4" />
              <span>ACTIVE_PROJECT_DISPATCH</span>
            </div>
            <div className="space-y-4">
              {NOW_DATA.activeProjects.map((p, idx) => (
                <div key={idx} className="p-4 bg-void-900 border border-void-800 rounded space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-retro-text">{p.name}</span>
                    <span className="px-2 py-0.5 bg-void-850 border border-retro-border text-[10px] text-terminal-cyan">
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-xs text-retro-muted">{p.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-[10px] text-retro-subtle mb-1">
                      <span>PROGRESS</span>
                      <span className="text-terminal-green font-bold">{p.progress}%</span>
                    </div>
                    <div className="w-full bg-void-950 h-2 rounded-full overflow-hidden border border-retro-border">
                      <div
                        className="bg-terminal-green h-full transition-all duration-500"
                        style={{ width: `${p.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Reading, Playlist, System Log */}
        <div className="space-y-6">
          {/* Reading List */}
          <div className="retro-card p-6 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-terminal-amber font-bold border-b border-void-800 pb-3">
              <BookOpen className="w-4 h-4" />
              <span>READING_&_EXPLORING</span>
            </div>
            <ul className="space-y-2 text-xs text-retro-muted">
              {NOW_DATA.readingAndExploring.map((b, idx) => (
                <li key={idx} className="p-2 bg-void-900 border border-void-800 rounded flex items-start space-x-2">
                  <span className="text-terminal-amber font-bold">📖</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Audio & Music Playlist */}
          <div className="retro-card p-6 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-terminal-purple font-bold border-b border-void-800 pb-3">
              <Music className="w-4 h-4" />
              <span>AUDIO_PLAYLIST</span>
            </div>
            <ul className="space-y-2 text-xs text-retro-muted">
              {NOW_DATA.listeningTo.map((track, idx) => (
                <li key={idx} className="p-2 bg-void-900 border border-void-800 rounded flex items-center space-x-2">
                  <span className="text-terminal-purple font-bold">🎵</span>
                  <span>{track}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Live System Log Snippet */}
          <div className="retro-card p-6 space-y-3 bg-void-950">
            <div className="flex items-center space-x-2 text-xs text-terminal-green font-bold border-b border-void-800 pb-2">
              <Terminal className="w-4 h-4" />
              <span>SYS_EVENT_LOG</span>
            </div>
            <div className="space-y-1.5 text-[11px] text-retro-muted font-mono leading-tight">
              {NOW_DATA.systemLogSnippet.map((log, idx) => (
                <div key={idx} className="line-clamp-2">{log}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
