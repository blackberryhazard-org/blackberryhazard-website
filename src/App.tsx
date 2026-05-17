import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
              BlackberryHazard
            </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Komunitas</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Event</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Testimoni</a>
            <a href="#" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Join
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-[fadeIn_0.2s_ease-out]">
            <nav className="flex flex-col p-4 space-y-4">
              <a 
                href="#community" 
                className="text-foreground font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Komunitas
              </a>
              <a 
                href="#" 
                className="text-foreground font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Event
              </a>
              <a 
                href="#" 
                className="text-foreground font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimoni
              </a>
              <a 
                href="#" 
                className="bg-primary text-primary-foreground text-center px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Sekarang
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50"></div>
            <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-blue-400/20 blur-3xl opacity-60"></div>
            <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-primary/20 blur-3xl opacity-60"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          <div className="container px-4 md:px-6 relative mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col justify-center space-y-8"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm">
                    Komunitas IT & Gamer Indonesia
                  </span>
                  <a
                    href="https://ancikri.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm hover:bg-muted transition-colors"
                  >
                    Powered By Ancikri
                  </a>
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                    Penyuka Blackberry{" "}
                    <span className="bg-clip-text bg-gradient-to-r text-primary-500">
                      Enggan Yapping
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sirkel IT & Gaming paling sepi yang pernah ada (lebih sepi daripada kuburan☠). Tempat berbagi info
                    dan meme bersama para anomali yang enggan yapping (katanya).
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="#community"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Join Komunitas
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors w-full sm:w-auto"
                  >
                    Explore Event
                  </a>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold bg-clip-text text-primary-500">
                      0
                    </div>
                    <div className="text-xs text-muted-foreground">Member</div>
                  </div>
                  <div className="hidden sm:block h-10 border-r border-border mx-4"></div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold bg-clip-text text-primary-500">
                      3
                    </div>
                    <div className="text-xs text-muted-foreground">Platform</div>
                  </div>
                  <div className="hidden sm:block h-10 border-r border-border mx-4"></div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold bg-clip-text text-primary-500">
                      24/7
                    </div>
                    <div className="text-xs text-muted-foreground">Community</div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="relative w-full lg:w-auto mx-auto lg:ml-auto"
              >
                <img
                  src="https://imphnen.dev/logo.webp"
                  alt="logo"
                  width="600"
                  height="500"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="community" className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Bergabung dengan Komunitas Kami di{" "}
                <span className="block mt-2 text-primary-500">
                  Berbagai Platform
                </span>
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg/relaxed mt-4">
                Terhubung dengan sesama anomali di komunitas kami
              </p>
            </motion.div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Facebook",
                  desc: "Tempat ngumpul para opreker handal",
                  color: "text-[#1877F2]",
                  link: "https://fb.com/groups/oprekerhandal",
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 320 512" className="w-8 h-8">
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                    </svg>
                  ),
                },
                {
                  name: "Discord",
                  desc: "Kuburan☠",
                  color: "text-[#5865F2]",
                  link: "#",
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 640 512" className="w-8 h-8">
                      <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                    </svg>
                  ),
                },
                {
                  name: "Github",
                  desc: "Platforms to collaborate on your code",
                  color: "text-foreground",
                  link: "https://github.com/blackberryhazard-org/",
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 496 512" className="w-8 h-8">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path>
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  desc: "Daily coding tips & showcases",
                  color: "text-[#E4405F]",
                  link: "https://www.instagram.com/blackberryhazard",
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 448 512" className="w-8 h-8">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  ),
                },
              ].map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                  className="group relative p-8 bg-muted/30 border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex items-center gap-4">
                      <div className={platform.color}>{platform.icon}</div>
                      <h3 className="text-xl font-semibold text-foreground">{platform.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm/relaxed">{platform.desc}</p>
                    <a
                      href={platform.link}
                      className="inline-flex items-center gap-2 mt-2 text-sm font-medium transition-colors text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Jelajahi Komunitas</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Apa Kata Mereka Tentang
                <span className="block mt-2 text-primary-500">Komunitas Kami?</span>
              </h2>
            </motion.div>
            <div className="grid gap-8 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-6 bg-muted/30 rounded-xl border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold bg-primary-500 text-white">
                      S
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Super Admin</h4>
                      <p className="text-sm text-muted-foreground">Admin</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground relative">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-primary-500/30 w-6 h-6 mb-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                    </svg>
                    <p className="text-sm/relaxed text-foreground">Great platform!</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <a
                href="https://imphnen.dev/testimonials"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Tulis Testimonimu
              </a>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
          <div className="container px-4 md:px-6 relative mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex-1 text-center lg:text-left space-y-8"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    <span className="block">LET'S GO</span>
                    <span className="block text-5xl md:text-6xl mt-2">
                      <span className="text-yellow-300">SAAT</span>
                      <span className="text-white">NYA</span>
                    </span>
                    <span className="block mt-2">KAMU JOIN!</span>
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                  Jadilah bagian dari komunitas developer terbesar di Indonesia.
                  Tingkatkan skill, perluas jaringan, dan raih kesempatan karir
                  bersama kami!
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://imphnen.dev/#community"
                    className="flex items-center gap-4 px-8 py-4 bg-yellow-300 hover:bg-yellow-400 text-gray-900 rounded-full text-lg font-semibold transition-all hover:gap-6 group"
                  >
                    <span>Join Sekarang</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      className="w-5 h-5 transition-all group-hover:rotate-45"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="flex-1 max-w-xl"
              >
                <div className="relative p-8">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-6"></div>
                  <div className="relative bg-white/5 rounded-3xl p-8 backdrop-blur-lg border border-white/10">
                    <div className="flex flex-col items-center gap-6 text-white">
                      <img
                        src="https://imphnen.dev/logo.webp"
                        alt="IMPHNEN"
                        className="w-[240px] h-auto"
                      />
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl font-bold">250.000+</h3>
                        <p className="text-lg">Programmer Sudah Bergabung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
