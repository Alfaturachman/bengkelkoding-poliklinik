# Sistem Informasi Poliklinik

Sistem Informasi Poliklinik adalah aplikasi backend berbasis web yang dibangun menggunakan **Express.js** dan **Node.js**. Aplikasi ini dirancang untuk mengelola data operasional layanan kesehatan, seperti pengelolaan data pasien, dokter, antrean, dan rekam medis secara digital.

Proyek ini dikembangkan menggunakan workflow Git & GitHub untuk mensimulasikan lingkungan pengembangan perangkat lunak yang standar di industri.

## Fitur Utama
* **Manajemen Pasien (`feature/data-pasien`):** Registrasi pasien baru, pencarian rekam medis, dan pembaruan data pasien.
* **Manajemen Dokter:** Pengelolaan data dokter berdasarkan spesialisasi dan jadwal praktik.
* **Sistem Antrean Poliklinik:** Pencatatan dan pemrosesan nomor antrean pasien menuju poli terkait.

## Spesifikasi Teknologi
* **Runtime Environment:** Node.js
* **Backend Framework:** Express.js
* **Package Manager:** npm

## Struktur Direktori Proyek
```text
poliklinik/
├── .git/
├── .gitignore
├── README.md
├── app/
│   ├── controllers/
│   ├── models/
│   └── routes/
├── node_modules/
├── package.json
└── server.js
```

## Cara Menjalankan Proyek di Lokal

Ikuti langkah-langkah berikut untuk memasang proyek ini di komputer lokal Anda:

1. **Clone repositori ini:**
   ```bash
   git clone <URL-REPOSITORY-GITHUB-KAMU>
   cd poliklinik
   ```

2. **Instal dependensi Node.js:**
   ```bash
   npm install
   ```

3. **Jalankan server Express.js:**
   ```bash
   npm start
   ```
   *Aplikasi secara bawaan akan berjalan di http://localhost:3000*
