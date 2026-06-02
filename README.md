<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# BlackberryHazard Website

Source code website resmi komunitas **BlackberryHazard** — landing page untuk menarik calon anggota dan menjadi sumber informasi bagi anggota komunitas.

## Tech Stack

- **Astro** + **React** (island architecture)
- **Tailwind CSS v4**
- **motion** untuk animasi
- **lucide-react** untuk ikon

## Menjalankan Secara Lokal

**Prasyarat:** Node.js

1. Pasang dependency:
   ```bash
   npm install
   ```
2. Jalankan dev server:
   ```bash
   npm run dev
   ```
   App berjalan di `http://localhost:3000`.

## Script

| Perintah          | Fungsi                               |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Dev server (port 3000)               |
| `npm run build`   | Build untuk production ke `dist/`    |
| `npm run preview` | Preview hasil build secara lokal     |
| `npm run lint`    | Type-check dengan TypeScript (`tsc`) |
| `npm run clean`   | Hapus folder `dist/`                 |

## Konfigurasi Konten

Sebagian besar konten (judul, deskripsi, daftar komunitas, navbar, footer) diatur lewat [`config.json`](./config.json) sehingga bisa diubah tanpa menyentuh kode komponen.
