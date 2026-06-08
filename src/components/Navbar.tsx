import { Menu, X, Terminal, Users, MessageSquare, Code, CodeSquare, ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import { useState, useEffect } from 'react';
import { config } from '../config';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

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

  const toggleDesktopSidebar = () => {
    setIsDesktopCollapsed(!isDesktopCollapsed);
  };

  const getIconForLink = (label: string) => {
    switch (label.toLowerCase()) {
      case 'komunitas': return Users;
      case 'testimoni': return MessageSquare;
      default: return Terminal;
    }
  };

  // Flattened menu structure
  const menuItems = [
    { name: 'Home', href: '#', icon: Code },
    ...config.navbar.links.map(link => ({
      name: link.label,
      href: link.url,
      icon: getIconForLink(link.label)
    }))
  ];

  return (
    <>
      {/* Mobile Topbar & Full-Screen Menu */}
      <div className="md:hidden flex-shrink-0 z-40">
        <header className="h-16 border-b border-[rgba(255,255,255,0.05)] bg-[#121212] flex items-center justify-between px-4 sticky top-0">
           <a href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-[#4ade80] flex items-center justify-center shadow-[0_0_10px_rgba(74,222,128,0.3)]">
              <CodeSquare className="w-4 h-4 text-[#121212]" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#4ade80] transition-colors uppercase tracking-[0.05em]">{config.title}</span>
          </a>
          <button onClick={() => setIsMenuOpen(true)} className="p-2 text-[#dde5da] hover:text-white">
             <Menu className="w-6 h-6" />
          </button>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#121212] z-50 flex flex-col">
            <div className="h-16 border-b border-[rgba(255,255,255,0.05)] flex items-center justify-between px-4">
               <a href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#4ade80] flex items-center justify-center shadow-[0_0_10px_rgba(74,222,128,0.3)]">
                    <CodeSquare className="w-4 h-4 text-[#121212]" />
                  </div>
                  <span className="text-lg font-bold text-white uppercase tracking-[0.05em]">{config.title}</span>
                </a>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-[#dde5da] hover:text-white">
                  <X className="w-6 h-6" />
                </button>
            </div>
            <nav className="flex-1 px-4 py-6 overflow-y-auto">
              <div className="space-y-2">
                <div className="px-4 mb-2 text-xs font-bold uppercase tracking-wider text-[#bccabb]">
                  Navigation
                </div>
                {menuItems.map((item) => {
                  const isActive = (activePath === '' && item.href === '#') || activePath === item.href;

                  const linkClasses = `flex items-center gap-3 px-4 py-3 transition-colors ${
                    isActive
                      ? 'bg-[#1a120c] text-[#4ade80] border border-[#4ade80] shadow-[0_0_5px_rgba(74,222,128,0.2)]'
                      : 'text-[#dde5da] active:bg-[#1a120c] hover:text-[#4ade80]'
                  }`;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={linkClasses}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-[#4ade80]' : ''}`} />
                      <span className="font-medium text-base">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="p-6 border-t border-[rgba(255,255,255,0.05)]">
               <a
                  href="#community"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full btn-primary py-4 text-base uppercase tracking-wider"
                >
                  <Users className="w-5 h-5" />
                  Join Server
                </a>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className={`h-screen border-r border-[rgba(255,255,255,0.05)] bg-[#121212] flex-shrink-0 hidden md:flex flex-col transition-all duration-300 ease-in-out ${isDesktopCollapsed ? 'w-20' : 'w-64'}`}>
        <div className={`p-6 flex items-center justify-between`}>
          {!isDesktopCollapsed && (
            <a href="/" className="flex items-center gap-2 group overflow-hidden">
              <div className="w-8 h-8 flex-shrink-0 bg-[#4ade80] flex items-center justify-center group-hover:brightness-110 transition-all shadow-[0_0_10px_rgba(74,222,128,0.3)]">
                <CodeSquare className="w-5 h-5 text-[#121212]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#4ade80] transition-colors uppercase tracking-[0.05em] truncate">BBHZR</span>
            </a>
          )}
          {isDesktopCollapsed && (
             <a href="/" className="flex items-center gap-2 group mx-auto">
              <div className="w-8 h-8 flex-shrink-0 bg-[#4ade80] flex items-center justify-center group-hover:brightness-110 transition-all shadow-[0_0_10px_rgba(74,222,128,0.3)]">
                <CodeSquare className="w-5 h-5 text-[#121212]" />
              </div>
            </a>
          )}
        </div>

        <nav className="flex-1 px-4 mt-2 overflow-y-auto custom-scrollbar overflow-x-hidden">
          <div className="space-y-2">
            {!isDesktopCollapsed && (
              <div className="px-3 mb-4 text-xs font-bold uppercase tracking-wider text-[#bccabb]">
                Navigation
              </div>
            )}

            {menuItems.map((item) => {
              const isActive = (activePath === '' && item.href === '#') || activePath === item.href;

              const linkClasses = isDesktopCollapsed
                ? `flex items-center justify-center p-2 mx-auto transition-colors text-sm w-10 h-10 ${
                    isActive
                      ? 'bg-[#1a120c] text-[#4ade80] border border-[#4ade80] shadow-[0_0_5px_rgba(74,222,128,0.2)]'
                      : 'text-[#dde5da] hover:text-[#4ade80] hover:bg-[#1a120c]'
                  }`
                : `flex items-center gap-3 px-3 py-2 transition-colors text-sm overflow-hidden ${
                    isActive
                      ? 'bg-[#1a120c] text-[#4ade80] border border-[#4ade80] shadow-[0_0_5px_rgba(74,222,128,0.2)]'
                      : 'text-[#dde5da] hover:text-[#4ade80] hover:bg-[#1a120c]'
                  }`;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={linkClasses}
                  title={isDesktopCollapsed ? item.name : ''}
                >
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-[#4ade80]' : ''}`} />
                  {!isDesktopCollapsed && <span className="font-medium truncate">{item.name}</span>}
                </a>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-[rgba(255,255,255,0.05)] flex flex-col gap-2">
          <a
            href="#community"
            className={`flex items-center justify-center btn-primary transition-all duration-300 ${isDesktopCollapsed ? 'p-3 w-12 h-12 mx-auto' : 'px-4 py-3 gap-2 w-full text-sm uppercase tracking-wider'}`}
            title={isDesktopCollapsed ? "Join Server" : ""}
          >
            <Users className="w-5 h-5 flex-shrink-0" />
            {!isDesktopCollapsed && <span>Join Server</span>}
          </a>

          <button
            onClick={toggleDesktopSidebar}
            className="flex items-center justify-center p-2 text-[#869486] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors mt-2"
            title={isDesktopCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
             {isDesktopCollapsed ? <ArrowRightToLine className="w-5 h-5" /> : <ArrowLeftToLine className="w-5 h-5" />}
          </button>
        </div>
      </aside>
    </>
  );
}
