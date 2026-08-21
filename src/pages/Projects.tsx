import React, { useState, useMemo } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS_DATA } from '../data/projects';
import { Code2, Grid, List, Search, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'Fullstack', 'AI / Web', 'Multiplayer / Web3', 'Interactive Game', 'Frontend / Tool'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const categoryMatch = selectedCategory === 'ALL' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const searchMatch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8 font-mono">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-retro-border pb-4">
        <div>
          <div className="flex items-center space-x-2 text-xs text-terminal-green mb-1">
            <Code2 className="w-4 h-4" />
            <span>PROJECT_ARCHIVE // 007 ENTRIES</span>
          </div>
          <h1 className="text-3xl font-bold text-retro-text font-display">Project Archive</h1>
        </div>

        {/* View Mode Controls */}
        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center space-x-1 px-3 py-1.5 border rounded transition ${
              viewMode === 'grid'
                ? 'bg-terminal-green/10 border-terminal-green text-terminal-green font-bold'
                : 'bg-void-850 border-retro-border text-retro-muted hover:text-retro-text'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>GRID</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center space-x-1 px-3 py-1.5 border rounded transition ${
              viewMode === 'list'
                ? 'bg-terminal-cyan/10 border-terminal-cyan text-terminal-cyan font-bold'
                : 'bg-void-850 border-retro-border text-retro-muted hover:text-retro-text'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>UNIX_LIST</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-void-900 p-4 border border-retro-border rounded">
        {/* Category Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-retro-subtle shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 text-xs border rounded whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-terminal-green text-void-950 border-terminal-green font-bold'
                  : 'bg-void-850 border-retro-border text-retro-muted hover:text-retro-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-retro-subtle absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="search projects, tags..."
            className="w-full bg-void-950 border border-retro-border rounded pl-9 pr-3 py-1.5 text-xs text-retro-text outline-none focus:border-terminal-green transition"
          />
        </div>
      </div>

      {/* Filter Status Count */}
      <div className="text-xs text-retro-muted flex items-center justify-between">
        <span>SHOWING {filteredProjects.length} OF {PROJECTS_DATA.length} PROJECTS</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-terminal-amber hover:underline text-[11px]"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Projects Display */}
      {filteredProjects.length === 0 ? (
        <div className="retro-card p-12 text-center space-y-3">
          <p className="text-terminal-amber text-sm font-bold">No project entries matched your search query.</p>
          <p className="text-xs text-retro-muted">Try resetting search filters or category selections.</p>
          <button
            onClick={() => {
              setSelectedCategory('ALL');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-void-850 border border-retro-border text-xs text-terminal-green hover:bg-terminal-green hover:text-void-950 transition font-bold rounded"
          >
            RESET ALL FILTERS
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} viewMode="grid" />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} viewMode="list" />
          ))}
        </div>
      )}
    </div>
  );
};
