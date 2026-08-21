import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScanlineOverlay } from './ScanlineOverlay';
import { TerminalDrawer } from './TerminalDrawer';
import { useSoundEffects } from '../hooks/useSoundEffects';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scanlinesEnabled, setScanlinesEnabled] = useState<boolean>(true);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const { soundEnabled, toggleSound, playKeyClick } = useSoundEffects();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClickCapture = () => {
    if (soundEnabled) {
      playKeyClick();
    }
  };

  return (
    <div onClickCapture={handleClickCapture} className="min-h-screen flex flex-col bg-void-950 bg-grid-pattern relative">
      <ScanlineOverlay enabled={scanlinesEnabled} />
      
      <Header
        scanlinesEnabled={scanlinesEnabled}
        onToggleScanlines={() => setScanlinesEnabled(!scanlinesEnabled)}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />

      <TerminalDrawer isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
};
