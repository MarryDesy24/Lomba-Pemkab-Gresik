import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white overflow-hidden relative">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-25 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-20 animate-pulse" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />

      {/* Header */}
      <header className="relative z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-xl">🌊</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Bawean Action
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
              >
                Masuk
              </Link>
              <Link
                href="/auth/register"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                Daftar
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl mb-8 shadow-2xl shadow-blue-500/30 relative">
              <span className="text-5xl">🌊</span>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 opacity-50 blur-xl" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
              Bawean Action
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/80 mb-4 font-medium">
              Navigasi Cermat, Nelayan Selamat, Bebas Limbah
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Perikanan untuk Meningkatkan Perekonomian
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Mulai Sekarang
              </Link>
              <Link
                href="/auth/login"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all backdrop-blur-sm"
              >
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Dampak Bawean Action
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-gray-400 text-sm">Nelayan Terdaftar</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-400 text-sm">Laporan Limbah</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  30+
                </div>
                <div className="text-gray-400 text-sm">Aspirasi Disampaikan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="text-gray-400 text-sm">Produk Lokal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Fitur Utama
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Solusi digital untuk keselamatan nelayan, pengelolaan lingkungan, dan kesejahteraan masyarakat Bawean
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SAFE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Informasi keselamatan laut dan checklist sebelum melaut untuk nelayan.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CLEAN</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pelaporan dan pengelolaan limbah pesisir oleh masyarakat.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
                <span className="text-2xl">📢</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">VOICE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kanal aspirasi untuk menyampaikan permasalahan Bawean.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">PROMOTE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Katalog produk perikanan dan pemanfaatan limbah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bergabung dengan Bawean Action
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Mari bersama-sama membangun Bawean yang lebih aman, bersih, dan sejahtera.
              </p>
              <Link
                href="/auth/register"
                className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-2xl font-bold text-lg transition-all inline-block shadow-xl hover:-translate-y-0.5"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-sm">🌊</span>
            </div>
            <span className="font-bold text-white">Bawean Action</span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2026 Bawean Action. GIK 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}
