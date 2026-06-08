import { motion } from 'motion/react';
import { Terminal, ArrowRight } from 'lucide-react';

export function JoinCta() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#09100a] border-y border-[rgba(255,255,255,0.05)] px-4">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-[#4ade80] rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container relative mx-auto max-w-5xl">
        <div className="max-w-3xl mx-auto flex flex-col items-start md:items-center text-left md:text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a120c] border border-[#4ade80] text-[#4ade80] text-xs md:text-sm font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(74,222,128,0.2)]"
          >
            <Terminal className="w-3 h-3 md:w-4 md:h-4" />
            <span>Init Sequence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white uppercase"
          >
            Siap Buat Mulai?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-[#bccabb] text-base md:text-xl max-w-2xl"
          >
            Nggak usah banyak mikir. Langsung aja join dan kenalan sama member lainnya.
            Mabar, ngoding, atau sekadar nongkrong santai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="pt-2 md:pt-4 w-full md:w-auto"
          >
            <a
              href="#community"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 text-base md:text-lg w-full"
            >
              EXECUTE JOIN
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
