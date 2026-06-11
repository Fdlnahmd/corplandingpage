

# AstraCorp - Corporate Landing Page

AstraCorp adalah landing page perusahaan (corporate landing page) modern, interaktif, dan premium yang dibangun menggunakan **React 19**, **Vite 6**, **TypeScript**, dan **Tailwind CSS v4**. Halaman ini dirancang untuk memberikan kesan profesional dan modern kepada pengunjung dengan performa tinggi dan animasi yang halus.

---

## 🚀 Fitur Utama

- ✨ **Desain Modern & Premium**: Menggunakan palet warna profesional dengan aksen biru yang elegan dan transisi yang halus.
- 📱 **Desain Responsif**: Dioptimalkan sepenuhnya untuk perangkat mobile, tablet, hingga desktop.
- 🎨 **Animasi Interaktif**: Didukung oleh Intersection Observer untuk efek *scroll reveal* dan transisi dinamis menggunakan **Motion**.
- 🛠️ **Komponen Modular**: Struktur komponen terpisah dan terorganisir untuk mempermudah pengembangan lebih lanjut:
  - **Navbar**: Navigasi responsif dengan efek scroll transparan.
  - **Hero Section**: Halaman utama dengan CTA interaktif dan elemen mengambang.
  - **Stats Section**: Angka statistik interaktif dengan efek *counting*.
  - **Services Section**: Daftar layanan keahlian perusahaan yang interaktif.
  - **About Section**: Informasi latar belakang perusahaan dan alasan bermitra.
  - **Portfolio Section**: Portofolio proyek sukses perusahaan.
  - **Testimonials Section**: Umpan balik dan ulasan dari klien tepercaya.
  - **Team Section**: Profil anggota tim profesional.
  - **CTA Banner**: Formulir atau ajakan untuk mulai berkolaborasi (Contact/Get Started).
- 🔗 **Integrasi Gemini API**: Konfigurasi siap pakai untuk integrasi fitur AI dengan SDK `@google/genai`.

---

## 🛠️ Teknologi yang Digunakan

*   **Framework/Library**: React 19 & Vite 6
*   **Bahasa Pemrograman**: TypeScript
*   **Styling**: Tailwind CSS v4 & Lucide React (ikonografi)
*   **Animasi**: Motion (Framer Motion)
*   **AI Integration**: `@google/genai`

---

## 📁 Struktur Proyek

```text
corplandingpage/
├── assets/             # Aset gambar dan statis
├── src/
│   ├── components/     # Komponen-komponen penyusun landing page
│   │   ├── About.tsx
│   │   ├── CountUp.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Team.tsx
│   │   └── Testimonials.tsx
│   ├── App.tsx         # Komponen utama aplikasi
│   ├── index.css       # File style utama (Tailwind CSS import)
│   └── main.tsx        # Entry point aplikasi React
├── index.html          # File HTML utama
├── package.json        # Dependensi dan script build
└── tsconfig.json       # Konfigurasi TypeScript
```

---

## ⚡ Memulai (Getting Started)

### Prasyarat

Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas disarankan) di komputer Anda.

### Langkah-Langkah Instalasi

1.  **Clone repositori ini atau buka di workspace Anda.**
2.  **Instal dependensi:**
    ```bash
    npm install
    ```
3.  **Konfigurasi Variabel Lingkungan:**
    Salin file `.env.example` menjadi `.env.local`:
    ```bash
    cp .env.example .env.local
    ```
    Buka file `.env.local` dan masukkan kunci API Gemini Anda jika ingin mengaktifkan fitur AI:
    ```env
    GEMINI_API_KEY=your_gemini_api_key_here
    ```
4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan secara lokal di [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Script yang Tersedia

Di dalam direktori proyek, Anda dapat menjalankan perintah berikut:

-   `npm run dev`: Menjalankan aplikasi dalam mode pengembangan (development mode).
-   `npm run build`: Membangun aplikasi untuk produksi (production build) ke dalam direktori `dist`.
-   `npm run preview`: Melakukan pratinjau lokal terhadap aplikasi yang telah di-build untuk produksi.
-   `npm run clean`: Menghapus folder `dist` dan file build lama.
-   `npm run lint`: Memvalidasi tipe TypeScript tanpa melakukan kompilasi file (`tsc --noEmit`).

---

## 🐳 Docker Deployment (Untuk VPS / Subdomain)

Aplikasi ini telah dikonfigurasi dengan Docker dan Docker Compose menggunakan Nginx sebagai web server untuk menyajikan berkas statis hasil kompilasi.

### Opsi A: Menggunakan Docker Compose (Direkomendasikan)

1. **Jalankan Container di Background:**
   ```bash
   docker compose up -d --build
   ```
   Perintah ini akan langsung membangun (*build*) image dan menjalankan container secara otomatis.

2. **Menghentikan Container:**
   ```bash
   docker compose down
   ```

### Opsi B: Menggunakan Docker CLI Manual

1. **Build Docker Image:**
   ```bash
   docker build -t corplandingpage .
   ```

2. **Jalankan Docker Container:**
   ```bash
   docker run -d -p 8080:80 --name corplandingpage-app corplandingpage
   ```

Aplikasi dapat diakses melalui browser di `http://localhost:8080`.

### 🔗 Menghubungkan ke Subdomain (VPS/Nginx Reverse Proxy)
Jika Anda mendeploy ke VPS Anda sendiri, arahkan subdomain Anda (misal `portfolio.domainanda.com`) menggunakan Nginx reverse proxy ke port container tersebut (`8080`). Contoh konfigurasi Nginx reverse proxy:

```nginx
server {
    listen 80;
    server_name portfolio.domainanda.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

