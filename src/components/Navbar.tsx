import { Menu, X, Terminal, Users, MessageSquare, Code, ChevronRight, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { config } from '../config';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    'Navigation': true
  });

  // Simulating active path for a single-page app
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const getIconForLink = (label: string) => {
    switch (label.toLowerCase()) {
      case 'komunitas': return Users;
      case 'testimoni': return MessageSquare;
      default: return Terminal;
    }
  };

  const menus = [
    {
      title: 'Navigation',
      icon: Terminal,
      subItems: [
        { name: 'Home', href: '#', icon: Code },
        ...config.navbar.links.map(link => ({
          name: link.label,
          href: link.url,
          icon: getIconForLink(link.label)
        }))
      ]
    }
  ];

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.05)] bg-[#0e150f] flex items-center justify-between p-4">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary-container flex items-center justify-center">
            <Code className="w-5 h-5 text-[#121212]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase tracking-[0.05em]">{config.title}</span>
        </a>
        <button
          className="p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] z-40 bg-[#0e150f] overflow-y-auto border-t border-[rgba(255,255,255,0.05)]">
          <nav className="flex flex-col p-4 space-y-4">
            {config.navbar.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="text-foreground font-medium p-3 border border-[rgba(255,255,255,0.05)] bg-[#1a120c] flex items-center gap-3 hover:border-[#4ade80]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Terminal className="w-4 h-4 text-[#4ade80]" />
                {link.label}
              </a>
            ))}
            <a
              href="#community"
              className="btn-primary flex justify-center items-center px-4 py-3 mt-4 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              JOIN SEKARANG
            </a>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="w-64 h-screen border-r border-[rgba(255,255,255,0.05)] bg-[#121212] flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#4ade80] flex items-center justify-center group-hover:brightness-110 transition-all shadow-[0_0_10px_rgba(74,222,128,0.3)]">
              <Code className="w-5 h-5 text-[#121212]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#4ade80] transition-colors uppercase tracking-[0.05em]">BBHZR</span>
          </a>
        </div>

        <nav className="flex-1 px-4 mt-2 overflow-y-auto custom-scrollbar">
          <div className="space-y-6">
            {menus.map(menu => {
              const isOpen = openMenus[menu.title];
              return (
                <div key={menu.title}>
                  <button
                    onClick={() => toggleMenu(menu.title)}
                    className="w-full px-3 mb-2 flex items-center justify-between text-[#bccabb] hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <menu.icon className="w-4 h-4" />
                      {menu.title}
                    </div>
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>

                  {isOpen && (
                    <div className="space-y-1 pl-3 border-l border-[rgba(255,255,255,0.05)] ml-5">
                      {menu.subItems.map((item) => {
                        // Simple active state checking
                        const isActive = (activePath === '' && item.href === '#') || activePath === item.href;

                        const linkClasses = `flex items-center gap-3 px-3 py-2 transition-colors text-sm ${
                          isActive
                            ? 'bg-[#1a120c] text-[#4ade80] border border-[#4ade80] shadow-[0_0_5px_rgba(74,222,128,0.2)]'
                            : 'text-[#dde5da] hover:text-[#4ade80] hover:bg-[#1a120c]'
                        }`;

                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            className={linkClasses}
                          >
                            <item.icon className={`w-4 h-4 ${isActive ? 'text-[#4ade80]' : ''}`} />
                            <span className="font-medium">{item.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-[rgba(255,255,255,0.05)]">
          <a
            href="#community"
            className="flex items-center justify-center gap-2 w-full btn-primary py-3 text-sm uppercase tracking-wider"
          >
            Join Server
          </a>
        </div>
      </aside>
    </>
  );
}
