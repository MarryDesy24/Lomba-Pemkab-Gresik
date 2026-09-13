"use client";

import { createClient } from "@supabase/supabase-js";
import { useMemo } from "react";

export function useSupabaseBrowser() {
  return useMemo(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

    return createClient(supabaseUrl, supabaseAnonKey);
  }, []);
}
