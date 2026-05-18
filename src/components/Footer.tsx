import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <a href="/" className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
              BlackberryHazard
            </a>
            <p className="text-sm text-muted-foreground w-full max-w-xs">
              Sepi amat, kayak kuburan
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Menu</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Komunitas</a>
              <a href="https://imphnen.dev/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Event</a>
              <a href="https://imphnen.dev/testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimoni</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Sosial</h4>
            <div className="flex gap-4">
              <a href="https://github.com/IMPHNEN" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://discord.gg/imphnen" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Discord</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.38-.44.88-.6 1.28a16.51 16.51 0 0 0-5.06 0c-.16-.4-.4-.9-.6-1.28a18.2 18.2 0 0 0-4.6 1.44A18.57 18.57 0 0 0 1.5 16.89a18.42 18.42 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.27-.55-1.85-.92.16-.12.32-.23.47-.36 3.65 1.68 7.56 1.68 11.16 0 .15.13.31.24.47.36-.58.37-1.2.67-1.85.92.34.7.74 1.36 1.2 1.98a18.42 18.42 0 0 0 5.63-2.87 18.57 18.57 0 0 0-2.77-12.02ZM8.32 13.51c-1.08 0-1.96-1-1.96-2.24s.87-2.24 1.96-2.24c1.1 0 1.98 1 1.96 2.24 0 1.24-.87 2.24-1.96 2.24Zm7.36 0c-1.08 0-1.96-1-1.96-2.24s.87-2.24 1.96-2.24c1.1 0 1.98 1 1.96 2.24 0 1.24-.87 2.24-1.96 2.24Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IMPHNEN. All rights reserved.
          </p>
          <p className="text-sm justify-center items-center flex gap-1 text-muted-foreground">
            Powered by <a href="https://ancikri.com/" className="text-foreground hover:underline">Ancikri</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
