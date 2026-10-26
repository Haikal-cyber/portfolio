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