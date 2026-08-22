import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Terminal, Send, Github, Instagram, Twitter, Check, Copy, ShieldAlert, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', handleOrEmail: '', message: '' });
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setStatusMsg('ERR: Please fill in your name/handle and message content before dispatch.');
      return;
    }

    setIsSending(true);
    setStatusMsg(null);

    const accessKey = (import.meta as unknown as { env: Record<string, string> }).env?.VITE_WEB3FORMS_ACCESS_KEY || 'e51bfd54-a4d5-4192-8b3d-3f46b57fe7ce';

    // Validate email format required by Web3Forms
    const inputEmail = formData.handleOrEmail.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
    const senderEmail = isValidEmail ? inputEmail : 'visitor@kareem-portfolio.dev';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: senderEmail,
          message: `${formData.message}${!isValidEmail && inputEmail ? `\n\n[Sender Contact Handle]: ${inputEmail}` : ''}`,
          subject: `Portfolio Transmission from ${formData.name}`,
          from_name: 'Kareem Terminal Dispatch',
        }),
      });

      const result = await response.json();

      setIsSending(false);
      if (result.success) {
        setStatusMsg('SUCCESS: Transmission packet sent directly to Kareem\'s inbox! Will respond shortly.');
        setFormData({ name: '', handleOrEmail: '', message: '' });
      } else {
        setStatusMsg(`ERR: ${result.message || 'Transmission refused by Web3Forms API.'}`);
      }
    } catch {
      setIsSending(false);
      setStatusMsg('ERR: Network connection error. Could not connect to dispatch server.');
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(label);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  return (
    <div className="space-y-10 font-mono">
      {/* Page Header */}
      <div className="border-b border-retro-border pb-4">
        <div className="flex items-center space-x-2 text-xs text-terminal-green mb-1">
          <Terminal className="w-4 h-4" />
          <span>COMM_TERMINAL // CONTACT</span>
        </div>
        <h1 className="text-3xl font-bold text-retro-text font-display">Communication Dispatch</h1>
        <p className="text-xs text-retro-muted mt-1">
          Reach out if you want to collaborate on a project, discuss low-level web tech, or connect across socials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Terminal Message Dispatch Form */}
        <div className="lg:col-span-2 retro-card p-6 md:p-8 space-y-6 border-terminal-green/30">
          <div className="flex items-center justify-between border-b border-void-800 pb-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-terminal-red/80"></span>
              <span className="w-3 h-3 rounded-full bg-terminal-amber/80"></span>
              <span className="w-3 h-3 rounded-full bg-terminal-green/80"></span>
              <span className="text-xs text-retro-muted ml-2 font-mono">sendmail --to kareem@localhost</span>
            </div>
            <span className="text-[10px] text-terminal-green font-bold">PORT_25 // ENCRYPTED</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-retro-muted mb-1 font-bold">SENDER_NAME / HANDLE *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex // alex_dev"
                  className="w-full bg-void-900 border border-retro-border rounded px-3 py-2 text-retro-text outline-none focus:border-terminal-green transition"
                />
              </div>
              <div>
                <label className="block text-retro-muted mb-1 font-bold">CONTACT_INFO (EMAIL / X / DISCORD)</label>
                <input
                  type="text"
                  value={formData.handleOrEmail}
                  onChange={(e) => setFormData({ ...formData, handleOrEmail: e.target.value })}
                  placeholder="e.g. alex@domain.com or @alex_x"
                  className="w-full bg-void-900 border border-retro-border rounded px-3 py-2 text-retro-text outline-none focus:border-terminal-green transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-retro-muted mb-1 font-bold">TRANSMISSION_PAYLOAD / MESSAGE *</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your transmission payload here..."
                className="w-full bg-void-900 border border-retro-border rounded p-3 text-retro-text outline-none focus:border-terminal-green transition resize-none"
              ></textarea>
            </div>

            {statusMsg && (
              <div className={`p-3 border rounded font-mono text-xs ${
                statusMsg.startsWith('SUCCESS')
                  ? 'bg-terminal-green/10 border-terminal-green text-terminal-green'
                  : 'bg-terminal-red/10 border-terminal-red text-terminal-red'
              }`}>
                {statusMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 bg-terminal-green text-void-950 font-bold text-xs rounded hover:bg-terminal-green-dim transition flex items-center justify-center space-x-2 shadow-glow-green"
            >
              {isSending ? (
                <span>DISPATCHING PACKET...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE TO KAREEM</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Col: Official Social Cards */}
        <div className="space-y-4 font-mono">
          <div className="retro-card p-6 space-y-4">
            <div className="text-xs text-retro-muted font-bold border-b border-void-800 pb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-terminal-cyan" />
              <span>OFFICIAL_SOCIAL_LINKS</span>
            </div>

            <div className="space-y-3">
              {/* GitHub Card */}
              <div className="p-3 bg-void-900 border border-retro-border hover:border-terminal-green rounded transition space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-retro-text text-xs font-bold">
                    <Github className="w-4 h-4 text-terminal-green" />
                    <span>GitHub</span>
                  </div>
                  <button
                    onClick={() => handleCopy('https://github.com/0Kareem0', 'github')}
                    className="p-1 text-retro-muted hover:text-terminal-green text-[10px]"
                    title="Copy Link"
                  >
                    {copiedHandle === 'github' ? <Check className="w-3.5 h-3.5 text-terminal-green" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href="https://github.com/0Kareem0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-terminal-cyan hover:underline block truncate"
                >
                  github.com/0Kareem0
                </a>
              </div>

              {/* Instagram Card */}
              <div className="p-3 bg-void-900 border border-retro-border hover:border-terminal-purple rounded transition space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-retro-text text-xs font-bold">
                    <Instagram className="w-4 h-4 text-terminal-purple" />
                    <span>Instagram</span>
                  </div>
                  <button
                    onClick={() => handleCopy('https://www.instagram.com/kareemz01', 'instagram')}
                    className="p-1 text-retro-muted hover:text-terminal-purple text-[10px]"
                    title="Copy Link"
                  >
                    {copiedHandle === 'instagram' ? <Check className="w-3.5 h-3.5 text-terminal-purple" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href="https://www.instagram.com/kareemz01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-terminal-cyan hover:underline block truncate"
                >
                  instagram.com/kareemz01
                </a>
              </div>

              {/* X / Twitter Card */}
              <div className="p-3 bg-void-900 border border-retro-border hover:border-terminal-cyan rounded transition space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-retro-text text-xs font-bold">
                    <Twitter className="w-4 h-4 text-terminal-cyan" />
                    <span>X / Twitter</span>
                  </div>
                  <button
                    onClick={() => handleCopy('https://x.com/KareemLost001', 'twitter')}
                    className="p-1 text-retro-muted hover:text-terminal-cyan text-[10px]"
                    title="Copy Link"
                  >
                    {copiedHandle === 'twitter' ? <Check className="w-3.5 h-3.5 text-terminal-cyan" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href="https://x.com/KareemLost001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-terminal-cyan hover:underline block truncate"
                >
                  x.com/KareemLost001
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
