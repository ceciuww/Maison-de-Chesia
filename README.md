# Maison de Chesia — Next.js Portfolio

Struktur Next.js (App Router + TypeScript) hasil migrasi dari file HTML statis
`Maison de Chesia`. Semua desain (warna, font, animasi) dipertahankan persis
seperti versi asli — hanya strukturnya yang dipecah jadi komponen React +
data terpisah supaya gampang di-maintain.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Lalu buka http://localhost:3000

## ⚠️ Penting: taruh file gambar & sertifikat kamu

Folder `public/` di sini **hanya berisi struktur folder kosong** (tidak ada
file gambar/PDF asli, karena tidak ikut ter-upload). Kamu perlu menyalin
ulang seluruh isi asset ke folder yang sesuai, persis seperti struktur di
project HTML lama kamu:

```
public/
├── Maison de Chesia.png
├── cjp profile.jpg
├── CV ATS Chesia Julian Pratiwi.pdf
├── Education/
├── Organizational/
├── Internship/
├── Project/
├── Microsoft/
├── Organization/
├── CODEPOLITAN/
├── IBM/
├── Skilvul/
├── Webinar/
├── DICODING/
├── SAP/
├── Cisco/
├── Bootcamp/
├── Huawei/
└── ACHIEVEMENTS/
    ├── JUNI 2025/
    ├── JULI 2025/
    ├── AGUSTUS 2025/
    └── OKTOBER 2025/
```

Nama file & folder sengaja dibiarkan sama persis (termasuk spasi dan huruf
besar/kecil) seperti kode HTML asli, supaya kamu tinggal copy-paste isi
folder lama ke sini tanpa perlu rename apa pun.

> Catatan: karena nama file mengandung spasi, image optimization Next.js
> di-nonaktifkan (`unoptimized: true` di `next.config.js`). Kalau nanti mau
> rapikan nama file (misal jadi `logo-pnj.png`), cukup update path di file
> `src/data/*.ts` dan hapus opsi tersebut.

## Struktur folder

```
src/
├── app/
│   ├── layout.tsx      # <html>, font Google, metadata
│   ├── page.tsx         # merakit semua section jadi satu halaman
│   └── globals.css      # semua CSS asli (variables, layout, animasi)
├── components/          # satu file per section (Hero, Education, dst.)
├── hooks/                # useScrollReveal, useCarousel, useNavbarScroll
├── data/                 # array data untuk education/org/cert/dll
└── lib/                  # (reserved untuk util/konstanta tambahan)
```

## Yang perlu dicek lagi

- Ganti/isi ulang seluruh asset di `public/` (lihat di atas).
- Modal internship saat ini hanya berisi 2 data (`wika`, `konsulindo`) sesuai
  kartu yang ada. Kalau mau tambah pengalaman kerja baru (misal KB Valbury),
  tambahkan objek baru di `src/data/internships.ts` lalu render card baru di
  `src/components/Internship.tsx`.
- Semua teks masih dalam bahasa Inggris seperti versi asli — silakan diedit
  langsung di file-file `src/data/*.ts` dan komponen terkait.
