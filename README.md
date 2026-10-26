## HOW TO RUN


> Semua "perintah" di bawah ditulis di **Terminal** (Mac) atau **Command Prompt / PowerShell** (Windows), lalu tekan **Enter**.

### 1. Install Node.js

Node.js adalah program yang dibutuhkan untuk menjalankan website ini.

1. Buka https://nodejs.org
2. Klik tombol hijau besar bertuliskan **LTS**, lalu download.
3. Buka file hasil download, lalu klik **Next** terus sampai selesai.

Cek apakah berhasil: di Terminal ketik `node -v` lalu Enter. Kalau muncul angka (misalnya `v20.10.0`), berarti sukses.

### 2. Install Git

1. Buka https://git-scm.com/downloads
2. Download sesuai sistem operasi, lalu install (klik Next terus sampai selesai).

### 3. Clone (menyalin) project ke komputer

Di Terminal, jalankan perintah ini:

```bash
git clone https://github.com/Haikal-cyber/portfolio.git
```

Setelah selesai, akan muncul folder baru bernama `portfolio`.

### 4. Masuk ke folder project

```bash
cd portfolio
```

### 5. Install bahan-bahan yang dibutuhkan

```bash
npm install
```

Tunggu sampai selesai (bisa beberapa menit, jangan ditutup).

### 6. Jalankan website

```bash
npm run dev
```

Kalau muncul tulisan `Local: http://localhost:5173/`, berarti website sudah berjalan.

### 7. Buka website di browser

Buka Chrome/Safari, lalu ketik alamat ini di kolom URL:

```
http://localhost:5173
```

Website akan muncul. 🎉

### Cara menghentikan

Di Terminal, tekan **Ctrl + C**. Website akan berhenti.

> Kalau ada langkah yang error, copy-paste pesan errornya lalu tanyakan ke pembuat project.

## Tech Stack

- Vite 5 + React 18
- `three.js` — badge lanyard 3D (`src/components/Lanyard.jsx`)
- `lucide-react` — ikon
- Google Fonts: Fraunces (display) + Inter (body)

## Prasyarat

- Node.js (disarankan versi 18 atau lebih baru)

## Cara menjalankan

```bash
# 1. install dependencies
npm install

# 2. jalankan server development
npm run dev
```

Buka http://localhost:5173 di browser.

## Build produksi

```bash
npm run build      # hasil build di folder dist/
npm run preview    # pratinjau hasil build produksi
```

## Mengubah konten

- Semua teks ada di `src/data.js` (nama, deskripsi, fokus, pengalaman, kontak).
- Ganti email kontak di `contact.email` — masih placeholder `hello@example.com`.
- Foto badge tertanam di `public/card-front.svg`. Ganti dengan foto lain bila perlu.
- Warna dan font (design tokens) ada di `src/index.css` pada blok `:root`.

## Share preview sementara (tanpa deploy)

```bash
# pastikan server dev berjalan
npm run dev

# di terminal lain
cloudflared tunnel --url http://localhost:5173
```

Perintah `cloudflared` akan menghasilkan URL acak `*.trycloudflare.com` yang bisa dibagikan. URL hanya aktif selama kedua perintah di atas tetap berjalan.