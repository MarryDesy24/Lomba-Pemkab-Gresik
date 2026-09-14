"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { user, profile, signOut, loading } = useAuth();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth/login");
  };

  return (
    <header className="bg-[#12304A] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/Logo%20Bawean%20Action.svg"
              alt="Logo Bawean Action"
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
            />
            <span className="font-bold text-lg text-white">
              Bawean Action
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/keselamatan"
              className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Keselamatan
            </Link>
            <Link
              href="/lapor-limbah"
              className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Lapor Limbah
            </Link>
            <Link
              href="/aspirasi"
              className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Aspirasi
            </Link>
            <Link
              href="/produk"
              className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Produk
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {loading ? (
              <div className="h-7 w-7 sm:h-8 sm:w-8 animate-spin rounded-full border-2 border-white/30 border-t-[#20C7D9]" />
            ) : user ? (
              <>
                {/* Desktop user info */}
                <div className="hidden md:flex items-center space-x-3">
                  {profile?.role === "admin" && (
                    <Link
                      href="/dashboard/admin"
                      className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Dashboard
                    </Link>
                  )}
                  <span className="text-sm text-gray-300">
                    {profile?.name}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-300 hover:text-[#F4B942] hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Keluar
                  </button>
                </div>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Toggle menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Link
                  href="/auth/login"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-[#087FC1] text-white hover:bg-[#075985] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && user && (
          <div className="md:hidden border-t border-white/10 py-3 space-y-1">
            <Link
              href="/keselamatan"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Keselamatan
            </Link>
            <Link
              href="/lapor-limbah"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Lapor Limbah
            </Link>
            <Link
              href="/aspirasi"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Aspirasi
            </Link>
            <Link
              href="/produk"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Produk
            </Link>
            {profile?.role === "admin" && (
              <Link
                href="/dashboard/admin"
                onClick={() => setMobileOpen(false)}
                className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
            )}
            <div className="border-t border-white/10 pt-2 mt-2">
              <span className="block text-gray-400 text-xs px-3 mb-1">
                {profile?.name}
              </span>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleSignOut();
                }}
                className="w-full text-left text-gray-300 hover:text-[#F4B942] hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Keluar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
