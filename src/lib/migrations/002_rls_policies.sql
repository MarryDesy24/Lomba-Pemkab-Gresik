-- Bawean Action Row Level Security (RLS) Policies
-- Based on PRD.md Section 11: Role & Access Control

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sea_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE pre_sail_checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE checklist_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE waste_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE waste_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE aspirations ENABLE ROW LEVEL SECURITY;
ALTER TABLE aspiration_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- PROFILES POLICIES
-- ============================================================

-- Public can view basic profile info (name, role, village)
CREATE POLICY "Public can view basic profile info"
  ON profiles FOR SELECT
  TO public
  USING (true);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid());

-- Admin can view all profiles
CREATE POLICY "Admin can view all profiles"
  ON profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admin can update any profile (role changes)
CREATE POLICY "Admin can update any profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- SEA CONDITIONS POLICIES
-- ============================================================

-- Everyone can view sea conditions (public info)
CREATE POLICY "Everyone can view sea conditions"
  ON sea_conditions FOR SELECT
  TO public
  USING (true);

-- Admin can manage sea conditions
CREATE POLICY "Admin can manage sea conditions"
  ON sea_conditions FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- PRE-SAIL CHECKLISTS POLICIES
-- ============================================================

-- Users can view their own checklists
CREATE POLICY "Users can view own checklists"
  ON pre_sail_checklists FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Users can create their own checklists
CREATE POLICY "Users can create own checklists"
  ON pre_sail_checklists FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Admin can view all checklists
CREATE POLICY "Admin can view all checklists"
  ON pre_sail_checklists FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- CHECKLIST ITEMS POLICIES
-- ============================================================

-- Users can view items for their own checklists
CREATE POLICY "Users can view own checklist items"
  ON checklist_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM pre_sail_checklists
      WHERE id = checklist_id AND user_id = auth.uid()
    )
  );

-- Users can manage items for their own checklists
CREATE POLICY "Users can manage own checklist items"
  ON checklist_items FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM pre_sail_checklists
      WHERE id = checklist_id AND user_id = auth.uid()
    )
  );

-- ============================================================
-- WASTE REPORTS POLICIES
-- ============================================================

-- Everyone can view verified waste reports (for map)
CREATE POLICY "Everyone can view verified waste reports"
  ON waste_reports FOR SELECT
  TO public
  USING (status = 'diverifikasi' OR status = 'diproses' OR status = 'selesai');

-- Authenticated users can view their own waste reports
CREATE POLICY "Users can view own waste reports"
  ON waste_reports FOR SELECT
  TO authenticated
  USING (reporter_id = auth.uid());

-- All authenticated users can create waste reports
CREATE POLICY "Authenticated users can create waste reports"
  ON waste_reports FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Users can update their own pending waste reports
CREATE POLICY "Users can update own pending waste reports"
  ON waste_reports FOR UPDATE
  TO authenticated
  USING (
    reporter_id = auth.uid() AND status = 'menunggu_verifikasi'
  );

-- Admin can manage all waste reports
CREATE POLICY "Admin can manage all waste reports"
  ON waste_reports FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- WASTE ACTIONS POLICIES
-- ============================================================

-- Admin can view all waste actions
CREATE POLICY "Admin can view all waste actions"
  ON waste_actions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admin can create waste actions
CREATE POLICY "Admin can create waste actions"
  ON waste_actions FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- ASPIRATIONS POLICIES
-- ============================================================

-- Everyone can view verified aspirations
CREATE POLICY "Everyone can view verified aspirations"
  ON aspirations FOR SELECT
  TO public
  USING (status = 'diverifikasi' OR status = 'diproses' OR status = 'selesai');

-- Authenticated users can view their own aspirations
CREATE POLICY "Users can view own aspirations"
  ON aspirations FOR SELECT
  TO authenticated
  USING (reporter_id = auth.uid());

-- All authenticated users can create aspirations
CREATE POLICY "Authenticated users can create aspirations"
  ON aspirations FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Users can update their own pending aspirations
CREATE POLICY "Users can update own pending aspirations"
  ON aspirations FOR UPDATE
  TO authenticated
  USING (
    reporter_id = auth.uid() AND status = 'menunggu_verifikasi'
  );

-- Admin can manage all aspirations
CREATE POLICY "Admin can manage all aspirations"
  ON aspirations FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- ASPIRATION ACTIONS POLICIES
-- ============================================================

-- Admin can view all aspiration actions
CREATE POLICY "Admin can view all aspiration actions"
  ON aspiration_actions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admin can create aspiration actions
CREATE POLICY "Admin can create aspiration actions"
  ON aspiration_actions FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- PRODUCTS POLICIES
-- ============================================================

-- Everyone can view active products
CREATE POLICY "Everyone can view active products"
  ON products FOR SELECT
  TO public
  USING (status = 'aktif');

-- Admin can view all products
CREATE POLICY "Admin can view all products"
  ON products FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admin and sellers can create products
CREATE POLICY "Admin can create products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admin can manage all products
CREATE POLICY "Admin can manage all products"
  ON products FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- ARTICLES POLICIES
-- ============================================================

-- Everyone can view published articles
CREATE POLICY "Everyone can view published articles"
  ON articles FOR SELECT
  TO public
  USING (status = 'published');

-- Admin can manage all articles
CREATE POLICY "Admin can manage all articles"
  ON articles FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- NOTIFICATIONS POLICIES
-- ============================================================

-- Users can view their own notifications
CREATE POLICY "Users can view own notifications"
  ON notifications FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Users can update their own notifications (mark as read)
CREATE POLICY "Users can update own notifications"
  ON notifications FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- System can create notifications (via service role)
CREATE POLICY "System can create notifications"
  ON notifications FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- ============================================================
-- AUDIT LOGS POLICIES
-- ============================================================

-- Admin can view all audit logs
CREATE POLICY "Admin can view all audit logs"
  ON audit_logs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- System can create audit logs (via service role)
CREATE POLICY "System can create audit logs"
  ON audit_logs FOR INSERT
  TO authenticated
  WITH CHECK (true);
