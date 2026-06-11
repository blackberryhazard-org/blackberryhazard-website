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
      <header className="sticky top-0 z-40 w-full bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-outline-variant)] px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[var(--color-primary)] flex items-center justify-center shadow-none transition-transform group-hover:scale-105">
            <Icon icon="lucide:code-square" className="w-4 h-4 text-[var(--color-surface-container-highest)]" />
          </div>
          <span className="font-bold text-xl tracking-tight text-on-surface group-hover:text-[var(--color-primary)] transition-colors uppercase tracking-[0.05em]">{config.title}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {menuItems.map((item) => {
            const isActive = (activePath === '' && item.href === '#') || activePath === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors uppercase tracking-wider ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-on-surface-variant)] hover:text-on-surface'}`}
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
            className="block md:hidden p-2 text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] transition border border-outline-variant hover:border-[var(--color-outline-variant)]"
            aria-label="Buka Menu"
          >
            <Icon icon="lucide:menu" className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Backdrop */}
      <div
        className={`fixed inset-0 bg-[var(--color-surface)]/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Half-Sidebar */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[70%] sm:w-[50%] bg-[var(--color-surface-container-highest)] border-l border-[var(--color-outline-variant)] z-50 transition-transform duration-300 ease-out flex flex-col md:hidden shadow-none ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b border-[var(--color-outline-variant)] flex justify-between items-center bg-[var(--color-surface)]">
          <span className="font-bold text-outline text-xs tracking-wider uppercase">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1.5 text-[var(--color-on-surface)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)] transition border border-outline-variant hover:border-[var(--color-outline-variant)]"
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
                ? 'bg-[var(--color-surface-container)] text-[var(--color-primary)] border border-[var(--color-primary)] shadow-none'
                : 'text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] hover:text-[var(--color-primary)] border border-outline-variant hover:border-[var(--color-outline-variant)]'
            }`;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={linkClasses}
              >
                <Icon icon={item.icon} className={`w-5 h-5 ${isActive ? "text-[var(--color-primary)]" : "text-outline"}`} />
                <span className="font-medium text-base tracking-wide uppercase">{item.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[var(--color-outline-variant)] bg-[var(--color-surface)]">
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
