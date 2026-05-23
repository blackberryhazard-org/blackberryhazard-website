import { motion } from 'motion/react';
import React from 'react';
import { config } from '../config';
import { Icon } from '@iconify/react';

// Fallback icon helper
const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
        case 'facebook':
            return <Icon icon="fa6-brands:facebook" className="w-10 h-10 mb-4" />;
        case 'whatsapp':
            return <Icon icon="fa6-brands:whatsapp" className="w-10 h-10 mb-4" />;
        case 'discord':
            return <Icon icon="fa6-brands:discord" className="w-10 h-10 mb-4" />;
        default:
            return <Icon icon="lucide:info" className="w-10 h-10 mb-4" />;
    }
}

export function Community() {
  return (
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
          {config.community.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className="flex flex-col h-full bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-all group-hover:scale-110"></div>
                <div className="text-primary">{getIcon(item.icon)}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground flex-1 mb-6">
                  Join our {item.name} community today!
                </p>
                <a
                  href={item.url}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Join Sekarang
                  <Icon icon="fa6-solid:arrow-right" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
