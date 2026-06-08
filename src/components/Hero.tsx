import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';
import { config } from '../config';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4ade80] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a120c] border border-[rgba(255,255,255,0.1)] text-[#4ade80] text-sm font-semibold uppercase tracking-wider"
          >
            <Terminal className="w-4 h-4" />
            <span>v2.0.0 is live</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl uppercase"
          >
            {config.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-[#bccabb] max-w-2xl leading-relaxed"
          >
            {config.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
          >
            <a
              href="#community"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-base"
            >
              GABUNG SEKARANG
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#testimonials"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-base font-semibold uppercase tracking-wider bg-[#1a120c]"
            >
              LIHAT TESTIMONI
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
