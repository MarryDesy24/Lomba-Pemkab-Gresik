# BAWEAN ACTION — PRODUCT REQUIREMENTS DOCUMENT

**GIK 2026**  
**Aksi Nyata Laut Bawean: Navigasi Cermat, Nelayan Selamat, Bebas Limbah, Perikanan untuk Meningkatkan Perekonomian**

> Platform: Website responsif (desktop & mobile web)  
> Status: PRD — basis pengembangan prototype/MVP

---

## 1. Ringkasan Eksekutif

Bawean Action adalah platform website yang dirancang sebagai pusat informasi keselamatan, pengelolaan limbah, partisipasi masyarakat, dan promosi ekonomi perikanan di Bawean. Produk ini berangkat dari masalah risiko nelayan ketika kondisi tidak aman, persoalan limbah di kawasan pesisir/laut, kebutuhan kanal aspirasi masyarakat, serta belum maksimalnya promosi produk perikanan lokal.

Dalam Gresik Inovasi Kompetisi (GIK) 2026, inovasi diarahkan untuk menghubungkan keselamatan nelayan, kebersihan pesisir, aspirasi masyarakat, dan ekonomi perikanan dalam satu ekosistem digital.

PRD ini menjadi acuan pengembangan prototype/MVP, pengujian pengguna, dan demonstrasi lomba.

## 2. Problem Statement

| Masalah | Dampak | Peluang Solusi Digital |
|---|---|---|
| Nelayan menghadapi risiko ketika mengambil keputusan melaut pada kondisi yang berubah. | Risiko keselamatan serta kerugian waktu/biaya. | Dashboard keselamatan, status kewaspadaan, informasi sebelum melaut, dan checklist. |
| Informasi keselamatan dan kondisi lapangan belum terpusat. | Informasi tersebar dan sulit digunakan untuk keputusan cepat. | Dashboard informasi yang mudah dibaca dari ponsel. |
| Limbah pesisir/laut membutuhkan partisipasi banyak pihak. | Kualitas lingkungan dan daya tarik kawasan pesisir dapat menurun. | Pelaporan limbah, dokumentasi, pemetaan titik, dan status tindak lanjut. |
| Masyarakat membutuhkan kanal untuk menyampaikan permasalahan/aspirasi daerah Bawean. | Aspirasi berpotensi tidak terdokumentasi dan sulit ditindaklanjuti. | Form aspirasi dan pemantauan status tindak lanjut oleh admin/mitra. |
| Potensi produk perikanan dan pemanfaatan limbah belum maksimal dipromosikan secara digital. | Nilai ekonomi dan jangkauan pasar terbatas. | Katalog produk perikanan dan produk olahan/pemanfaatan limbah. |
| Stakeholder memiliki kebutuhan informasi yang berbeda. | Koordinasi dapat lambat atau tidak terdokumentasi. | Dashboard stakeholder sebagai pengembangan lanjutan. |

## 3. Tujuan Produk

1. Menyediakan portal digital yang membantu masyarakat dan nelayan mengakses informasi keselamatan laut.
2. Mendorong perilaku preventif melalui checklist kesiapan melaut dan status kewaspadaan.
3. Membuka kanal partisipasi masyarakat untuk melaporkan limbah dan menyampaikan aspirasi terkait permasalahan Bawean.
4. Mendokumentasikan laporan, verifikasi, dan status tindak lanjut.
5. Mempromosikan produk/hasil perikanan serta produk berbasis pemanfaatan limbah secara digital.
6. Menyediakan statistik inti bagi admin dan, pada tahap lanjutan, stakeholder.
7. Menghubungkan keselamatan nelayan, lingkungan, aspirasi masyarakat, dan ekonomi lokal dalam satu alur digital.

## 4. Target Pengguna & Stakeholder

| Aktor | Kebutuhan Utama | Fitur |
|---|---|---|
| Nelayan | Informasi kondisi laut dan kesiapan melaut. | Dashboard keselamatan, checklist sebelum melaut. |
| Masyarakat | Melaporkan limbah dan menyampaikan aspirasi. | Laporan limbah, peta laporan, form aspirasi. |
| Pengunjung | Mengetahui informasi dan produk lokal. | Landing page, katalog, informasi publik. |
| Pemerintah/mitra | Melihat laporan dan tindak lanjut. | Dashboard admin; dashboard stakeholder pada P2. |
| Admin | Mengelola dan memoderasi data. | Dashboard admin, moderasi, CRUD konten/produk, statistik. |
| Industri/kelompok/penjual | Mempromosikan produk. | Katalog produk dan kontak. |
| Media | Mengakses informasi publik terstruktur. | Informasi publik dan data ringkas; pengembangan lanjutan. |

## 5. Value Proposition

- **SAFE** — membantu nelayan memperoleh informasi pendukung sebelum melaut.
- **CLEAN** — mengubah masyarakat menjadi pelapor dan bagian dari pengelolaan limbah.
- **VOICE** — menyediakan ruang bagi masyarakat untuk menyampaikan aspirasi/permasalahan Bawean.
- **PROMOTE** — mengangkat produk perikanan dan pemanfaatan limbah melalui katalog digital.
- **CONNECT** — mempertemukan masyarakat, nelayan, pemerintah, mitra, dan pelaku ekonomi lokal.

**Novelty:** keselamatan nelayan + pengelolaan limbah + aspirasi masyarakat + promosi ekonomi perikanan ditempatkan dalam satu alur layanan digital berbasis komunitas.

## 6. Konsep Produk

Pendekatan produk adalah **“informasi → aksi → validasi → dampak”**.

1. Pengguna melihat informasi/status keselamatan.
2. Nelayan melakukan checklist sebelum melaut.
3. Masyarakat mengirim laporan limbah atau aspirasi.
4. Admin melakukan verifikasi dan memperbarui status.
5. Data yang telah diverifikasi dapat divisualisasikan pada peta/statistik.
6. Pengguna menjelajahi katalog produk lokal.

## 7. Scope MVP

### P0 — Wajib untuk prototype

| Prioritas | Fitur | Keterangan |
|---|---|---|
| P0 | Landing Page | Nilai inovasi, statistik, CTA, cerita Bawean Action. |
| P0 | Dashboard Keselamatan | Status kondisi, indikator kewaspadaan, informasi sebelum melaut. |
| P0 | Checklist Sebelum Melaut | Checklist sederhana dan pencatatan status kesiapan. |
| P0 | Laporan Limbah | Form foto/lokasi/kategori/deskripsi dan status tindak lanjut. |
| P0 | Aspirasi Masyarakat | Form untuk menyampaikan permasalahan/aspirasi di Bawean agar dapat ditindaklanjuti pemerintah/mitra. |
| P0 | Peta Laporan | Visualisasi titik laporan limbah yang telah dipublikasikan/terverifikasi. |
| P0 | Katalog Produk Perikanan & Limbah | Produk, foto, deskripsi, asal, dan kontak penjual/kelompok. |
| P0 | Dashboard Admin | Moderasi laporan limbah dan aspirasi, pengelolaan konten/produk, dan statistik. |

### P1 — Setelah P0 stabil

| Prioritas | Fitur | Keterangan |
|---|---|---|
| P1 | SOS/Darurat | Tombol bantuan yang menampilkan instruksi kontak darurat dan lokasi pengguna jika diizinkan. |
| P1 | Berita & Edukasi (K3) | Artikel keselamatan, lingkungan, dan ekonomi perikanan. |

### P2 — Pengembangan lanjutan

| Prioritas | Fitur | Keterangan |
|---|---|---|
| P2 | Dashboard Stakeholder | Ringkasan data khusus pemerintah/mitra/media. |
| P2 | Gamifikasi Keberlanjutan (opsional) | Poin/badge untuk kontribusi masyarakat. |

**Catatan scope:** Aksi Bersih tidak menjadi fitur MVP terbaru dan dapat dipertimbangkan pada pengembangan lanjutan.

## 8. Functional Requirements

### FR-01 — Landing Page
- Menampilkan nama, tagline, masalah, solusi, dan nilai inovasi.
- CTA utama: **Cek Kondisi Laut**, **Lapor Limbah**, **Sampaikan Aspirasi**, **Jelajahi Produk**.
- Menampilkan statistik dampak dari data sistem.
- Menampilkan storytelling Bawean Action.

### FR-02 — Dashboard Keselamatan
- Menampilkan status kondisi/kewaspadaan.
- Menampilkan waktu pembaruan dan sumber data.
- Menampilkan informasi pendukung sebelum melaut.
- Jika data eksternal belum tersedia, data simulasi diberi label **DEMO**.

### FR-03 — Checklist Sebelum Melaut
- Item kesiapan kapal, alat komunikasi, perlengkapan keselamatan, dan kondisi.
- Menghitung persentase kesiapan.
- Menampilkan status hasil checklist.
- Riwayat dapat disimpan untuk pengguna login.

### FR-04 — Laporan Limbah
- Form minimal: kategori, foto, lokasi, deskripsi, tanggal/waktu.
- Lokasi dapat dipilih di peta atau diisi manual.
- Status awal: **Menunggu Verifikasi**.
- Admin dapat mengubah status menjadi **Diverifikasi, Diproses, Selesai, atau Ditolak**.
- Laporan terverifikasi dapat muncul di peta publik sesuai kebijakan privasi.

### FR-05 — Aspirasi Masyarakat
- Form minimal: kategori/permasalahan, judul, deskripsi, lokasi opsional, foto/bukti opsional.
- Laporan masuk dengan status **Menunggu Verifikasi**.
- Admin dapat memoderasi dan memberi status tindak lanjut.
- Status yang disarankan: Menunggu Verifikasi, Diverifikasi, Diproses, Selesai, Ditolak.
- Data publik hanya menampilkan informasi yang aman dan telah diverifikasi.
- Statistik aspirasi dapat dihitung pada dashboard admin.

### FR-06 — Peta Laporan
- Menampilkan titik laporan limbah yang telah diverifikasi/dipublikasikan.
- Detail titik menampilkan kategori, waktu, status, dan informasi yang telah disetujui.
- Data lokasi sensitif diminimalkan.

### FR-07 — Katalog Produk Perikanan & Limbah
- Admin/mitra dapat menambah produk.
- Field: nama, foto, deskripsi, kategori, asal, harga opsional, kontak.
- Kategori dapat mencakup produk perikanan dan produk hasil pemanfaatan/pengolahan limbah.
- Pengunjung dapat mencari/filter.
- CTA menghubungi penjual/kelompok melalui kanal yang disediakan.

### FR-08 — Dashboard Admin
- KPI: laporan limbah, aspirasi, produk, dan status tindak lanjut.
- Moderasi laporan dan aspirasi.
- CRUD produk dan konten.
- Pengelolaan status.
- Statistik inti.
- Audit perubahan data penting.

### FR-09 — SOS/Darurat (P1)
- Menampilkan instruksi kontak darurat yang telah diverifikasi.
- Jika menggunakan lokasi pengguna, meminta izin terlebih dahulu.
- Tidak mengklaim sebagai pengganti layanan keselamatan resmi.

### FR-10 — Berita & Edukasi/K3 (P1)
- Artikel keselamatan, lingkungan, perikanan, dan ekonomi lokal.
- Admin dapat membuat, mengedit, dan mempublikasikan artikel.

### FR-11 — Dashboard Stakeholder (P2)
- Agregasi data tanpa membuka data pribadi.
- Filter periode, kategori, dan status.
- Dapat dikembangkan untuk kebutuhan pemerintah/mitra/media.

### FR-12 — Gamifikasi Keberlanjutan (P2)
- Poin/badge untuk kontribusi masyarakat.
- Bersifat opsional dan tidak menghambat alur utama MVP.

## 9. User Flow Utama

### Pengunjung
**Landing → Cek Kondisi Laut → Detail Status → Checklist → Hasil Kesiapan**

### Masyarakat — Laporan Limbah
**Landing → Lapor Limbah → Isi Form + Foto + Lokasi → Kirim → Menunggu Verifikasi → Diverifikasi → Peta Publik**

### Masyarakat — Aspirasi
**Landing → Sampaikan Aspirasi → Isi Form → Kirim → Menunggu Verifikasi → Diproses → Selesai**

### Pengguna — Produk
**Landing → Produk → Cari/Filter → Detail Produk → Hubungi Penjual/Kelompok**

### Admin
**Login → Dashboard Admin → Laporan/Aspirasi Masuk → Review → Verifikasi/Tolak → Update Status → Statistik**

## 10. Sitemap

- Beranda
- Keselamatan
  - Status Kondisi Laut
  - Checklist Sebelum Melaut
- Lapor Limbah
  - Buat Laporan
  - Peta Laporan
- Aspirasi Masyarakat
  - Sampaikan Aspirasi
  - Status Aspirasi
- Produk
  - Produk Perikanan
  - Produk Pemanfaatan Limbah
  - Detail Produk
- Informasi
  - Berita & Edukasi (P1)
- Tentang Bawean Action
- Login
- Dashboard
  - Admin
  - Stakeholder (P2)

## 11. Role & Access Control

| Role | Hak Akses |
|---|---|
| Public | Melihat landing, status keselamatan, peta terverifikasi, produk, dan informasi publik. |
| Nelayan | Public + checklist dan riwayat checklist jika login. |
| Masyarakat | Public + membuat laporan limbah dan aspirasi. |
| Admin | Mengelola data, moderasi, user, produk, konten, dan statistik. |
| Stakeholder | Dashboard agregat dan tindak lanjut sesuai kewenangan pada tahap P2. |

## 12. Data Model / Database

| Tabel | Field Utama | Keterangan |
|---|---|---|
| profiles | id, name, phone, role, village, created_at | Profil pengguna. |
| sea_conditions | id, status, summary, source, recorded_at | Data kondisi/status laut. |
| pre_sail_checklists | id, user_id, score, status, created_at | Riwayat checklist. |
| checklist_items | id, checklist_id, item, checked | Item pemeriksaan. |
| waste_reports | id, reporter_id, category, description, latitude, longitude, photo_url, status, created_at | Laporan limbah. |
| waste_actions | id, report_id, actor_id, action, note, created_at | Riwayat tindak lanjut limbah. |
| aspirations | id, reporter_id, category, title, description, latitude, longitude, photo_url, status, created_at | Aspirasi/permasalahan masyarakat. |
| aspiration_actions | id, aspiration_id, actor_id, action, note, created_at | Riwayat tindak lanjut aspirasi. |
| products | id, seller_id, name, category, description, image_url, price, contact, status | Katalog produk perikanan/pemanfaatan limbah. |
| articles | id, title, slug, category, content, thumbnail, author_id, status, published_at | Konten berita/edukasi P1. |
| notifications | id, user_id, title, message, read_at | Notifikasi. |
| audit_logs | id, actor_id, action, entity, entity_id, created_at | Jejak perubahan data. |

## 13. Integrasi Teknologi

| Komponen | Rekomendasi | Fungsi |
|---|---|---|
| Frontend | Next.js + React | Website responsif dan routing. |
| UI | Tailwind CSS | Design system dan responsive layout. |
| Backend/Database | Supabase | PostgreSQL, Auth, Storage, API. |
| Map | Leaflet / map provider | Peta laporan dan titik lokasi. |
| Weather/Marine API | Tahap lanjutan | Data kondisi cuaca/laut setelah sumber tervalidasi. |
| Deployment | Vercel | Hosting frontend. |
| Version Control | GitHub | Kolaborasi dan versioning. |

Untuk demo, data simulasi keselamatan harus diberi label **DEMO** apabila API belum tersedia.

## 14. Non-Functional Requirements

- **Responsive:** optimal pada ponsel.
- **Performance:** aset ringan, gambar dikompresi dan lazy loading bila perlu.
- **Availability:** dapat diakses selama demo dan pengujian.
- **Security:** Auth, role-based access, validasi input, RLS, pembatasan data pribadi.
- **Privacy:** lokasi dan data pribadi tidak ditampilkan tanpa persetujuan.
- **Accessibility:** status tidak hanya bergantung pada warna; gunakan teks dan ikon.
- **Maintainability:** komponen UI reusable dan dokumentasi setup tersedia.
- **Auditability:** perubahan status laporan/aspirasi tercatat.

## 15. UX/UI Guideline

- Mobile-first.
- Status keselamatan dapat dipahami dalam 3–5 detik.
- Gunakan kombinasi warna + ikon + teks.
- CTA utama jelas.
- Gunakan visual autentik Bawean.
- Dashboard memakai kartu statistik, peta, grafik sederhana, dan tabel secukupnya.
- Form laporan dan aspirasi dibuat sederhana agar mudah digunakan masyarakat.

## 16. Metrics / KPI Produk

| KPI | Target Prototype |
|---|---|
| Task success | ≥ 80% pada uji pengguna awal. |
| Waktu menemukan status laut | ≤ 10 detik. |
| Keberhasilan laporan | ≥ 90%. |
| Moderasi admin | 100% alur demo berhasil. |
| Katalog | 100% alur demo berhasil. |
| Responsiveness | 100% halaman MVP usable pada mobile. |

Target merupakan target pengembangan/uji prototype, bukan angka resmi GIK.

## 17. Acceptance Criteria MVP

- Landing page menjelaskan masalah, solusi, dan nilai inovasi.
- Status keselamatan dapat dilihat beserta waktu update/sumber.
- Checklist menghasilkan status kesiapan.
- Masyarakat dapat membuat laporan limbah dengan foto, kategori, lokasi, dan deskripsi.
- Masyarakat dapat mengirim aspirasi/permasalahan Bawean.
- Admin dapat memverifikasi laporan limbah dan aspirasi.
- Laporan limbah terverifikasi dapat muncul di peta.
- Produk dapat ditambahkan dan ditemukan pengguna.
- Dashboard admin menampilkan statistik inti.
- Website usable pada perangkat mobile.
- Demo end-to-end dari input pengguna → database → dashboard admin berjalan.

## 18. Security & Privacy Checklist

- Authentication untuk fitur yang membutuhkan akun.
- RLS pada database.
- Role admin, nelayan, masyarakat, dan stakeholder dipisahkan.
- Validasi ukuran/tipe foto.
- Password tidak disimpan manual.
- Service-role key tidak diekspos di frontend.
- Secret/API key menggunakan environment variables.
- Data pribadi publik diminimalkan.
- Aksi admin yang mengubah status dicatat.

## 19. Backlog Pengembangan

| Epic | Task | Priority |
|---|---|---|
| Foundation | Setup project, routing, design system | P0 |
| Foundation | Supabase schema + Auth + RLS | P0 |
| Home | Landing page + CTA | P0 |
| Safety | Status keselamatan + data source | P0 |
| Safety | Checklist | P0 |
| Waste | Form laporan + upload foto | P0 |
| Waste | Map + moderation | P0 |
| Community | Form aspirasi + status | P0 |
| Economy | Katalog produk perikanan & limbah | P0 |
| Admin | Dashboard + CRUD + moderasi | P0 |
| Content | Berita/edukasi K3 | P1 |
| Safety | SOS/contact flow | P1 |
| Stakeholder | Dashboard agregat | P2 |
| Engagement | Gamifikasi | P2 |

## 20. Roadmap

1. **Discovery:** validasi masalah, persona, data lapangan.
2. **UX/UI:** sitemap, user flow, wireframe, visual design.
3. **MVP:** landing, safety, checklist, laporan limbah, aspirasi, peta, katalog, admin.
4. **P1:** SOS dan berita/edukasi.
5. **Testing:** UAT dan perbaikan usability.
6. **Competition Demo:** data demo bersih, skenario presentasi, backup.
7. **Scale-up:** dashboard stakeholder dan gamifikasi.

## 21. Skenario Demo

1. Buka landing page dan jelaskan hubungan keselamatan, limbah, aspirasi, dan ekonomi.
2. Buka Dashboard Keselamatan dan tunjukkan status serta waktu update.
3. Jalankan checklist sebelum melaut dan tampilkan hasil.
4. Sebagai masyarakat, kirim laporan limbah dengan foto dan lokasi.
5. Kirim satu contoh aspirasi masyarakat.
6. Login sebagai admin dan verifikasi laporan/aspirasi.
7. Kembali ke peta publik dan tunjukkan titik laporan terverifikasi.
8. Buka katalog dan tampilkan produk perikanan/pemanfaatan limbah.
9. Tampilkan dashboard admin dan statistik.
10. Tutup dengan potensi kolaborasi pemerintah, masyarakat, nelayan, dan mitra.

## 22. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Data cuaca/laut tidak tersedia | Safety tidak real-time. | Gunakan data simulasi berlabel DEMO dan sumber tervalidasi untuk tahap lanjutan. |
| Koneksi internet lemah | Sulit mengakses website. | Mobile-first, aset ringan, kompresi. |
| Laporan palsu/spam | Data peta/statistik tidak terpercaya. | Moderasi, status verifikasi, rate limiting, audit log. |
| Aspirasi tidak relevan/spam | Dashboard tidak representatif. | Moderasi admin dan kategori/status. |
| Lokasi sensitif | Risiko privasi. | Minimalkan detail lokasi publik dan minta persetujuan. |
| Scope terlalu besar | Prototype tidak selesai. | Kunci P0 terlebih dahulu; P1/P2 setelah P0 stabil. |
| Klaim keselamatan berlebihan | Risiko kredibilitas. | Gunakan bahasa “informasi pendukung”, sumber/waktu data, dan disclaimer. |

## 23. Definition of Done

- Semua fitur P0 memenuhi acceptance criteria.
- Tidak ada error kritis pada alur demo.
- Role dan RLS diuji.
- Form memiliki validasi.
- Upload foto dan peta berjalan.
- Data demo konsisten dan diberi label jika simulasi.
- Tampilan mobile diuji.
- Repository memiliki README setup.
- Environment variables didokumentasikan tanpa secret.
- Skenario demo dapat dijalankan oleh minimal dua anggota tim.

## 24. Catatan Pengembangan

PRD ini merupakan dokumen teknis untuk prototype Bawean Action. Narasi proposal perlu menekankan hubungan masalah lokal Bawean, inovasi digital, manfaat sosial-lingkungan, penguatan produk unggulan daerah, dan dampak ekonomi.

**Data yang masih perlu dikunci tim:**
- Nama tim dan anggota.
- Batas wilayah/area pilot Bawean.
- Data faktual masalah keselamatan dan sumbernya.
- Jenis limbah prioritas.
- Sumber data cuaca/kelautan.
- Daftar kontak darurat resmi.
- Stakeholder/mitra.
- Data produk perikanan dan produk pemanfaatan limbah yang boleh dipublikasikan.
