import { motion } from 'motion/react';
import React from 'react';
import { Icon } from '@iconify/react';

export function JoinCta() {
  return (
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
                href="#community"
                className="flex items-center gap-4 px-8 py-4 bg-yellow-300 hover:bg-yellow-400 text-gray-900 rounded-full text-lg font-semibold transition-all hover:gap-6 group"
              >
                <span>Join Sekarang</span>
                <Icon icon="fa6-solid:arrow-right" className="w-5 h-5 transition-all group-hover:-rotate-45" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
