import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#12304A] text-white relative">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#20C7D9] rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-[#F4B942] rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#20C7D9] rounded-full opacity-25 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#087FC1] rounded-full opacity-20 animate-pulse" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#087FC1]/10 via-transparent to-[#20C7D9]/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[800px] bg-[#087FC1]/5 rounded-full blur-3xl" />

      {/* Header */}
      <header className="relative z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20 items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/Logo%20Bawean%20Action.svg"
                alt="Logo Bawean Action"
                className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
              />
              <span className="font-bold text-lg sm:text-xl text-white tracking-tight">
                Bawean Action
              </span>
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-300 hover:text-white px-3 sm:px-4 py-2 text-sm font-medium transition-colors"
              >
                Masuk
              </Link>
              <Link
                href="/auth/register"
                className="bg-[#087FC1] hover:bg-[#075985] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-[#087FC1]/25 hover:shadow-[#087FC1]/40"
              >
                Daftar
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <img
                src="/Logo%20Bawean%20Action.svg"
                alt="Logo Bawean Action"
                className="h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 mx-auto object-contain"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-[#E0F7FA] to-[#20C7D9] bg-clip-text text-transparent leading-tight">
              Bawean Action
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#20C7D9]/80 mb-3 sm:mb-4 font-medium px-4">
              Satu Aksi untuk Bawean, Mendorong Perekonomian.
            </p>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Platform digital untuk keselamatan nelayan, pengelolaan limbah, aspirasi masyarakat, dan promosi produk perikanan di Bawean.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/auth/register"
                className="bg-[#087FC1] hover:bg-[#075985] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all shadow-xl shadow-[#087FC1]/25 hover:shadow-[#087FC1]/40 hover:-translate-y-0.5"
              >
                Mulai Sekarang
              </Link>
              <Link
                href="/auth/login"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all backdrop-blur-sm"
              >
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
              Dampak Bawean Action
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#087FC1] mb-1 sm:mb-2">
                  150+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">Nelayan Terdaftar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#20C7D9] mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">Laporan Limbah</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4B942] mb-1 sm:mb-2">
                  30+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">Aspirasi Disampaikan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3E3C3] mb-1 sm:mb-2">
                  25+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">Produk Lokal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-3 sm:mb-4">
            Fitur Utama
          </h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Solusi digital untuk keselamatan nelayan, pengelolaan lingkungan, dan kesejahteraan masyarakat Bawean
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#087FC1] to-[#20C7D9] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg shadow-[#087FC1]/20 group-hover:shadow-[#087FC1]/40 transition-shadow">
                <span className="text-xl sm:text-2xl">🛡️</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">SAFE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Informasi keselamatan laut dan checklist sebelum melaut untuk nelayan.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#20C7D9] to-[#087FC1] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg shadow-[#20C7D9]/20 group-hover:shadow-[#20C7D9]/40 transition-shadow">
                <span className="text-xl sm:text-2xl">♻️</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">CLEAN</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Pelaporan dan pengelolaan limbah pesisir oleh masyarakat.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#F4B942] to-[#F3E3C3] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg shadow-[#F4B942]/20 group-hover:shadow-[#F4B942]/40 transition-shadow">
                <span className="text-xl sm:text-2xl">📢</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">VOICE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Kanal aspirasi untuk menyampaikan permasalahan Bawean.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#087FC1] to-[#075985] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg shadow-[#075985]/20 group-hover:shadow-[#075985]/40 transition-shadow">
                <span className="text-xl sm:text-2xl">🛒</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">PROMOTE</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Katalog produk perikanan dan pemanfaatan limbah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#087FC1] to-[#075985] rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#087FC1]/50 to-[#075985]/50 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Bergabung dengan Bawean Action
              </h2>
              <p className="text-base sm:text-xl text-[#E0F7FA] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Mari bersama-sama membangun Bawean yang lebih aman, bersih, dan sejahtera.
              </p>
              <Link
                href="/auth/register"
                className="bg-white text-[#087FC1] hover:bg-[#E0F7FA] px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all inline-block shadow-xl hover:-translate-y-0.5"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <img
              src="/Logo%20Bawean%20Action.svg"
              alt="Logo Bawean Action"
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
            />
            <span className="font-bold text-sm sm:text-white">Bawean Action</span>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">
            Satu Aksi untuk Bawean, Mendorong Perekonomian.
          </p>
        </div>
      </footer>
    </div>
  );
}
