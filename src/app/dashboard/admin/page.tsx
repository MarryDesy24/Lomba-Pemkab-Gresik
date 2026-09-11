export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Dashboard Admin
      </h1>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Laporan Limbah
              </p>
              <p className="text-2xl font-bold text-gray-900">50</p>
            </div>
            <div className="text-3xl">🗑️</div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            +12 bulan ini
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Aspirasi</p>
              <p className="text-2xl font-bold text-gray-900">30</p>
            </div>
            <div className="text-3xl">📢</div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            +8 bulan ini
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Produk</p>
              <p className="text-2xl font-bold text-gray-900">25</p>
            </div>
            <div className="text-3xl">🛒</div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            +5 bulan ini
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pengguna</p>
              <p className="text-2xl font-bold text-gray-900">150</p>
            </div>
            <div className="text-3xl">👥</div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            +25 bulan ini
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Laporan Limbah Terbaru */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Laporan Limbah Terbaru
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Plastik di Pantai</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Menunggu Verifikasi
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Ditemukan tumpukan plastik di area pantai utara
              </p>
              <p className="text-xs text-gray-400 mt-1">
                11 September 2026
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Limbah Logam</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Diverifikasi
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Limbah logam bekas di area pelabuhan
              </p>
              <p className="text-xs text-gray-400 mt-1">
                10 September 2026
              </p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="/dashboard/admin/laporan"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Lihat Semua Laporan →
            </a>
          </div>
        </div>

        {/* Aspirasi Terbaru */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Aspirasi Terbaru</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Perbaikan Jalan</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Diproses
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Permintaan perbaikan jalan menuju pelabuhan
              </p>
              <p className="text-xs text-gray-400 mt-1">
                9 September 2026
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Tempat Sampah</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Menunggu Verifikasi
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Penyediaan tempat sampah di area pantai
              </p>
              <p className="text-xs text-gray-400 mt-1">
                8 September 2026
              </p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="/dashboard/admin/aspirasi"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Lihat Semua Aspirasi →
            </a>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Aksi Cepat</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <a
            href="/dashboard/admin/laporan"
            className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors"
          >
            <div className="text-2xl mb-2">📝</div>
            <div className="font-medium text-blue-800">
              Moderasi Laporan
            </div>
          </a>
          <a
            href="/dashboard/admin/aspirasi"
            className="bg-green-50 hover:bg-green-100 p-4 rounded-lg text-center transition-colors"
          >
            <div className="text-2xl mb-2">💬</div>
            <div className="font-medium text-green-800">
              Moderasi Aspirasi
            </div>
          </a>
          <a
            href="/dashboard/admin/produk"
            className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg text-center transition-colors"
          >
            <div className="text-2xl mb-2">📦</div>
            <div className="font-medium text-purple-800">
              Kelola Produk
            </div>
          </a>
          <a
            href="/dashboard/admin/statistik"
            className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors"
          >
            <div className="text-2xl mb-2">📊</div>
            <div className="font-medium text-orange-800">Statistik</div>
          </a>
        </div>
      </div>

      <div className="mt-8 text-xs text-orange-600 text-center">
        ⚠️ Dashboard ini menampilkan data demo. Fitur admin lengkap akan
        diintegrasikan dengan Supabase Auth dan database.
      </div>
    </div>
  );
}
