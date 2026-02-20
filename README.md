# ✂️ BG Remover Pro — Penghapus Latar Belakang Gambar Otomatis

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat&logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

**BG Remover Pro** adalah aplikasi web penghapus latar belakang gambar berbasis AI yang berjalan **100% di browser** — tanpa perlu server, tanpa upload data, privasi Anda sepenuhnya terjaga.

---

## 📸 Tangkapan Layar

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5aa8a988-2fe0-41e8-9607-605f0d0bbf27" />

---

## ✨ Fitur Utama

### Penghapusan Background
- 🤖 **AI-Powered** — Menggunakan library `@imgly/background-removal` v1.5.5 untuk deteksi objek dan penghapusan latar belakang secara otomatis.
- 🔒 **100% Client-Side** — Tidak ada gambar yang dikirim ke server manapun; semua proses berjalan di browser.
- 🖼️ **Multi-Format** — Mendukung format **PNG, JPG/JPEG, WebP, BMP, HEIC/HEIF** dengan ukuran maksimal **20MB** per file.

### Pengeditan Hasil
- 🎨 **Kustomisasi Background** — Pilih warna latar (transparan, putih, hitam, merah, hijau, biru, pink) atau gunakan *color picker* untuk warna kustom.
- 🔧 **Penyesuaian Tepi (Edge Adjustment)** — Kontrol kehalusan tepi (*feather*) dan erode/expand tepi untuk hasil lebih presisi.
- ✂️ **Crop & Resize** — Potong dan ubah ukuran hasil langsung di aplikasi dengan opsi pertahankan rasio aspek.

### Produktivitas
- 📦 **Batch Processing** — Upload dan proses beberapa gambar sekaligus dengan indikator progres antrian.
- 🔍 **Perbandingan Slider** — Bandingkan gambar asli dan hasil secara *side-by-side* atau menggunakan slider interaktif.
- 💾 **Multi-Format Download** — Unduh hasil dalam format **PNG** (transparan), **JPG** (dengan background, kualitas dapat diatur), atau **WebP**.
- 📋 **Paste dari Clipboard** — Tempel gambar langsung dari clipboard (`Ctrl+V`).

### Pengalaman Pengguna
- 🌙 **Mode Gelap/Terang** — Toggle tema sesuai preferensi, tersimpan otomatis.
- 🌐 **Multi-Bahasa** — Mendukung **Bahasa Indonesia** dan **English**, dengan pergantian bahasa instan.
- 📱 **Responsif** — Tampilan optimal di desktop, tablet, maupun perangkat mobile.
- 📜 **Riwayat Sesi** — Riwayat hasil pemrosesan tersimpan secara lokal di perangkat.
- ⚡ **Mode Kualitas Tinggi** — Opsi memproses gambar resolusi penuh tanpa *downscale* (gambar > 4000px otomatis di-*downscale* secara default).

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Versi | Keterangan |
|---|---|---|
| HTML5 | - | Struktur halaman |
| JavaScript (ES Modules) | - | Logika aplikasi |
| Bootstrap | 5.3.8 | Framework CSS & komponen UI |
| Bootstrap Icons | 1.11.3 | Ikon antarmuka |
| @imgly/background-removal | 1.5.5 | Model AI penghapusan background |

---

## 📦 Pemasangan

### Prasyarat
- Browser modern yang mendukung **ES Modules** dan **WebAssembly** (Chrome, Firefox, Safari, Edge versi terbaru).
- Koneksi internet diperlukan saat **pertama kali memuat** model AI (~40MB akan di-cache oleh browser).
