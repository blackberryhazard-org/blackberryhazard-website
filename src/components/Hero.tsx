import { motion } from 'motion/react';
import React from 'react';
import { config } from '../config';

export function Hero() {
  return (
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
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                Penyuka Blackberry{" "}
                <span className="bg-clip-text bg-gradient-to-r text-primary-500">
                  Enggan Yapping
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {config.description}
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
                  {config.community.length}
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
              src={config.thumbnail}
              alt="thumbnail"
              width="600"
              height="500"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
