import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';
import { ExternalLink, Github, ArrowLeft, ArrowRight, Code2, ShieldCheck, Cpu, Terminal, CheckCircle2, Copy, Check } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = useState(false);

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug || p.id === slug);
  const project = PROJECTS_DATA[currentIndex];

  if (!project) {
    return (
      <div className="retro-card p-12 text-center space-y-4 font-mono">
        <h2 className="text-xl font-bold text-terminal-red">ERR 404: PROJECT_NOT_FOUND</h2>
        <p className="text-xs text-retro-muted">The project slug &quot;{slug}&quot; does not exist in the archive index.</p>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-void-850 border border-retro-border text-terminal-green text-xs hover:bg-terminal-green hover:text-void-950 transition font-bold rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO ARCHIVE</span>
        </Link>
      </div>
    );
  }

  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="space-y-10 font-mono">
      {/* Back Button */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 text-xs text-retro-muted hover:text-terminal-green transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← BACK TO PROJECTS ARCHIVE</span>
        </Link>
      </div>

      {/* Main Header Card */}
      <div className="retro-card p-6 md:p-8 space-y-6 border-terminal-green/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-void-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-0.5 bg-terminal-green/10 border border-terminal-green/40 text-terminal-green text-xs font-bold">
                PROJECT {project.id}
              </span>
              <span className="text-xs text-terminal-cyan px-2 py-0.5 bg-void-900 border border-retro-border">
                {project.category}
              </span>
              <span className="text-xs text-terminal-amber flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{project.status}</span>
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-retro-text tracking-tight pt-1 font-display">
              {project.title}
            </h1>
            <p className="text-sm text-terminal-amber/90 font-semibold">{project.subtitle}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-terminal-green text-void-950 font-bold text-xs rounded hover:bg-terminal-green-dim transition shadow-glow-green"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-void-850 border border-retro-border hover:border-retro-muted text-retro-text text-xs rounded transition"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE CODE</span>
            </a>
          </div>
        </div>

        {/* Short Summary */}
        <p className="text-sm text-retro-text leading-relaxed">
          {project.longDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-void-900 border border-void-800 text-xs text-retro-muted font-bold"
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>

      {/* Code Snippet / Technical Preview Box */}
      {project.codeSnippet && (
        <div className="retro-card p-6 bg-void-950 space-y-4">
          <div className="flex items-center justify-between border-b border-void-800 pb-3 text-xs text-retro-muted">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-terminal-cyan" />
              <span className="text-terminal-cyan font-bold">CORE_ARCHITECTURAL_SNIPPET</span>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center space-x-1 px-2.5 py-1 bg-void-900 border border-retro-border hover:border-terminal-green text-retro-muted hover:text-terminal-green rounded transition text-[11px]"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-terminal-green" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'COPIED' : 'COPY'}</span>
            </button>
          </div>
          <pre className="p-4 bg-void-900 border border-retro-border rounded font-mono text-xs text-terminal-green/90 overflow-x-auto leading-relaxed">
            <code>{project.codeSnippet}</code>
          </pre>
        </div>
      )}

      {/* Two Column Layout: Key Features & Technical Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Key Features */}
        <div className="retro-card p-6 space-y-4">
          <div className="flex items-center space-x-2 text-xs text-terminal-green font-bold border-b border-void-800 pb-3">
            <Code2 className="w-4 h-4" />
            <span>KEY_FEATURES</span>
          </div>
          <ul className="space-y-3 text-xs text-retro-text">
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-start space-x-2 p-2 bg-void-900 border border-void-800 rounded">
                <span className="text-terminal-green font-bold shrink-0">[+]</span>
                <span className="leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Highlights */}
        <div className="retro-card p-6 space-y-4">
          <div className="flex items-center space-x-2 text-xs text-terminal-cyan font-bold border-b border-void-800 pb-3">
            <Cpu className="w-4 h-4" />
            <span>ENGINEERING_HIGHLIGHTS</span>
          </div>
          <ul className="space-y-3 text-xs text-retro-text">
            {project.technicalHighlights.map((high, i) => (
              <li key={i} className="flex items-start space-x-2 p-2 bg-void-900 border border-void-800 rounded">
                <CheckCircle2 className="w-3.5 h-3.5 text-terminal-cyan shrink-0 mt-0.5" />
                <span className="leading-relaxed">{high}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* What I Learned Case Study Note */}
      <div className="retro-card p-6 space-y-3 border-terminal-amber/30">
        <div className="text-xs text-terminal-amber font-bold flex items-center space-x-2 border-b border-void-800 pb-2">
          <span>WHAT_I_LEARNED // RETROSPECTIVE</span>
        </div>
        <p className="text-xs sm:text-sm text-retro-text leading-relaxed">
          {project.whatILearned}
        </p>
      </div>

      {/* Prev / Next Project Switcher Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-retro-border">
        <Link
          to={`/projects/${prevProject.slug}`}
          className="p-4 retro-card hover:border-terminal-cyan flex items-center justify-between group"
        >
          <div>
            <span className="text-[10px] text-retro-muted block">PREVIOUS PROJECT</span>
            <span className="text-sm font-bold text-retro-text group-hover:text-terminal-cyan transition">
              ← {prevProject.title}
            </span>
          </div>
          <span className="text-xs text-retro-subtle font-mono">00{prevProject.id}</span>
        </Link>

        <Link
          to={`/projects/${nextProject.slug}`}
          className="p-4 retro-card hover:border-terminal-green flex items-center justify-between text-right group"
        >
          <span className="text-xs text-retro-subtle font-mono">00{nextProject.id}</span>
          <div>
            <span className="text-[10px] text-retro-muted block">NEXT PROJECT</span>
            <span className="text-sm font-bold text-retro-text group-hover:text-terminal-green transition">
              {nextProject.title} →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
