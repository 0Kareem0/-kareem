import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { PROFILE_DATA } from '../data/profile';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    { id: '1', type: 'output', text: 'KAREEM OS v6.12 [UNIX INTERACTIVE CLI shell]' },
    { id: '2', type: 'output', text: 'Type "help" for a list of commands, or "projects" to list all 7 archives.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newLogs: CommandLog[] = [
      ...history,
      { id: Date.now().toString(), type: 'input', text: `kareem@localhost:~$ ${trimmed}` }
    ];

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    switch (mainCmd) {
      case 'help':
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help              Show this command index
  whoami            Print identity details
  ls / dir          List virtual files & pages
  projects          List all 7 project archives
  cat <file>        Read file contents (e.g. cat about.txt, cat now.txt)
  cd <path>         Navigate routes (e.g. cd /projects, cd /about, cd /contact, cd /now)
  socials           List official social profiles
  contact font      Open contact form page
  clear             Clear terminal screen
  matrix            Trigger atmospheric matrix mode
  date              Print current system date & time`
        });
        break;

      case 'whoami':
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'success',
          text: `Kareem — ${PROFILE_DATA.role}\nLocation: ${PROFILE_DATA.location}\nStatus: ${PROFILE_DATA.status}`
        });
        break;

      case 'ls':
      case 'dir':
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `DIRECTORY CONTENTS (~/):
  drwxr-xr-x  home/         -> /
  drwxr-xr-x  about/        -> /about
  drwxr-xr-x  projects/     -> /projects (7 items)
  drwxr-xr-x  now/          -> /now
  drwxr-xr-x  contact/      -> /contact
  -rw-r--r--  about.txt
  -rw-r--r--  now.txt
  -rw-r--r--  projects.json`
        });
        break;

      case 'projects':
        const projList = PROJECTS_DATA.map(p => `  ${p.id} / ${p.title.padEnd(18)} [${p.category}] -> /projects/${p.slug}`).join('\n');
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `PROJECT ARCHIVES:\n${projList}\n\nType "cd /projects/<slug>" to jump directly!`
        });
        break;

      case 'cat':
        if (arg === 'about.txt' || arg === 'about') {
          newLogs.push({
            id: (Date.now() + 1).toString(),
            type: 'output',
            text: `[ABOUT.TXT]\n${PROFILE_DATA.bio}\n\nPhilosophy: ${PROFILE_DATA.philosophy}`
          });
        } else if (arg === 'now.txt' || arg === 'now') {
          newLogs.push({
            id: (Date.now() + 1).toString(),
            type: 'output',
            text: `[NOW.TXT]\nLocation: ${PROFILE_DATA.location}\nStatus: ${PROFILE_DATA.status}`
          });
        } else {
          newLogs.push({
            id: (Date.now() + 1).toString(),
            type: 'error',
            text: `cat: ${arg || 'file'}: No such file. Try "cat about.txt" or "cat now.txt".`
          });
        }
        break;

      case 'cd':
        if (!arg || arg === '~' || arg === '/' || arg === '/home') {
          navigate('/');
          newLogs.push({ id: (Date.now() + 1).toString(), type: 'success', text: 'Navigated to ~/home' });
          onClose();
        } else if (arg === '/about' || arg === 'about') {
          navigate('/about');
          newLogs.push({ id: (Date.now() + 1).toString(), type: 'success', text: 'Navigated to ~/about' });
          onClose();
        } else if (arg === '/projects' || arg === 'projects') {
          navigate('/projects');
          newLogs.push({ id: (Date.now() + 1).toString(), type: 'success', text: 'Navigated to ~/projects' });
          onClose();
        } else if (arg === '/now' || arg === 'now') {
          navigate('/now');
          newLogs.push({ id: (Date.now() + 1).toString(), type: 'success', text: 'Navigated to ~/now' });
          onClose();
        } else if (arg === '/contact' || arg === 'contact') {
          navigate('/contact');
          newLogs.push({ id: (Date.now() + 1).toString(), type: 'success', text: 'Navigated to ~/contact' });
          onClose();
        } else if (arg.startsWith('/projects/') || arg.startsWith('projects/')) {
          const slug = arg.split('/').pop();
          const found = PROJECTS_DATA.find(p => p.slug === slug || p.id === slug);
          if (found) {
            navigate(`/projects/${found.slug}`);
            newLogs.push({ id: (Date.now() + 1).toString(), type: 'success', text: `Navigated to project: ${found.title}` });
            onClose();
          } else {
            newLogs.push({ id: (Date.now() + 1).toString(), type: 'error', text: `cd: Project "${slug}" not found in archive.` });
          }
        } else {
          newLogs.push({ id: (Date.now() + 1).toString(), type: 'error', text: `cd: Directory "${arg}" not found.` });
        }
        break;

      case 'socials':
        const socs = PROFILE_DATA.socials.map(s => `  ${s.name.padEnd(12)} -> ${s.url}`).join('\n');
        newLogs.push({ id: (Date.now() + 1).toString(), type: 'output', text: `SOCIAL CONNECTIONS:\n${socs}` });
        break;

      case 'contact':
        navigate('/contact');
        newLogs.push({ id: (Date.now() + 1).toString(), type: 'success', text: 'Opening contact interface...' });
        onClose();
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'matrix':
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'success',
          text: '01001011 01000001 01010010 01000101 01000101 01001101\nWake up, Neo... The Matrix has you.'
        });
        break;

      case 'date':
        newLogs.push({ id: (Date.now() + 1).toString(), type: 'output', text: new Date().toString() });
        break;

      default:
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'error',
          text: `command not found: "${mainCmd}". Type "help" for command list.`
        });
        break;
    }

    setHistory(newLogs);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-3xl h-[550px] bg-void-950 border border-retro-border rounded-lg shadow-terminal flex flex-col overflow-hidden font-mono text-xs">
        {/* Modal Window Bar */}
        <div className="px-4 py-2.5 bg-void-900 border-b border-retro-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TerminalIcon className="w-4 h-4 text-terminal-green" />
            <span className="font-bold text-retro-text">KAREEM_CLI_SHELL // INTERACTIVE</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-retro-muted hidden sm:inline">ESC or click X to close</span>
            <button
              onClick={onClose}
              className="p-1 hover:bg-void-800 text-retro-muted hover:text-terminal-red rounded transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Command History Display */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-void-950 font-mono">
          {history.map((log) => (
            <div
              key={log.id}
              className={`whitespace-pre-wrap ${
                log.type === 'input'
                  ? 'text-terminal-cyan font-semibold'
                  : log.type === 'error'
                  ? 'text-terminal-red'
                  : log.type === 'success'
                  ? 'text-terminal-green'
                  : 'text-retro-text'
              }`}
            >
              {log.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="p-3 bg-void-900 border-t border-retro-border flex items-center space-x-2"
        >
          <span className="text-terminal-green font-bold select-none">kareem@localhost:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type 'help', 'projects', 'whoami'..."
            className="flex-1 bg-transparent text-retro-text outline-none font-mono focus:ring-0 placeholder:text-retro-subtle"
          />
          <button
            type="submit"
            className="p-1.5 bg-terminal-green/10 hover:bg-terminal-green/20 border border-terminal-green/40 text-terminal-green rounded transition"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
