import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Landing Header */}
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
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bawean Action
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Navigasi Cermat, Nelayan Selamat, Bebas Limbah
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Perikanan untuk Meningkatkan Perekonomian
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/keselamatan"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Cek Kondisi Laut
              </Link>
              <Link
                href="/lapor-limbah"
                className="bg-blue-500 hover:bg-blue-400 border border-blue-400 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Lapor Limbah
              </Link>
              <Link
                href="/aspirasi"
                className="bg-blue-500 hover:bg-blue-400 border border-blue-400 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Sampaikan Aspirasi
              </Link>
              <Link
                href="/produk"
                className="bg-blue-500 hover:bg-blue-400 border border-blue-400 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Jelajahi Produk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Dampak Bawean Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Nelayan Terdaftar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Laporan Limbah</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">30+</div>
              <div className="text-gray-600">Aspirasi Disampaikan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Produk Lokal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fitur Utama
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">SAFE</h3>
              <p className="text-gray-600">
                Informasi keselamatan laut dan checklist sebelum melaut untuk
                nelayan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold mb-2">CLEAN</h3>
              <p className="text-gray-600">
                Pelaporan dan pengelolaan limbah pesisir oleh masyarakat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-xl font-semibold mb-2">VOICE</h3>
              <p className="text-gray-600">
                Kanal aspirasi untuk menyampaikan permasalahan Bawean.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">PROMOTE</h3>
              <p className="text-gray-600">
                Katalog produk perikanan dan pemanfaatan limbah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bergabung dengan Bawean Action
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari bersama-sama membangun Bawean yang lebih aman, bersih, dan
            sejahtera.
          </p>
          <Link
            href="/auth/register"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
