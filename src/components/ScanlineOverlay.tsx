import React from 'react';

interface ScanlineOverlayProps {
  enabled: boolean;
}

export const ScanlineOverlay: React.FC<ScanlineOverlayProps> = ({ enabled }) => {
  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none">
      {/* Scanline pattern */}
      <div className="absolute inset-0 scanline-layer opacity-60" />
      
      {/* Subtle CRT Vignette */}
      <div className="absolute inset-0 crt-vignette opacity-70" />

      {/* Moving scanline beam */}
      <div className="absolute left-0 right-0 h-2 bg-terminal-green/5 blur-sm animate-scanline" />
    </div>
  );
};
