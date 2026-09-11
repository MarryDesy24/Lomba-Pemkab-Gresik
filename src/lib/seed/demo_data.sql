-- Bawean Action Demo Seed Data
-- Based on PRD.md Section 21: Skenario Demo

-- ============================================================
-- PROFILES (Demo Data)
-- ============================================================

-- Admin user (for demo purposes only)
INSERT INTO profiles (id, name, phone, role, village) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Admin Bawean Action', '0812-3456-7890', 'admin', 'Bawean');

-- Demo users
INSERT INTO profiles (id, name, phone, role, village) VALUES
  ('00000000-0000-0000-0000-000000000002', 'Budi Nelayan', '0812-3456-7891', 'nelayan', 'Duduk'),
  ('00000000-0000-0000-0000-000000000003', 'Siti Masyarakat', '0812-3456-7892', 'masyarakat', 'Sukorame'),
  ('00000000-0000-0000-0000-000000000004', 'Ahmad Warga', '0812-3456-7893', 'masyarakat', 'Kepundungan');

-- ============================================================
-- SEA CONDITIONS (Demo Data - Labeled as DEMO)
-- ============================================================

INSERT INTO sea_conditions (id, status, summary, source, recorded_at) VALUES
  ('00000000-0000-0000-0000-000000000010', 'aman', 'Kondisi laut aman untuk beraktivitas. Angin 10-15 km/jam, gelombang 0.5-1.0 meter.', 'BMKG (DATA DEMO)', NOW() - INTERVAL '2 hours');

INSERT INTO sea_conditions (id, status, summary, source, recorded_at) VALUES
  ('00000000-0000-0000-0000-000000000011', 'waspada', 'Cuaca buruk diprediksi. Nelayan diimbau waspada.', 'BMKG (DATA DEMO)', NOW() - INTERVAL '1 day');

INSERT INTO sea_conditions (id, status, summary, source, recorded_at) VALUES
  ('00000000-0000-0000-0000-000000000012', 'bahaya', 'Gelombang tinggi 2.5-3.0 meter. Tidak disarankan melaut.', 'BMKG (DATA DEMO)', NOW() - INTERVAL '3 days');

-- ============================================================
-- PRE-SAIL CHECKLISTS (Demo Data)
-- ============================================================

INSERT INTO pre_sail_checklists (id, user_id, score, status) VALUES
  ('00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000002', 85, 'siap'),
  ('00000000-0000-0000-0000-000000000021', '00000000-0000-0000-0000-000000000002', 60, 'perlu_perhatian'),
  ('00000000-0000-0000-0000-000000000022', '00000000-0000-0000-0000-000000000002', 45, 'tidak_siap');

-- ============================================================
-- CHECKLIST ITEMS (Demo Data)
-- ============================================================

-- Checklist 1 items (ready)
INSERT INTO checklist_items (checklist_id, item, checked) VALUES
  ('00000000-0000-0000-0000-000000000020', 'Kondisi kapal baik', true),
  ('00000000-0000-0000-0000-000000000020', 'BBM cukup', true),
  ('00000000-0000-0000-0000-000000000020', 'Alat komunikasi aktif', true),
  ('00000000-0000-0000-0000-000000000020', 'Peralatan keselamatan lengkap', true),
  ('00000000-0000-0000-0000-000000000020', 'Cuaca mendukung', false);

-- Checklist 2 items (needs attention)
INSERT INTO checklist_items (checklist_id, item, checked) VALUES
  ('00000000-0000-0000-0000-000000000021', 'Kondisi kapal baik', true),
  ('00000000-0000-0000-0000-000000000021', 'BBM cukup', true),
  ('00000000-0000-0000-0000-000000000021', 'Alat komunikasi aktif', false),
  ('00000000-0000-0000-0000-000000000021', 'Peralatan keselamatan lengkap', true),
  ('00000000-0000-0000-0000-000000000021', 'Cuaca mendukung', true);

-- ============================================================
-- WASTE REPORTS (Demo Data)
-- ============================================================

INSERT INTO waste_reports (id, reporter_id, category, description, latitude, longitude, photo_url, status) VALUES
  ('00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000003', 'plastik', 'Tumpukan plastik ditemukan di area pantai utara Bawean. Beberapa kantong plastik dan botol berserakan.', -5.8795, 112.7956, '/demo/plastic-waste.jpg', 'diverifikasi');

INSERT INTO waste_reports (id, reporter_id, category, description, latitude, longitude, photo_url, status) VALUES
  ('00000000-0000-0000-0000-000000000031', '00000000-0000-0000-0000-000000000004', 'logam', 'Limbah logam bekas di area dermaga pelabuhan. Perlu ditangani segera.', -5.8780, 112.7940, '/demo/metal-waste.jpg', 'diproses');

INSERT INTO waste_reports (id, reporter_id, category, description, latitude, longitude, photo_url, status) VALUES
  ('00000000-0000-0000-0000-000000000032', '00000000-0000-0000-0000-000000000003', 'organik', 'Limbah organik dari aktivitas nelayan di tepi laut.', -5.8810, 112.7970, '/demo/organic-waste.jpg', 'menunggu_verifikasi');

INSERT INTO waste_reports (id, reporter_id, category, description, latitude, longitude, photo_url, status) VALUES
  ('00000000-0000-0000-0000-000000000033', '00000000-0000-0000-0000-000000000004', 'kaca', 'Botol kaca pecah di area wisata pantai. Berbahaya bagi pengunjung.', -5.8825, 112.7985, '/demo/glass-waste.jpg', 'selesai');

-- ============================================================
-- WASTE ACTIONS (Demo Data)
-- ============================================================

INSERT INTO waste_actions (report_id, actor_id, action, note) VALUES
  ('00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000001', 'verifikasi', 'Laporan diverifikasi. Tim cleanup akan diturunkan.');

INSERT INTO waste_actions (report_id, actor_id, action, note) VALUES
  ('00000000-0000-0000-0000-000000000031', '00000000-0000-0000-0000-000000000001', 'verifikasi', 'Laporan diverifikasi. Menghubungi dinas terkait.');

INSERT INTO waste_actions (report_id, actor_id, action, note) VALUES
  ('00000000-0000-0000-0000-000000000033', '00000000-0000-0000-0000-000000000001', 'verifikasi', 'Laporan diverifikasi.');
INSERT INTO waste_actions (report_id, actor_id, action, note) VALUES
  ('00000000-0000-0000-0000-000000000033', '00000000-0000-0000-0000-000000000001', 'selesai', 'Sudah dibersihkan oleh tim cleanup.');

-- ============================================================
-- ASPIRATIONS (Demo Data)
-- ============================================================

INSERT INTO aspirations (id, reporter_id, category, title, description, latitude, longitude, photo_url, status) VALUES
  ('00000000-0000-0000-0000-000000000040', '00000000-0000-0000-0000-000000000003', 'infrastruktur', 'Perbaikan Jalan Menuju Pelabuhan', 'Jalan menuju pelabuhan rusak parah dan berlubang. Sangat membahayakan keselamatan nelayan dan kendaraan.', -5.8790, 112.7950, '/demo/road-damage.jpg', 'diproses');

INSERT INTO aspirations (id, reporter_id, category, title, description, latitude, longitude, photo_url, status) VALUES
  ('00000000-0000-0000-0000-000000000041', '00000000-0000-0000-0000-000000000004', 'lingkungan', 'Penyediaan Tempat Sampah di Pantai', 'Pantai Bawean membutuhkan lebih banyak tempat sampah untuk menjaga kebersihan dan mengurangi limbah laut.', -5.8800, 112.7960, null, 'diverifikasi');

INSERT INTO aspirations (id, reporter_id, category, title, description, latitude, longitude, photo_url, status) VALUES
  ('00000000-0000-0000-0000-000000000042', '00000000-0000-0000-0000-000000000003', 'ekonomi', 'Pelatihan Pemasaran Online untuk Nelayan', 'Nelayan perlu dilatih cara memasarkan produk secara online untuk meningkatkan nilai jual.', null, null, null, 'selesai');

INSERT INTO aspirations (id, reporter_id, category, title, description, latitude, longitude, photo_url, status) VALUES
  ('00000000-0000-0000-0000-000000000043', '00000000-0000-0000-0000-000000000004', 'sosial', 'Pengadaan Posyandu di Desa Pesisir', 'Desa-desa pesisir membutuhkan posyandu untuk pelayanan kesehatan ibu dan anak.', -5.8820, 112.7980, null, 'menunggu_verifikasi');

-- ============================================================
-- ASPIRATION ACTIONS (Demo Data)
-- ============================================================

INSERT INTO aspiration_actions (aspiration_id, actor_id, action, note) VALUES
  ('00000000-0000-0000-0000-000000000040', '00000000-0000-0000-0000-000000000001', 'verifikasi', 'Aspirasi diverifikasi. Menghubungi Dinas Pekerjaan Umum.');

INSERT INTO aspiration_actions (aspiration_id, actor_id, action, note) VALUES
  ('00000000-0000-0000-0000-000000000040', '00000000-0000-0000-0000-000000000001', 'diproses', 'Sedang dalam proses perencanaan perbaikan.');

INSERT INTO aspiration_actions (aspiration_id, actor_id, action, note) VALUES
  ('00000000-0000-0000-0000-000000000042', '00000000-0000-0000-0000-000000000001', 'verifikasi', 'Aspirasi diverifikasi.');

INSERT INTO aspiration_actions (aspiration_id, actor_id, action, note) VALUES
  ('00000000-0000-0000-0000-000000000042', '00000000-0000-0000-0000-000000000001', 'selesai', 'Pelatihan sudah dilaksanakan pada 5 September 2026.');

-- ============================================================
-- PRODUCTS (Demo Data)
-- ============================================================

INSERT INTO products (id, seller_id, name, category, description, image_url, price, contact, status) VALUES
  ('00000000-0000-0000-0000-000000000050', '00000000-0000-0000-0000-000000000002', 'Ikan Tongkol Segar', 'perikanan', 'Ikan tongkol segar hasil tangkapan nelayan Bawean. Kualitas terbaik.', '/demo/ikan-tongkol.jpg', 45000, '0812-3456-7891', 'aktif');

INSERT INTO products (id, seller_id, name, category, description, image_url, price, contact, status) VALUES
  ('00000000-0000-0000-0000-000000000051', '00000000-0000-0000-0000-000000000002', 'Ikan Cakalang', 'perikanan', 'Ikan cakalang segar, cocok untuk berbagai masakan.', '/demo/ikan-cakalang.jpg', 35000, '0812-3456-7891', 'aktif');

INSERT INTO products (id, seller_id, name, category, description, image_url, price, contact, status) VALUES
  ('00000000-0000-0000-0000-000000000052', '00000000-0000-0000-0000-000000000003', 'Kerupuk Ikan', 'olahan_perikanan', 'Kerupuk ikan olahan dari pengrajin lokal Bawean. Renyah dan gurih.', '/demo/kerupuk-ikan.jpg', 25000, '0812-3456-7892', 'aktif');

INSERT INTO products (id, seller_id, name, category, description, image_url, price, contact, status) VALUES
  ('00000000-0000-0000-0000-000000000053', '00000000-0000-0000-0000-000000000003', 'Abon Ikan', 'olahan_perikanan', 'Abon ikan olahan dengan bumbu tradisional Bawean.', '/demo/abon-ikan.jpg', 30000, '0812-3456-7892', 'aktif');

INSERT INTO products (id, seller_id, name, category, description, image_url, price, contact, status) VALUES
  ('00000000-0000-0000-0000-000000000054', '00000000-0000-0000-0000-000000000004', 'Pupuk Organik dari Limbah Ikan', 'pemanfaatan_limbah', 'Pupuk organik hasil pengolahan limbah perikanan. Ramah lingkungan.', '/demo/pupuk-organik.jpg', 15000, '0812-3456-7893', 'aktif');

INSERT INTO products (id, seller_id, name, category, description, image_url, price, contact, status) VALUES
  ('00000000-0000-0000-0000-000000000055', '00000000-0000-0000-0000-000000000004', 'Kerajinan dari Limbah Jaring', 'pemanfaatan_limbah', 'Kerajinan tangan dari limbah jaring ikan yang didaur ulang.', '/demo/kerajinan-jaring.jpg', 50000, '0812-3456-7893', 'aktif');

-- ============================================================
-- NOTIFICATIONS (Demo Data)
-- ============================================================

INSERT INTO notifications (user_id, title, message) VALUES
  ('00000000-0000-0000-0000-000000000003', 'Laporan Diverifikasi', 'Laporan limbah plastik Anda telah diverifikasi oleh admin.');

INSERT INTO notifications (user_id, title, message) VALUES
  ('00000000-0000-0000-0000-000000000004', 'Aspirasi Diterima', 'Aspirasi tentang tempat sampah telah diterima dan akan ditindaklanjuti.');

-- ============================================================
-- AUDIT LOGS (Demo Data)
-- ============================================================

INSERT INTO audit_logs (actor_id, action, entity, entity_id, details) VALUES
  ('00000000-0000-0000-0000-000000000001', 'create', 'sea_conditions', '00000000-0000-0000-0000-000000000010', '{"status": "aman", "source": "BMKG (DATA DEMO)"}');

INSERT INTO audit_logs (actor_id, action, entity, entity_id, details) VALUES
  ('00000000-0000-0000-0000-000000000001', 'verify', 'waste_reports', '00000000-0000-0000-0000-000000000030', '{"previous_status": "menunggu_verifikasi", "new_status": "diverifikasi"}');

INSERT INTO audit_logs (actor_id, action, entity, entity_id, details) VALUES
  ('00000000-0000-0000-0000-000000000001', 'update_status', 'aspirations', '00000000-0000-0000-0000-000000000040', '{"previous_status": "menunggu_verifikasi", "new_status": "diproses"}');
