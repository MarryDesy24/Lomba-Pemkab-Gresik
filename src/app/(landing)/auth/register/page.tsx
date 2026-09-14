"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

type RoleOption = "nelayan" | "masyarakat";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    village: "",
    role: "" as RoleOption | "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.role) {
      setError("Silakan pilih role pengguna!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password tidak cocok!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter!");
      return;
    }

    setLoading(true);

    try {
      await signUp(
        formData.email,
        formData.password,
        formData.name,
        formData.role,
        formData.phone || undefined,
        formData.village || undefined
      );
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal mendaftar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#12304A] relative">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#20C7D9] rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-[#F4B942] rounded-full opacity-30 animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#20C7D9] rounded-full opacity-20 animate-pulse" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#087FC1]/10 via-transparent to-[#20C7D9]/10" />

      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#087FC1]/20 to-[#12304A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#087FC1]/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-12">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-[#20C7D9] to-[#087FC1] rounded-3xl mb-8 shadow-2xl shadow-[#087FC1]/30 relative">
            <span className="text-6xl">🌊</span>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#20C7D9] to-[#087FC1] opacity-50 blur-xl" />
          </div>

          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            BAWEAN
          </h1>
          <p className="text-xl text-[#20C7D9]/70 font-medium mb-6">
            ACTION
          </p>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Satu Aksi untuk Bawean, Mendorong Perekonomian.
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 bg-[#087FC1] rounded-full" />
            <div className="w-2 h-2 bg-[#20C7D9] rounded-full" />
            <div className="w-2 h-2 bg-[#F4B942] rounded-full" />
          </div>
        </div>
      </div>

      {/* Right side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative z-10">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#20C7D9] to-[#087FC1] rounded-2xl mb-3 sm:mb-4 shadow-lg shadow-[#087FC1]/25">
              <span className="text-2xl sm:text-3xl">🌊</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Bawean Action</h2>
          </div>

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Daftar Akun</h2>
            <p className="text-gray-400 text-sm mb-5 sm:mb-6">
              Buat akun Bawean Action baru
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Nama Lengkap <span className="text-[#F4B942]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#087FC1] focus:border-transparent transition-all"
                  placeholder="Nama lengkap Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Daftar sebagai <span className="text-[#F4B942]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <label
                    className={`flex items-center justify-center p-2.5 sm:p-3 border rounded-xl cursor-pointer transition-all text-sm ${
                      formData.role === "nelayan"
                        ? "border-[#087FC1] bg-[#087FC1]/10 text-[#20C7D9]"
                        : "border-white/10 hover:border-white/20 text-gray-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="nelayan"
                      checked={formData.role === "nelayan"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          role: e.target.value as RoleOption,
                        })
                      }
                      className="sr-only"
                    />
                    <span className="font-medium">Nelayan</span>
                  </label>
                  <label
                    className={`flex items-center justify-center p-2.5 sm:p-3 border rounded-xl cursor-pointer transition-all text-sm ${
                      formData.role === "masyarakat"
                        ? "border-[#087FC1] bg-[#087FC1]/10 text-[#20C7D9]"
                        : "border-white/10 hover:border-white/20 text-gray-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="masyarakat"
                      checked={formData.role === "masyarakat"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          role: e.target.value as RoleOption,
                        })
                      }
                      className="sr-only"
                    />
                    <span className="font-medium">Masyarakat</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email <span className="text-[#F4B942]">*</span>
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#087FC1] focus:border-transparent transition-all"
                  placeholder="email@domain.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Telepon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#087FC1] focus:border-transparent transition-all"
                    placeholder="0812-3456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Desa
                  </label>
                  <input
                    type="text"
                    value={formData.village}
                    onChange={(e) =>
                      setFormData({ ...formData, village: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#087FC1] focus:border-transparent transition-all"
                    placeholder="Desa Anda"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Password <span className="text-[#F4B942]">*</span>
                  </label>
                  <input
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#087FC1] focus:border-transparent transition-all"
                    placeholder="Minimal 6 karakter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Konfirmasi <span className="text-[#F4B942]">*</span>
                  </label>
                  <input
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#087FC1] focus:border-transparent transition-all"
                    placeholder="Ulangi password"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#087FC1] hover:bg-[#075985] text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#087FC1]/25 hover:shadow-[#087FC1]/40 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Memproses...
                  </div>
                ) : (
                  "Daftar"
                )}
              </button>
            </form>
          </div>

          {/* Login link */}
          <p className="text-center text-gray-400 text-sm mt-5 sm:mt-6">
            Sudah punya akun?{" "}
            <Link
              href="/auth/login"
              className="text-[#20C7D9] hover:text-[#20C7D9]/80 font-medium transition-colors"
            >
              Masuk di sini
            </Link>
          </p>

          {/* Footer */}
          <p className="text-center text-gray-600 text-xs mt-6 sm:mt-8">
            &copy; 2026 Bawean Action. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
