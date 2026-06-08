import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0e150f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a120c] border border-[rgba(255,255,255,0.1)] text-[#4ade80] text-sm font-semibold uppercase tracking-wider"
          >
            <Terminal className="w-4 h-4" />
            <span>Logs</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase"
          >
            KATA MEREKA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-[#bccabb] max-w-2xl text-lg"
          >
            Cerita dari anggota yang udah nyobain serunya ngoding dan mabar bareng.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-between bg-[#1a120c] p-8 border border-[rgba(255,255,255,0.05)] relative overflow-hidden group hover:border-[#4ade80] transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:text-[#4ade80] transition-all">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="space-y-6 relative z-10">
              <p className="text-base/relaxed text-[#dde5da]">Asik bgt cuy</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[rgba(255,255,255,0.05)]">
                <div className="h-12 w-12 bg-[#2f372f]">
                  <img
                    src="https://cdn.discordapp.com/avatars/443657753731858452/d75b8eeb0579e0a05a4687d6d34e6b52.webp?size=160"
                    alt="Syahdan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">Syahdan</h3>
                  <p className="text-xs text-[#869486] uppercase tracking-wider">Admin/Owner</p>
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
            className="flex flex-col justify-between bg-[#1a120c] p-8 border border-[rgba(255,255,255,0.05)] relative overflow-hidden group hover:border-[#4ade80] transition-colors"
          >
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:text-[#4ade80] transition-all">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="space-y-6 relative z-10">
              <p className="text-base/relaxed text-[#dde5da]">Sangat rekomen ini komunitas, apalagi kalau kalian wibu.</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[rgba(255,255,255,0.05)]">
                <div className="h-12 w-12 bg-[#2f372f]">
                  <img
                    src="https://cdn.discordapp.com/avatars/443657753731858452/d75b8eeb0579e0a05a4687d6d34e6b52.webp?size=160"
                    alt="Syahdan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">Syahdan</h3>
                  <p className="text-xs text-[#869486] uppercase tracking-wider">Admin/Owner</p>
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
            className="flex flex-col justify-between bg-[#1a120c] p-8 border border-[rgba(255,255,255,0.05)] relative overflow-hidden group hover:border-[#4ade80] transition-colors"
          >
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:text-[#4ade80] transition-all">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="space-y-6 relative z-10">
              <p className="text-base/relaxed text-[#dde5da]">Great platform!</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[rgba(255,255,255,0.05)]">
                <div className="h-12 w-12 bg-[rgba(74,222,128,0.1)] flex items-center justify-center text-xl font-bold text-[#4ade80] border border-[rgba(74,222,128,0.2)]">
                  I
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">Isam</h3>
                  <p className="text-xs text-[#869486] uppercase tracking-wider">Software Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <a
            href="#community"
            className="btn-secondary px-8 py-4 font-semibold uppercase tracking-wider text-sm"
          >
            Tulis Testimonimu
          </a>
        </div>
      </div>
    </section>
  );
}
