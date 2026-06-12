import { motion } from 'motion/react';
import { Icon } from "@iconify/react";

export function OrganizationPage() {
  const teamMembers = [
    { username: "indra87g", avatar: "https://avatars.githubusercontent.com/indra87g?size=80" },
    { username: "archanaberry", avatar: "https://avatars.githubusercontent.com/archanaberry?size=80" },
    { username: "ilhamjaya08", avatar: "https://avatars.githubusercontent.com/ilhamjaya08?size=80" },
    { username: "rizko77", avatar: "https://avatars.githubusercontent.com/rizko77?size=80" },
    { username: "paperalt", avatar: "https://avatars.githubusercontent.com/paperalt?size=80" },
    { username: "iyayn-ajah", avatar: "https://avatars.githubusercontent.com/iyayn-ajah?size=80" },
    { username: "jonfry1175", avatar: "https://avatars.githubusercontent.com/jonfry1175?size=80" },
    { username: "MeongPuss", avatar: "https://avatars.githubusercontent.com/MeongPuss?size=80" },
    { username: "AlbabRiziq", avatar: "https://avatars.githubusercontent.com/AlbabRiziq?size=80" },
    { username: "malikzzzz", avatar: "https://avatars.githubusercontent.com/malikzzzz?size=80" },
  ];

  const techStack = [
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Rust", icon: "logos:rust" },
    { name: "React", icon: "logos:react" },
    { name: "Hono.js", icon: "logos:hono" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "Astro", icon: "logos:astro-icon" },
    { name: "Supabase", icon: "logos:supabase-icon" },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="relative w-full py-20 md:py-32 border-b border-outline-variant bg-surface">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="container px-4 md:px-6 relative mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-on-surface flex items-center justify-center gap-4">
              <span className="text-primary">🌱💀</span> BlackberryHazard
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium">
              Kami malas ngoding😴 dan pura pura menjadi perusahaan🤓
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="https://blackberryhazard.biz.id" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-outline-variant bg-surface-container px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high transition-colors">
                <Icon icon="lucide:globe" className="w-4 h-4 text-blue-400" />
                Website
              </a>
              <a href="https://www.linkedin.com/company/124333949" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-outline-variant bg-surface-container px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high transition-colors">
                <Icon icon="lucide:linkedin" className="w-4 h-4 text-blue-500" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 md:py-24 bg-surface-container-lowest border-b border-outline-variant">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 flex items-center justify-center border border-primary">
                <Icon icon="lucide:info" className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-on-surface">Tentang Kami</h2>
            </div>

            <div className="bg-surface-container border border-outline-variant p-8 space-y-6">
              <p className="text-lg text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">BlackberryHazard</strong> adalah komunitas IT dan Gaming Indonesia, dan ini adalah organisasi github komunitas kami yang dibuat sebagai tempat bagi para anggota komunitas untuk "roleplay" seolah kami adalah sebuah perusahaan teknologi open source😹👈
              </p>
              <blockquote className="border-l-2 border-primary bg-primary/5 p-4 text-on-surface italic">
                "Kode yang baik bukan hanya yang berjalan — tapi yang memberi MBG."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="w-full py-16 md:py-24 bg-surface border-b border-outline-variant">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 flex items-center justify-center border border-primary">
                <Icon icon="lucide:users" className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-on-surface">Meet Our Teams</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {teamMembers.map((member, i) => (
                <a
                  key={i}
                  href={`https://github.com/${member.username}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center p-4 bg-surface-container border border-outline-variant hover:border-primary hover:bg-surface-container-high transition-all group"
                >
                  <img
                    src={member.avatar}
                    alt={member.username}
                    className="w-16 h-16 grayscale group-hover:grayscale-0 transition-all mb-3"
                  />
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary truncate w-full text-center">
                    {member.username}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full py-16 md:py-24 bg-surface-container-lowest border-b border-outline-variant">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 flex items-center justify-center border border-primary">
                <Icon icon="lucide:wrench" className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-on-surface">Tech Stack Kami</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, i) => (
                <div key={i} className="flex items-center gap-3 bg-surface-container border border-outline-variant px-4 py-3">
                  <Icon icon={tech.icon} className="w-6 h-6" />
                  <span className="font-semibold text-on-surface">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contribute & Contact Section */}
      <section className="w-full py-16 md:py-24 bg-surface border-b border-outline-variant">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 flex items-center justify-center border border-primary">
                <Icon icon="lucide:git-pull-request" className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Cara Berkontribusi</h2>
            </div>
            <div className="bg-surface-container border border-outline-variant p-6 space-y-4">
              <p className="text-on-surface-variant">Kami sangat terbuka untuk kontribusi dari siapa pun! Ikuti langkah berikut:</p>
              <ol className="list-decimal list-inside space-y-2 text-on-surface text-sm">
                <li><span className="font-semibold text-primary">Fork</span> repository yang ingin kamu kontribusikan</li>
                <li><span className="font-semibold text-primary">Buat branch</span> baru: <code className="bg-surface-container-highest px-1 text-on-primary-container bg-primary/20">git checkout -b fitur/nama-fitur-kamu</code></li>
                <li><span className="font-semibold text-primary">Commit</span> perubahanmu: <code className="bg-surface-container-highest px-1 text-on-primary-container bg-primary/20">git commit -m feat: menambahkan fitur X</code></li>
                <li><span className="font-semibold text-primary">Kirimkan</span> ke branch origin</li>
                <li><span className="font-semibold text-primary">Buka Pull Request</span> dan jelaskan perubahanmu</li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 flex items-center justify-center border border-primary">
                <Icon icon="lucide:mail" className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Hubungi Kami</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-surface-container border border-outline-variant p-4 flex items-start gap-4">
                <Icon icon="lucide:at-sign" className="w-6 h-6 text-on-surface-variant mt-1" />
                <div>
                  <h3 className="font-semibold text-on-surface">Email Umum</h3>
                  <a href="mailto:cihuysomnia@proton.me" className="text-primary hover:underline mt-1 block">cihuysomnia@proton.me</a>
                </div>
              </div>

              <div className="bg-surface-container border border-outline-variant p-4 flex items-start gap-4">
                <Icon icon="lucide:briefcase" className="w-6 h-6 text-on-surface-variant mt-1" />
                <div>
                  <h3 className="font-semibold text-on-surface">Kemitraan</h3>
                  <a href="mailto:twinightwheel50@gmail.com" className="text-primary hover:underline mt-1 block">twinightwheel50@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant p-4 mt-6">
              <h3 className="font-bold text-on-surface mb-2 flex items-center gap-2">
                <Icon icon="lucide:file-text" className="w-4 h-4 text-on-surface-variant" />
                Lisensi
              </h3>
              <p className="text-sm text-on-surface-variant">
                Seluruh proyek kami menggunakan lisensi <strong className="text-on-surface">MIT</strong> kecuali disebutkan lain pada masing-masing repository.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
