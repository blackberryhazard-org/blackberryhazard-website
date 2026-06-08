import { Github, Disc as Discord, MessageCircle, Code } from 'lucide-react';
import { config } from '../config';

export function Footer() {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return Github;
      case 'discord': return Discord;
      default: return MessageCircle;
    }
  };

  return (
    <footer className="bg-[#0e150f] border-t border-[rgba(255,255,255,0.05)] text-[#bccabb] py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-[#4ade80] flex items-center justify-center group-hover:brightness-110 transition-all shadow-[0_0_10px_rgba(74,222,128,0.3)]">
                <Code className="w-5 h-5 text-[#121212]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#4ade80] transition-colors uppercase tracking-[0.05em]">
                {config.title}
              </span>
            </a>
            <p className="text-sm max-w-sm mt-4 text-[#869486]">
              {config.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-3">
              {config.footer.menu.map((item) => (
                <li key={item.label}>
                  <a href={item.url} className="text-sm hover:text-[#4ade80] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-3">
              {config.footer.legal.map((item) => (
                <li key={item.label}>
                  <a href={item.url} className="text-sm hover:text-[#4ade80] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#869486]">
            &copy; {new Date().getFullYear()} {config.footer.copyright}
          </p>
          <div className="flex gap-4">
            {config.social.map((item) => {
              const Icon = getSocialIcon(item.icon);
              return (
                <a
                  key={item.label}
                  href={item.url}
                  className="p-2 border border-[rgba(255,255,255,0.05)] bg-[#1a120c] hover:border-[#4ade80] hover:text-[#4ade80] transition-colors"
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
