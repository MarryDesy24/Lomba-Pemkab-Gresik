# BAWEAN ACTION — SPRINT PLAN

**GIK 2026**  
**Basis:** PRD Bawean Action — Revisi MVP

## 1. Tujuan Sprint

Sprint difokuskan untuk menghasilkan prototype MVP yang dapat didemonstrasikan secara end-to-end pada lomba, dengan prioritas utama seluruh fitur **P0**.

Urutan pengembangan:
**Foundation → Landing → Safety → Checklist → Laporan Limbah → Aspirasi → Peta → Katalog → Dashboard Admin → Testing → Demo**

---

## 2. Prioritas MVP

### P0 — Wajib
- Landing Page
- Dashboard Keselamatan
- Checklist Sebelum Melaut
- Laporan Limbah
- Aspirasi Masyarakat
- Peta Laporan
- Katalog Produk Perikanan & Limbah
- Dashboard Admin

### P1 — Dikerjakan setelah P0 stabil
- SOS/Darurat
- Berita & Edukasi/K3

### P2 — Pengembangan lanjutan
- Dashboard Stakeholder
- Gamifikasi Keberlanjutan

---

## 3. Sprint 0 — Foundation & Planning

**Goal:** menyiapkan fondasi teknis dan desain.

### Tasks
- [ ] Finalisasi PRD dan scope P0/P1/P2
- [ ] Finalisasi sitemap
- [ ] Finalisasi user flow
- [ ] Setup repository GitHub
- [ ] Setup Next.js + React
- [ ] Setup Tailwind CSS
- [ ] Setup Supabase
- [ ] Rancang schema database
- [ ] Setup Auth dan role
- [ ] Setup RLS dasar
- [ ] Buat design system dasar
- [ ] Siapkan data demo

**Output:** project dapat dijalankan, database awal tersedia, dan struktur halaman disepakati.

**Definition of Done:**
- Project berjalan lokal.
- Repository terstruktur.
- Supabase terhubung.
- Role dasar tersedia.
- Data demo siap.

---

## 4. Sprint 1 — Landing Page & Safety

**Goal:** pengguna dapat memahami Bawean Action dan melihat informasi keselamatan.

### Tasks — Landing
- [ ] Hero section
- [ ] Nilai inovasi
- [ ] Statistik
- [ ] CTA
- [ ] Storytelling Bawean
- [ ] Preview fitur utama

### Tasks — Dashboard Keselamatan
- [ ] Status kondisi laut
- [ ] Indikator kewaspadaan
- [ ] Waktu update
- [ ] Sumber data
- [ ] Informasi sebelum melaut
- [ ] Label DEMO untuk data simulasi

**Output:** alur **Landing → Cek Kondisi Laut** berjalan.

**Acceptance:**
- Pengguna memahami fungsi platform.
- Status keselamatan dapat ditemukan dengan cepat.
- Sumber/waktu data terlihat.

---

## 5. Sprint 2 — Checklist Sebelum Melaut

**Goal:** nelayan dapat melakukan pemeriksaan kesiapan sebelum melaut.

### Tasks
- [ ] Desain checklist
- [ ] Daftar item kesiapan
- [ ] Checkbox/interaksi
- [ ] Perhitungan persentase
- [ ] Status hasil
- [ ] Penyimpanan checklist
- [ ] Riwayat checklist untuk user login

**Output:** alur **Dashboard Keselamatan → Checklist → Hasil Kesiapan**.

**Acceptance:**
- Semua item dapat dicentang.
- Persentase dihitung.
- Status hasil tampil.
- Data tersimpan.

---

## 6. Sprint 3 — Laporan Limbah & Peta

**Goal:** masyarakat dapat melaporkan limbah dan melihat laporan terverifikasi pada peta.

### Laporan Limbah
- [ ] Form kategori
- [ ] Upload foto
- [ ] Input lokasi
- [ ] Pilih lokasi pada peta
- [ ] Deskripsi
- [ ] Tanggal/waktu
- [ ] Status Menunggu Verifikasi
- [ ] Validasi form

### Peta
- [ ] Integrasi Leaflet/map provider
- [ ] Marker laporan
- [ ] Filter dasar
- [ ] Detail laporan
- [ ] Hanya tampilkan laporan terverifikasi

### Moderasi
- [ ] Review laporan
- [ ] Verifikasi
- [ ] Tolak
- [ ] Update status

**Output:** alur **Lapor Limbah → Verifikasi Admin → Peta Publik**.

---

## 7. Sprint 4 — Aspirasi Masyarakat

**Goal:** masyarakat memiliki kanal terstruktur untuk menyampaikan permasalahan/aspirasi Bawean.

### Tasks
- [ ] Halaman Aspirasi Masyarakat
- [ ] Form kategori
- [ ] Judul aspirasi
- [ ] Deskripsi
- [ ] Lokasi opsional
- [ ] Foto/bukti opsional
- [ ] Submit
- [ ] Status Menunggu Verifikasi
- [ ] Moderasi admin
- [ ] Status Diproses/Selesai/Ditolak
- [ ] Riwayat tindakan
- [ ] Statistik aspirasi di admin

**Output:** alur **Aspirasi → Verifikasi → Tindak Lanjut → Selesai**.

**Acceptance:**
- Aspirasi tersimpan.
- Admin dapat memoderasi.
- Status dapat berubah.
- Riwayat perubahan tercatat.

---

## 8. Sprint 5 — Katalog Produk Perikanan & Limbah

**Goal:** produk lokal dapat ditampilkan dan ditemukan pengguna.

### Tasks
- [ ] Halaman katalog
- [ ] Card produk
- [ ] Detail produk
- [ ] Foto
- [ ] Deskripsi
- [ ] Kategori
- [ ] Asal
- [ ] Harga opsional
- [ ] Kontak
- [ ] Search
- [ ] Filter
- [ ] CRUD produk admin

**Kategori contoh:**
- Produk perikanan
- Produk olahan perikanan
- Produk pemanfaatan/pengolahan limbah

**Output:** alur **Katalog → Detail → Hubungi Penjual/Kelompok**.

---

## 9. Sprint 6 — Dashboard Admin

**Goal:** seluruh alur P0 dapat dikelola dari satu dashboard.

### Tasks
- [ ] Login admin
- [ ] KPI cards
- [ ] Statistik laporan limbah
- [ ] Statistik aspirasi
- [ ] Statistik produk
- [ ] Daftar laporan terbaru
- [ ] Moderasi laporan
- [ ] Moderasi aspirasi
- [ ] CRUD produk
- [ ] Manajemen konten
- [ ] Audit log
- [ ] Role management

**Output:** admin dapat mengelola data P0 tanpa proses manual tersembunyi.

---

## 10. Sprint 7 — Integrasi End-to-End

**Goal:** seluruh fitur P0 terhubung dan siap diuji.

### End-to-End Flow
1. Pengguna membuka landing page.
2. Pengguna melihat status keselamatan.
3. Nelayan melakukan checklist.
4. Masyarakat membuat laporan limbah.
5. Masyarakat membuat aspirasi.
6. Data masuk database.
7. Admin melakukan moderasi.
8. Laporan terverifikasi muncul di peta.
9. Produk tampil di katalog.
10. Statistik diperbarui pada dashboard admin.

### Tasks
- [ ] Integrasi frontend-backend
- [ ] Validasi seluruh form
- [ ] Error handling
- [ ] Loading state
- [ ] Empty state
- [ ] Success notification
- [ ] Permission check
- [ ] RLS testing
- [ ] Mobile responsive testing

---

## 11. Sprint 8 — P1

**Goal:** menambahkan fitur pendukung setelah P0 stabil.

### SOS/Darurat
- [ ] Halaman/tombol SOS
- [ ] Kontak darurat tervalidasi
- [ ] Instruksi bantuan
- [ ] Permission lokasi
- [ ] Disclaimer

### Berita & Edukasi/K3
- [ ] Listing artikel
- [ ] Detail artikel
- [ ] Kategori
- [ ] CRUD admin
- [ ] Status publikasi

**Catatan:** jika waktu terbatas, P1 tidak boleh mengganggu penyelesaian P0.

---

## 12. Sprint 9 — Testing & UAT

**Goal:** memastikan prototype siap untuk penilaian dan demo.

### Testing
- [ ] Functional testing
- [ ] User acceptance testing
- [ ] Mobile testing
- [ ] Browser testing
- [ ] Auth testing
- [ ] RLS/security testing
- [ ] Form validation testing
- [ ] Upload testing
- [ ] Map testing

### KPI
- [ ] Task success ≥ 80%
- [ ] Status laut ditemukan ≤ 10 detik
- [ ] Keberhasilan laporan ≥ 90%
- [ ] Seluruh alur demo admin berhasil
- [ ] Seluruh halaman MVP usable pada mobile

### Output
- [ ] Daftar bug
- [ ] Prioritas bug
- [ ] Perbaikan bug kritis
- [ ] Regression test

---

## 13. Sprint 10 — Competition Demo

**Goal:** prototype siap dipresentasikan.

### Tasks
- [ ] Bersihkan data demo
- [ ] Siapkan akun demo
- [ ] Siapkan skenario presentasi
- [ ] Siapkan backup database
- [ ] Siapkan backup repository
- [ ] Pastikan data simulasi diberi label DEMO
- [ ] Pastikan koneksi demo
- [ ] Siapkan screenshot/video backup
- [ ] Latihan presentasi
- [ ] Latihan demo minimal 2 anggota tim

### Demo Flow
**Landing → Safety → Checklist → Laporan Limbah → Aspirasi → Admin → Peta → Katalog → Statistik**

---

## 14. P2 Backlog — Setelah Kompetisi / Jika P0-P1 Stabil

### Dashboard Stakeholder
- [ ] Dashboard pemerintah
- [ ] Dashboard mitra
- [ ] Filter periode
- [ ] Filter kategori
- [ ] Filter status
- [ ] Statistik agregat
- [ ] Export data ringkas

### Gamifikasi
- [ ] Sistem poin
- [ ] Badge kontribusi
- [ ] Riwayat kontribusi
- [ ] Leaderboard opsional

---

## 15. Sprint Board Template

| Task | PIC | Priority | Status | Dependency | Notes |
|---|---|---|---|---|---|
| Setup project | Dessy | P0 | Todo | - | |
| Database schema | Tim teknis | P0 | Todo | Setup project | |
| Landing Page | Dessy/Ikmal | P0 | Todo | Design system | |
| Dashboard Keselamatan | Dessy | P0 | Todo | Database | |
| Checklist | Dessy | P0 | Todo | Auth | |
| Laporan Limbah | Dessy | P0 | Todo | Storage + DB | |
| Peta Laporan | Dessy | P0 | Todo | Waste reports | |
| Aspirasi Masyarakat | Dessy | P0 | Todo | DB | |
| Katalog Produk | Dessy | P0 | Todo | DB | |
| Dashboard Admin | Dessy | P0 | Todo | Semua modul P0 | |
| SOS | Tim | P1 | Backlog | P0 stabil | |
| Berita & Edukasi | Tim | P1 | Backlog | Admin | |
| Dashboard Stakeholder | Tim | P2 | Backlog | Admin | |
| Gamifikasi | Tim | P2 | Backlog | Auth | |

---

## 16. Definition of Done Sprint

Sebuah task dianggap selesai jika:
- [ ] Fitur berjalan sesuai requirement.
- [ ] Tidak ada error kritis.
- [ ] Responsive pada mobile.
- [ ] Validasi input tersedia.
- [ ] Data tersimpan/terambil dengan benar.
- [ ] Permission sesuai role.
- [ ] Sudah diuji minimal oleh PIC.
- [ ] Sudah diintegrasikan ke branch utama sesuai workflow tim.
- [ ] Tidak merusak fitur yang sudah selesai.

## 17. Aturan Prioritas Tim

1. **P0 tidak boleh dikorbankan untuk P1/P2.**
2. Kerjakan alur end-to-end lebih dahulu daripada memperbanyak fitur.
3. Gunakan data demo yang konsisten.
4. Semua data keselamatan yang belum berasal dari sumber tervalidasi harus diberi label **DEMO**.
5. Jangan membuat klaim bahwa sistem menjamin keselamatan.
6. Privasi lokasi dan data pengguna harus dijaga.
7. Setiap perubahan status laporan/aspirasi harus dapat dilacak.
