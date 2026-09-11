export default function KeselamatanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Dashboard Keselamatan
      </h1>

      {/* Status Kondisi Laut */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Status Kondisi Laut</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="font-semibold text-green-800">AMAN</span>
            </div>
            <p className="text-green-700 mt-2 text-sm">
              Kondisi laut saat ini aman untuk beraktivitas.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p>
              <strong>Terakhir diperbarui:</strong> 11 September 2026, 08:00 WIB
            </p>
            <p>
              <strong>Sumber:</strong> BMKG (Data Simulasi)
            </p>
            <p className="mt-2 text-xs text-orange-600 font-medium">
              ⚠️ DATA DEMO - Belum terhubung dengan sumber data nyata
            </p>
          </div>
        </div>
      </div>

      {/* Informasi Sebelum Melaut */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Informasi Sebelum Melaut</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-blue-800">Cuaca</h3>
            <p className="text-blue-700 text-sm mt-1">
              Cerah berawan, angin 10-15 km/jam
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-blue-800">Gelombang</h3>
            <p className="text-blue-700 text-sm mt-1">
              Tinggi 0.5-1.0 meter
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-blue-800">Pasang Surut</h3>
            <p className="text-blue-700 text-sm mt-1">
              Pasang: 14:00, Surut: 20:30
            </p>
          </div>
        </div>
      </div>

      {/* Checklist CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
        <h2 className="text-xl font-semibold mb-2">Checklist Sebelum Melaut</h2>
        <p className="mb-4">
          Pastikan kesiapan Anda sebelum melaut dengan melakukan pemeriksaan
          mandiri.
        </p>
        <a
          href="/keselamatan/checklist"
          className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold inline-block transition-colors"
        >
          Mulai Checklist
        </a>
      </div>
    </div>
  );
}
