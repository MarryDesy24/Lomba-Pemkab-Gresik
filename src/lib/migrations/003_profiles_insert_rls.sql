-- Migration 003: Add INSERT policy for profiles table
-- Problem: RLS blocks authenticated users from creating their own profile after signUp
-- This migration adds a safe INSERT policy

-- Allow authenticated users to insert their own profile (id must match auth.uid())
CREATE POLICY "Authenticated users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (id = auth.uid());

-- Security: prevent users from setting dangerous roles via INSERT
-- This trigger ensures only safe roles can be set by self-registration
CREATE OR REPLACE FUNCTION validate_profile_insert_role()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.role IN ('admin', 'stakeholder') THEN
    RAISE EXCEPTION 'Role admin dan stakeholder tidak dapat dipilih saat registrasi';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_profile_insert_role
  BEFORE INSERT ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION validate_profile_insert_role();
