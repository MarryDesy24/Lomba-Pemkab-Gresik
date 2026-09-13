"use client";

import { useEffect, useState, useCallback } from "react";
import { useSupabaseBrowser } from "@/lib/supabase-browser";
import type { User, Session } from "@supabase/supabase-js";

export type UserRole = "public" | "nelayan" | "masyarakat" | "admin" | "stakeholder";

export interface UserProfile {
  id: string;
  name: string;
  phone: string | null;
  role: UserRole;
  village: string | null;
  created_at: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = useSupabaseBrowser();

  const fetchProfile = useCallback(
    async (userId: string) => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return null;
      }

      return data as UserProfile;
    },
    [supabase]
  );

  useEffect(() => {
    const getInitialSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          const userProfile = await fetchProfile(session.user.id);
          setProfile(userProfile);
        }
      } catch (error) {
        console.error("Error getting session:", error);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        const userProfile = await fetchProfile(session.user.id);
        setProfile(userProfile);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase, fetchProfile]);

  const signUp = async (
    email: string,
    password: string,
    name: string,
    role: UserRole = "masyarakat",
    phone?: string,
    village?: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      throw error;
    }

    if (data.user) {
      const profileData: {
        id: string;
        name: string;
        role: UserRole;
        phone?: string;
        village?: string;
      } = {
        id: data.user.id,
        name,
        role,
      };

      if (phone) profileData.phone = phone;
      if (village) profileData.village = village;

      const { error: profileError } = await supabase
        .from("profiles")
        .insert(profileData);

      if (profileError) {
        console.error("Error creating profile:", profileError);
        throw new Error(
          "Akun berhasil dibuat namun gagal membuat profil. Silakan hubungi admin."
        );
      }

      // Auto sign-in after successful registration
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        // If auto sign-in fails (e.g. email confirmation required),
        // the user can still sign in manually
        console.error("Auto sign-in failed:", signInError);
      }
    }

    return data;
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return data;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  };

  return {
    user,
    profile,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    isAdmin: profile?.role === "admin",
    isNelayan: profile?.role === "nelayan",
    isMasyarakat: profile?.role === "masyarakat",
    isStakeholder: profile?.role === "stakeholder",
    isPublic: !user || profile?.role === "public",
  };
}
