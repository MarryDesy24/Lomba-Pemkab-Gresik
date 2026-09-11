"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { user, profile, signOut, loading } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🌊</span>
              <span className="font-bold text-xl text-blue-600">
                Bawean Action
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/keselamatan"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Keselamatan
            </Link>
            <Link
              href="/lapor-limbah"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Lapor Limbah
            </Link>
            <Link
              href="/aspirasi"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Aspirasi
            </Link>
            <Link
              href="/produk"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Produk
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
            ) : user ? (
              <div className="flex items-center space-x-4">
                {profile?.role === "admin" && (
                  <Link
                    href="/dashboard/admin"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                )}
                <span className="text-sm text-gray-600">
                  {profile?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium"
                >
                  Keluar
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/login"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Masuk
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
