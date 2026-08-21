import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="retro-card p-12 text-center space-y-6 font-mono border-terminal-red/50 max-w-2xl mx-auto my-12">
      <div className="flex justify-center">
        <div className="p-4 bg-terminal-red/10 border border-terminal-red/40 text-terminal-red rounded-full">
          <Terminal className="w-8 h-8" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-terminal-red font-display">ERR 404: PATH_NOT_FOUND</h1>
      <p className="text-xs text-retro-muted max-w-md mx-auto">
        The system path you attempted to access does not exist on Kareem&apos;s virtual host kernel.
      </p>

      <div className="pt-4 border-t border-void-800 flex justify-center">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-2.5 bg-terminal-green text-void-950 font-bold text-xs rounded hover:bg-terminal-green-dim transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO ~/HOME</span>
        </Link>
      </div>
    </div>
  );
};
