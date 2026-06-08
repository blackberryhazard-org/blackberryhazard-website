import { motion } from 'motion/react';
import { ArrowUpRight, Github, MessageCircle, Monitor } from 'lucide-react';
import { config } from '../config';

export function Community() {
  const getIcon = (name: string) => {
    const iconName = name.toLowerCase();
    if (iconName.includes('github')) return Github;
    if (iconName.includes('discord') || iconName.includes('whatsapp') || iconName.includes('facebook')) return MessageCircle;
    return Monitor;
  };

  return (
    <section id="community" className="py-16 md:py-24 bg-[#09100a] relative border-y border-[rgba(255,255,255,0.05)] px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-4 mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white uppercase"
          >
            Pilih Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-[#bccabb] max-w-2xl text-base md:text-lg"
          >
            Kami hadir di berbagai platform. Pilih yang paling nyaman buat kamu untuk mulai berdiskusi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {config.community.map((comm, index) => {
            const Icon = getIcon(comm.name);
            return (
              <motion.a
                key={comm.name}
                href={comm.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="group relative flex flex-col justify-between bg-[#1a120c] p-6 md:p-8 border border-[rgba(255,255,255,0.05)] hover:border-[#4ade80] transition-colors h-full"
              >
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className="p-3 bg-[#0e150f] border border-[rgba(255,255,255,0.1)] group-hover:border-[#4ade80] group-hover:text-[#4ade80] text-white transition-colors">
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#869486] group-hover:text-[#4ade80] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#4ade80] transition-colors">
                    {comm.name}
                  </h3>
                  <p className="text-[#bccabb] text-xs md:text-sm">
                    Join the {comm.name} community.
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-[#4ade80] opacity-0 group-hover:opacity-5 blur-xl transition-opacity pointer-events-none"></div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
