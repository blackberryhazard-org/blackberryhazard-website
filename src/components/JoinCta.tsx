import { motion } from 'motion/react';
import { Terminal, ArrowRight } from 'lucide-react';
import { config } from '../config';

export function JoinCta() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#09100a] border-y border-[rgba(255,255,255,0.05)]">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4ade80] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a120c] border border-[#4ade80] text-[#4ade80] text-sm font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(74,222,128,0.2)]"
          >
            <Terminal className="w-4 h-4" />
            <span>Init Sequence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase"
          >
            Siap Buat Mulai?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-[#bccabb] text-lg md:text-xl max-w-2xl"
          >
            Nggak usah banyak mikir. Langsung aja join dan kenalan sama member lainnya.
            Mabar, ngoding, atau sekadar nongkrong santai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="pt-4"
          >
            <a
              href="#community"
              className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-5 text-lg"
            >
              EXECUTE JOIN
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
