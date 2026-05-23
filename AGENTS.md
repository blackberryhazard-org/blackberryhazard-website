# AGENTS.md — BlackberryHazard Website

## 1. Project Overview

- **Name**         : BlackberryHazard Website
- **Description**  : Source code website official komunitas BlackberryHazard
- **Goal**         : Menarik calon anggota untuk bergabung ke komunitas, sekaligus menjadi sumber informasi terkini bagi anggota yang sudah bergabung
- **Target Users** : Calon anggota komunitas & anggota komunitas BlackberryHazard
- **Version**      : v0.1.0
- **Status**       : Active development

---

## 2. Tech Stack

- **Language**      : TypeScript
- **Framework**     : Astro JS + React
- **Styling**       : Tailwind CSS
- **Icons**         : Astro Icon
- **Data Fetching** : Axios
- **Testing**       : Vitest
- **Package Manager** : npm
- **Deployment**    : Cloudflare Pages

---

## 3. Commands

```bash
# Development
npm run dev         # Jalankan dev server
npm run build       # Build untuk production (tsc && vite build)
npm run preview     # Preview hasil build secara lokal

# Kualitas Kode
npm run lint        # Jalankan ESLint
npm run format      # Format kode dengan Prettier (jika dikonfigurasi)

# Testing
npm run test        # Jalankan semua test dengan Vitest
npm run test:ui     # Jalankan Vitest dengan UI (jika tersedia)
npm run coverage    # Generate laporan coverage
```

> **Penting:** Selalu gunakan `npm`. Jangan gunakan `yarn`, `pnpm`, atau `bun`.

---

## 4. Project Structure

**Architecture:** Feature-based / by concern

```
blackberryhazard-website/
  src/
    assets/          # Gambar, ikon, font, dan file statis lainnya
    components/      # Komponen UI yang reusable (tombol, card, navbar, dll)
    pages/           # Komponen tingkat halaman (HomePage, AboutPage, dll)
    features/        # Logika dan komponen per fitur spesifik
    hooks/           # Custom React hooks
    stores/          # Zustand stores (state management)
    services/        # Fungsi Axios untuk pemanggilan API eksternal
    utils/           # Helper dan fungsi utilitas
    types/           # TypeScript types dan interfaces global
    App.tsx          # Root component
    main.tsx         # Entry point aplikasi
  public/            # File statis yang diakses langsung (favicon, robots.txt)
  index.html         # HTML entry point (dikelola Vite)
  vite.config.ts     # Konfigurasi Vite
  tailwind.config.ts # Konfigurasi Tailwind CSS
  tsconfig.json      # Konfigurasi TypeScript
  package.json
```

**Aturan penempatan file:**

- Komponen UI reusable → `src/components/`
- Komponen halaman → `src/pages/`
- Logika per fitur → `src/features/`
- Custom hooks → `src/hooks/`
- Zustand stores → `src/stores/`
- Fungsi Axios / API call → `src/services/`
- Helper & utilitas → `src/utils/`
- TypeScript types & interfaces → `src/types/`
- Jangan buat folder baru di luar struktur di atas tanpa konfirmasi terlebih dahulu

---

## 5. Naming Conventions

```
# File dan Folder
- Komponen      : PascalCase    contoh: HeroSection.tsx, MemberCard.tsx
- Non-komponen  : camelCase     contoh: useScrollPosition.ts, fetchAnnouncements.ts
- Folder        : kebab-case    contoh: hero-section/, member-card/
- Halaman       : PascalCase + "Page"  contoh: HomePage.tsx, AboutPage.tsx
- Test file     : [nama].test.ts atau [nama].spec.ts

# Di dalam Kode
- Variabel      : camelCase     contoh: memberList, isLoading
- Konstanta     : UPPER_SNAKE   contoh: MAX_ITEMS, BASE_API_URL
- Fungsi        : camelCase     contoh: fetchMembers, formatDate
- Tipe/Interface: PascalCase    contoh: MemberType, ApiResponse
- Enum          : PascalCase    contoh: MemberRole, PageRoute
- CSS Class     : kebab-case    contoh: hero-section, member-card

# Git Branch
- Fitur baru    : feat/[nama-fitur]       contoh: feat/hero-section
- Bug fix       : fix/[nama-bug]          contoh: fix/navbar-mobile-overflow
- Hotfix        : hotfix/[nama]
- Refactor      : refactor/[nama]
- Styling       : style/[nama]
```

---

## 6. Code Conventions

```
# Pendekatan Coding
- Terapkan prinsip clean code dan DRY
- Hindari duplikasi kode — jadikan function atau komponen jika dipakai lebih dari sekali
- Tulis kode yang mudah dibaca, bukan yang paling singkat
- Selalu prioritaskan keterbacaan dan maintainability

# TypeScript
- Gunakan strict mode (sudah dikonfigurasi di tsconfig.json)
- Tidak boleh menggunakan tipe 'any' — gunakan 'unknown' jika tidak tahu tipenya
- Selalu tulis tipe return function secara eksplisit
- Gunakan interface untuk shape object, type untuk union atau intersection

# Urutan Import
1. Library eksternal (react, react-router-dom, axios, dll)
2. Internal absolut (@/components, @/stores, @/utils, dll)
3. Internal relatif (./Component, ../utils)
4. Tipe dan Interface
5. Assets dan styles (CSS, gambar)

# Export Pattern
- Gunakan named export untuk semua komponen dan fungsi
- Hindari default export kecuali jika benar-benar diperlukan

# Error Handling
- Selalu gunakan try-catch untuk async function, terutama di services/
- Jangan biarkan error tanpa penanganan
- Tulis pesan error yang informatif dan spesifik
```

---

## 7. Component Rules

```
# Urutan Penulisan dalam Satu Komponen
1. Import
2. Tipe atau Interface props
3. Definisi komponen
4. Hooks (useState, useEffect, hook custom, dll)
5. Handler dan fungsi lokal
6. Return JSX
7. Export (named export)

# Aturan Props
- Selalu tulis tipe props secara eksplisit menggunakan interface atau type
- Gunakan default value untuk props yang opsional
- Usahakan maksimal 5 props per komponen — jika lebih, pertimbangkan refactor

# Komponen Kecil
- Pisah ke file sendiri jika dipakai lebih dari satu tempat
- Boleh digabung dalam satu file jika hanya dipakai oleh satu komponen induk
```

---

## 8. Styling Rules

```
# Pendekatan Styling
- Gunakan Tailwind CSS utility class langsung di JSX
- Jangan gunakan inline style kecuali untuk nilai yang benar-benar dinamis (contoh: nilai dari state)
- Jangan gunakan !important

# Tailwind CSS
- Gunakan clsx atau cn() untuk conditional class
- Ekstrak ke komponen React jika class yang sama dipakai lebih dari sekali
- Urutan class (ikuti konvensi ini): layout → spacing → sizing → color → typography → border → shadow → state (hover, focus, dll)

# Responsive Design
- Pendekatan mobile-first
- Breakpoint standar Tailwind: sm (640px) / md (768px) / lg (1024px) / xl (1280px)
- Selalu test tampilan di mobile setelah membuat komponen baru

# Dark Mode (jika diimplementasi)
- Gunakan dark: prefix dari Tailwind
- Selalu test tampilan di dark mode setelah membuat komponen baru
```

---

## 9. State Management Rules

```
# Hierarki State (gunakan dari yang paling sederhana dulu)
1. Local state (useState)   : hanya dipakai 1 komponen
2. Lifted state             : dipakai 2-3 komponen yang berdekatan
3. Zustand store            : dipakai banyak komponen di banyak tempat

# Kapan Pakai Zustand
- Data yang dibutuhkan banyak komponen di tempat yang berbeda
- UI state global (tema, bahasa, status sidebar/modal)
- Data yang perlu persist antar navigasi halaman

# Aturan Zustand
- Buat store per domain/fitur — jangan satu store untuk semuanya
  contoh: useMemberStore.ts, useAnnouncementStore.ts
- Jangan simpan data yang bisa dihitung dari data lain (derived state)
- Gunakan selector untuk mengambil data spesifik agar tidak re-render berlebihan
- Semua store disimpan di folder src/stores/
```

---

## 10. API & Data Fetching Rules

```
# Aturan Umum
- Semua fungsi Axios disimpan di src/services/ — jangan tulis langsung di komponen
- Gunakan Axios instance yang terkonfigurasi, bukan import axios langsung
- Jangan gunakan useEffect untuk fetching data utama — gunakan fungsi di store atau custom hook

# Format Response API (jika mengonsumsi API sendiri)
- Harapkan format konsisten: { success: boolean, data: T | null, message: string }

# Error Handling di Service
- Selalu tangani error dengan try-catch di setiap fungsi service
- Propagate error yang informatif ke pemanggil (komponen/store)

# Environment Variable
- Gunakan environment variable untuk semua base URL dan API key
- Jangan hardcode URL atau secret apapun langsung di kode
```

---

## 11. Performance Rules

```
# Re-render Optimization
- Gunakan useMemo untuk kalkulasi yang berat
- Gunakan useCallback untuk fungsi yang dikirim sebagai props ke komponen anak
- Jangan overuse memo — lakukan profiling dulu sebelum optimize

# Code Splitting
- Gunakan React.lazy() dan Suspense untuk lazy load halaman
- Dynamic import untuk komponen besar yang tidak langsung terlihat

# Image Optimization
- Gunakan format WebP atau AVIF untuk gambar baru
- Tentukan width dan height untuk setiap elemen gambar
- Simpan aset di src/assets/ dan referensikan melalui import

# Bundle Size
- Import hanya yang dibutuhkan, bukan seluruh library
  Benar : import { debounce } from 'lodash'
  Salah : import _ from 'lodash'
```

---

## 12. Git Rules

Setiap kali selesai membuat perubahan atau penambahan kode, langsung commit sebelum melanjutkan ke task berikutnya. Ini penting agar perubahan bisa dibandingkan dan di-undo jika hasilnya tidak sesuai ekspektasi.

```
# Format Commit Message
feat     : [deskripsi fitur baru]
fix      : [deskripsi bug yang diperbaiki]
refactor : [deskripsi perubahan refactor]
style    : [perubahan styling atau formatting]
docs     : [perubahan dokumentasi]
test     : [penambahan atau perubahan test]
chore    : [perubahan konfigurasi atau tooling]

# Contoh
feat: add hero section with community introduction
fix: resolve mobile navbar not closing on link click
style: adjust member card spacing for mobile view
chore: update vite config for Cloudflare Pages build

# Aturan Tambahan
- Jangan commit file .env atau file yang berisi secret apapun
- Satu commit untuk satu perubahan yang spesifik
- Jangan gabungkan banyak perubahan yang tidak berkaitan dalam satu commit
```

---

## 13. Testing

```
# Pendekatan Testing
- Framework : Vitest
- Jenis     : Unit test (fungsi utilitas, hooks, stores)

# Yang Perlu Di-test
- Semua fungsi utility dan helper di src/utils/
- Custom hooks di src/hooks/
- Zustand stores (action dan selector)
- Fungsi service di src/services/ (dengan mocking Axios)

# Yang Tidak Perlu Di-test
- Komponen presentational yang sangat sederhana (hanya render UI statis)
- Third-party library
- File konfigurasi

# Aturan Penulisan Test
- Satu test file per satu file yang di-test
  contoh: src/utils/formatDate.test.ts
- Nama test harus deskriptif:
  'should [expected behavior] when [condition]'
- Gunakan pola AAA: Arrange → Act → Assert
```

---

## 14. Do Not

Jika instruksi atau prompt ambigu, **TANYA DULU** sebelum mulai coding. Jangan berasumsi dan langsung mengerjakan tanpa konfirmasi.

```
# Struktur dan File
- Jangan buat folder baru di luar struktur yang sudah didefinisikan tanpa konfirmasi
- Jangan hapus file tanpa konfirmasi
- Jangan pindahkan file tanpa konfirmasi
- Jangan ubah struktur folder yang sudah ada

# Kode
- Jangan gunakan tipe 'any' di TypeScript
- Jangan hardcode nilai yang seharusnya dari environment variable
- Jangan commit file .env atau file yang berisi secret
- Jangan install package baru tanpa konfirmasi
- Jangan hapus atau ubah fitur yang sudah berjalan tanpa instruksi jelas

# Pattern yang Dilarang
- Jangan gunakan yarn, pnpm, atau bun — selalu gunakan npm
- Jangan gunakan useEffect untuk data fetching utama
- Jangan gunakan inline style untuk nilai yang bisa dihandle Tailwind
- Jangan gunakan tipe 'any' — gunakan 'unknown' atau tipe yang tepat

# Keamanan
- Jangan expose API key atau secret apapun ke sisi client
- Jangan bypass validasi input dari user
- Jangan skip error handling di fungsi async
```

---

## 15. Environment Variables

```
# Setup
- Copy .env.example ke .env.local untuk development lokal
- Jangan pernah commit file .env atau .env.local ke repository

# Public Variables — aman dipakai di sisi client (prefix VITE_)
VITE_API_BASE_URL=    # Base URL untuk pemanggilan API eksternal
VITE_SITE_URL=        # URL publik website

# Catatan Vite
- Hanya variabel dengan prefix VITE_ yang terekspos ke browser
- Variabel tanpa prefix VITE_ hanya tersedia di proses build (server-side)
```

---

_Update AGENTS.md ini secara berkala seiring project berkembang — terutama bagian **Features** dan **Project Structure**._

---

## 16. Post-Task

Setelah seluruh task selesai, **dua langkah berikut wajib dilakukan** sebelum benar-benar mengakhiri sesi:

### 16.1 Kirim Notifikasi Webhook

Kirim POST request ke endpoint berikut:

```
https://webhook.notifine.com/beep/RcWM02gS
```

Isi pesan harus menjelaskan perubahan yang dilakukan. Gunakan format berikut sebagai panduan:

```
Halo, saya Jules!

Tugas mengenai [topik singkat] sudah selesai dikerjakan.

Perubahan yang dilakukan:
• [perubahan 1]
• [perubahan 2]
• ...

[Tambahkan konteks relevan dan emoji secukupnya]
```

Catatan: kirim request sebagai text, bukan json!

### 16.2 Perbarui MEMORY.md

Catat setiap informasi baru yang diperoleh dari sesi ini ke dalam `MEMORY.md` — termasuk keputusan teknis, pola yang ditemukan, atau hal-hal yang perlu diingat untuk sesi berikutnya.
