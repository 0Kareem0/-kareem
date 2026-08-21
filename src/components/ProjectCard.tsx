import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  viewMode?: 'grid' | 'list';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="retro-card p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono hover:border-terminal-green/40 group">
        <div className="flex items-center space-x-4">
          <span className="text-xs text-terminal-cyan font-bold px-2 py-0.5 bg-void-900 border border-retro-border">
            {project.id}
          </span>
          <div>
            <Link
              to={`/projects/${project.slug}`}
              className="text-base font-bold text-retro-text group-hover:text-terminal-green transition-colors flex items-center space-x-2"
            >
              <span>{project.title}</span>
              <span className="text-xs text-retro-subtle font-normal">({project.category})</span>
            </Link>
            <p className="text-xs text-retro-muted mt-0.5 line-clamp-1">{project.description}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <div className="hidden lg:flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((t) => (
              <span key={t} className="px-1.5 py-0.5 bg-void-850 border border-void-800 text-[10px] text-retro-muted">
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 bg-terminal-green/10 border border-terminal-green/40 hover:bg-terminal-green hover:text-void-950 text-terminal-green rounded transition"
            title="Live Demo"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 bg-void-850 border border-retro-border hover:border-retro-muted text-retro-muted hover:text-retro-text rounded transition"
            title="GitHub Code Repository"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <Link
            to={`/projects/${project.slug}`}
            className="px-2.5 py-1 bg-void-800 border border-retro-border hover:border-terminal-cyan text-retro-text hover:text-terminal-cyan text-[11px] rounded transition flex items-center space-x-1"
          >
            <span>CASE STUDY</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="retro-card p-6 flex flex-col justify-between font-mono hover:border-terminal-green/50 group relative overflow-hidden">
      {/* Top Number & Category */}
      <div>
        <div className="flex items-center justify-between text-xs text-retro-muted mb-3 border-b border-void-800 pb-2">
          <span className="text-terminal-green font-bold flex items-center space-x-1">
            <Code2 className="w-3.5 h-3.5" />
            <span>PROJECT_{project.id}</span>
          </span>
          <span className="px-2 py-0.5 bg-void-900 border border-retro-border text-[10px] text-terminal-cyan">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <Link
          to={`/projects/${project.slug}`}
          className="block group-hover:text-terminal-green transition-colors"
        >
          <h3 className="text-xl font-bold text-retro-text tracking-tight flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-terminal-green" />
          </h3>
          <p className="text-xs text-terminal-amber/90 mt-1 font-semibold">{project.subtitle}</p>
        </Link>

        {/* Description */}
        <p className="text-xs text-retro-muted mt-3 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Key Features Bullet List */}
        <div className="mt-4 space-y-1">
          {project.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start space-x-1.5 text-[11px] text-retro-subtle">
              <span className="text-terminal-green select-none">[+]</span>
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Tags & Actions */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-void-900 border border-void-800 text-[10px] text-retro-muted hover:text-retro-text transition"
            >
              #{tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-void-800 text-xs">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1 px-2 py-1.5 bg-terminal-green/10 border border-terminal-green/40 hover:bg-terminal-green hover:text-void-950 text-terminal-green rounded transition text-[11px] font-bold"
          >
            <ExternalLink className="w-3 h-3" />
            <span>LIVE</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1 px-2 py-1.5 bg-void-850 border border-retro-border hover:border-retro-muted text-retro-muted hover:text-retro-text rounded transition text-[11px]"
          >
            <Github className="w-3 h-3" />
            <span>CODE</span>
          </a>
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center justify-center space-x-1 px-2 py-1.5 bg-void-800 border border-retro-border hover:border-terminal-cyan text-retro-text hover:text-terminal-cyan rounded transition text-[11px]"
          >
            <span>DETAILS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
