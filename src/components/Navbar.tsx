import { Icon } from "@iconify/react";
import { useState, useEffect } from 'react';
import { config } from '../config';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const getIconForLink = (label: string) => {
    switch (label.toLowerCase()) {
      case 'komunitas': return "lucide:users";
      case 'testimoni': return "lucide:message-square";
      default: return "lucide:terminal";
    }
  };

  const menuItems = [
    { name: 'Home', href: '#', icon: "lucide:code" },
    ...config.navbar.links.map(link => ({
      name: link.label,
      href: link.url,
      icon: getIconForLink(link.label)
    }))
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#0e150f]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.05)] px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#4ade80] flex items-center justify-center shadow-[0_0_10px_rgba(74,222,128,0.3)] transition-transform group-hover:scale-105">
            <Icon icon="lucide:code-square" className="w-4 h-4 text-[#121212]" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#4ade80] transition-colors uppercase tracking-[0.05em]">{config.title}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {menuItems.map((item) => {
            const isActive = (activePath === '' && item.href === '#') || activePath === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors uppercase tracking-wider ${isActive ? 'text-[#4ade80]' : 'text-[#bccabb] hover:text-white'}`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#community" className="hidden md:flex items-center justify-center gap-2 btn-primary px-6 py-2 text-sm uppercase tracking-wider">
            <Icon icon="lucide:users" className="w-4 h-4" />
            Join Server
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden p-2 text-[#dde5da] hover:bg-[#1a120c] transition border border-transparent hover:border-[rgba(255,255,255,0.05)]"
            aria-label="Buka Menu"
          >
            <Icon icon="lucide:menu" className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Backdrop */}
      <div
        className={`fixed inset-0 bg-[#0e150f]/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Half-Sidebar */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[70%] sm:w-[50%] bg-[#121212] border-l border-[rgba(255,255,255,0.05)] z-50 transition-transform duration-300 ease-out flex flex-col md:hidden shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b border-[rgba(255,255,255,0.05)] flex justify-between items-center bg-[#0e150f]">
          <span className="font-bold text-[#869486] text-xs tracking-wider uppercase">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1.5 text-[#dde5da] hover:text-[#4ade80] hover:bg-[#1a120c] transition border border-transparent hover:border-[rgba(255,255,255,0.05)]"
            aria-label="Tutup Menu"
          >
            <Icon icon="lucide:x" className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 flex-1 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = (activePath === '' && item.href === '#') || activePath === item.href;

            const linkClasses = `flex items-center gap-3 px-4 py-3 transition-colors ${
              isActive
                ? 'bg-[#1a120c] text-[#4ade80] border border-[#4ade80] shadow-[0_0_5px_rgba(74,222,128,0.2)]'
                : 'text-[#dde5da] hover:bg-[#1a120c] hover:text-[#4ade80] border border-transparent hover:border-[rgba(255,255,255,0.05)]'
            }`;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={linkClasses}
              >
                <Icon icon={item.icon} className={`w-5 h-5 ${isActive ? "text-[#4ade80]" : "text-[#869486]"}`} />
                <span className="font-medium text-base tracking-wide uppercase">{item.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[rgba(255,255,255,0.05)] bg-[#0e150f]">
          <a
            href="#community"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full btn-primary py-4 text-base uppercase tracking-wider"
          >
            <Icon icon="lucide:users" className="w-5 h-5" />
            Join Server
          </a>
        </div>
      </aside>
    </>
  );
}
