import { motion } from 'motion/react';
import React from 'react';
import { Icon } from '@iconify/react';

export function Testimonials() {
  return (
    <section className="w-full py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Apa Kata <span className="text-primary-500">Member</span> Kami?
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed mt-4">
            Pengalaman nyata dari mereka yang telah bergabung dengan kami
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-between rounded-2xl bg-background p-6 shadow-sm border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Icon icon="fa6-solid:quote-right" className="w-12 h-12" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-muted flex items-center justify-center text-xl font-bold bg-primary/10 text-primary">
                  I
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Ilham</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-400">
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
              </div>
              <p className="text-sm/relaxed text-foreground">Asik bgt cuy</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl bg-background p-6 shadow-sm border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Icon icon="fa6-solid:quote-right" className="w-12 h-12" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                  <img
                    src="https://cdn.discordapp.com/avatars/443657753731858452/d75b8eeb0579e0a05a4687d6d34e6b52.webp?size=160"
                    alt="Syahdan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Syahdan</h3>
                  <p className="text-sm text-muted-foreground">Admin/Owner</p>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-400">
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
              </div>
              <p className="text-sm/relaxed text-foreground">Sangat rekomen ini komunitas, apalagi kalau kalian wibu.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-between rounded-2xl bg-background p-6 shadow-sm border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Icon icon="fa6-solid:quote-right" className="w-12 h-12" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-muted flex items-center justify-center text-xl font-bold bg-primary/10 text-primary">
                  I
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Isam</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-400">
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4" />
                <Icon icon="fa6-solid:star" className="h-4 w-4 text-muted" />
              </div>
              <p className="text-sm/relaxed text-foreground">Great platform!</p>
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
  );
}
