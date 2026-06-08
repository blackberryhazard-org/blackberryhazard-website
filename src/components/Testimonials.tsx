import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#0e150f] px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-4 mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a120c] border border-[rgba(255,255,255,0.1)] text-[#4ade80] text-xs md:text-sm font-semibold uppercase tracking-wider"
          >
            <Terminal className="w-3 h-3 md:w-4 md:h-4" />
            <span>Logs</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white uppercase"
          >
            KATA MEREKA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-[#bccabb] max-w-2xl text-base md:text-lg"
          >
            Cerita dari anggota yang udah nyobain serunya ngoding dan mabar bareng.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-between bg-[#1a120c] p-6 md:p-8 border border-[rgba(255,255,255,0.05)] relative overflow-hidden group hover:border-[#4ade80] transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:text-[#4ade80] transition-all">
              <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="space-y-4 md:space-y-6 relative z-10">
              <p className="text-sm md:text-base/relaxed text-[#dde5da]">Asik bgt cuy</p>
              <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 md:pt-6 border-t border-[rgba(255,255,255,0.05)]">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-[#2f372f]">
                  <img
                    src="https://cdn.discordapp.com/avatars/443657753731858452/d75b8eeb0579e0a05a4687d6d34e6b52.webp?size=160"
                    alt="Syahdan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs md:text-sm">Syahdan</h3>
                  <p className="text-[10px] md:text-xs text-[#869486] uppercase tracking-wider">Admin/Owner</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col justify-between bg-[#1a120c] p-6 md:p-8 border border-[rgba(255,255,255,0.05)] relative overflow-hidden group hover:border-[#4ade80] transition-colors"
          >
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:text-[#4ade80] transition-all">
              <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="space-y-4 md:space-y-6 relative z-10">
              <p className="text-sm md:text-base/relaxed text-[#dde5da]">Sangat rekomen ini komunitas, apalagi kalau kalian wibu.</p>
              <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 md:pt-6 border-t border-[rgba(255,255,255,0.05)]">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-[#2f372f]">
                  <img
                    src="https://cdn.discordapp.com/avatars/443657753731858452/d75b8eeb0579e0a05a4687d6d34e6b52.webp?size=160"
                    alt="Syahdan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs md:text-sm">Syahdan</h3>
                  <p className="text-[10px] md:text-xs text-[#869486] uppercase tracking-wider">Admin/Owner</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-between bg-[#1a120c] p-6 md:p-8 border border-[rgba(255,255,255,0.05)] relative overflow-hidden group hover:border-[#4ade80] transition-colors"
          >
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:text-[#4ade80] transition-all">
              <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="space-y-4 md:space-y-6 relative z-10">
              <p className="text-sm md:text-base/relaxed text-[#dde5da]">Great platform!</p>
              <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 md:pt-6 border-t border-[rgba(255,255,255,0.05)]">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-[rgba(74,222,128,0.1)] flex items-center justify-center text-lg md:text-xl font-bold text-[#4ade80] border border-[rgba(74,222,128,0.2)]">
                  I
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs md:text-sm">Isam</h3>
                  <p className="text-[10px] md:text-xs text-[#869486] uppercase tracking-wider">Software Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-start md:justify-center">
          <a
            href="#community"
            className="btn-secondary px-6 md:px-8 py-3 md:py-4 font-semibold uppercase tracking-wider text-xs md:text-sm w-full md:w-auto text-center"
          >
            Tulis Testimonimu
          </a>
        </div>
      </div>
    </section>
  );
}
