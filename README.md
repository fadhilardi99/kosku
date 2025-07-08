# KosKu - Platform Listing Kos Minimalis

KosKu adalah platform pencarian dan pemesanan kos (boarding house) berbasis Next.js, dengan backend Prisma dan UI minimalis dominan warna coklat.

## Fitur Utama

- **Listing Kos**: Cari dan filter kos berdasarkan nama, alamat, tipe, dan harga.
- **Detail Kos**: Lihat detail lengkap, fasilitas, peraturan, lokasi, dan galeri foto.
- **Favorite**: Simpan kos favorit (localStorage, bisa dikembangkan ke backend/user).
- **Dashboard**: Tampilkan kos populer, testimonial, fitur keunggulan, dan kontak.
- **Testimoni Carousel**: Slider testimoni responsif, otomatis menyesuaikan jumlah kartu per tampilan (1 di mobile, 2 di tablet, 3 di desktop).
- **Pencarian & Filter**: Search bar dan filter tipe kos.
- **Pagination**: Navigasi halaman pada listing kos.
- **Desain Minimalis**: UI sederhana, dominan warna coklat, tanpa kombinasi warna mencolok.

## Tech Stack

- **Frontend**: Next.js (App Router), React, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM, SQLite/MySQL/Postgres
- **Database**: Prisma + SQLite (default, bisa diganti)

## Setup & Instalasi

1. **Clone repo & install dependencies**

   ```bash
   git clone <repo-url>
   cd kosku
   npm install
   # atau
   yarn install
   ```

2. **Konfigurasi Environment**

   - Copy `.env.example` ke `.env` dan sesuaikan jika perlu.
   - Default: menggunakan SQLite (`DATABASE_URL="file:./dev.db"`)

3. **Migrasi & Seed Database**

   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed
   ```

   - Edit/isi data seed di `prisma/seed.ts` atau file JSON terkait.

4. **Jalankan Development Server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```
   Akses di [http://localhost:3000](http://localhost:3000)

## Struktur Project

- `src/app/` - Halaman Next.js (dashboard, kos, detail, dsb)
- `src/components/` - Komponen UI (Navbar, Footer, Card, TestimonialSlider, dsb)
- `src/lib/` - Helper dan utilitas
- `prisma/` - Schema dan seed database

## Fitur Testimoni Carousel

- Komponen: `src/components/TestimonialSlider.tsx`
- Slider testimoni responsif:
  - 1 kartu per tampilan di mobile
  - 2 kartu per tampilan di tablet
  - 3 kartu per tampilan di desktop
- Navigasi dengan tombol panah dan dot.
- Tidak terjadi error hydration karena slider hanya dirender di client.

### Cara Modifikasi Testimoni

- Edit array `testimonials` di `TestimonialSlider.tsx` untuk menambah/mengubah testimoni.
- Untuk mengubah tampilan, modifikasi Tailwind class di file yang sama.

## Catatan Desain

- UI minimalis, dominan warna coklat (`#4E342E`), tanpa kombinasi warna mencolok.
- Ikon menggunakan Heroicons/Lucide atau emoji untuk kompatibilitas server component.
- Favorit disimpan di localStorage (bisa diupgrade ke backend/user auth).

## Pengembangan Lanjutan

- Integrasi autentikasi user (NextAuth, dsb)
- CRUD admin untuk kos
- Favorite per user (persisten di database)
- Booking & pembayaran

---

**KosKu** - Platform kos minimalis, nyaman, dan mudah digunakan.
