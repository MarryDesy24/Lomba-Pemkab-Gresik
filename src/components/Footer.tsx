import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#12304A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#20C7D9] to-[#087FC1] rounded-lg flex items-center justify-center">
                <span className="text-sm">🌊</span>
              </div>
              <span className="font-bold text-xl">Bawean Action</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Platform digital untuk keselamatan nelayan, pengelolaan limbah,
              aspirasi masyarakat, dan promosi produk perikanan di Bawean.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#20C7D9]">Fitur</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/keselamatan" className="hover:text-white transition-colors">
                  Keselamatan
                </Link>
              </li>
              <li>
                <Link href="/lapor-limbah" className="hover:text-white transition-colors">
                  Lapor Limbah
                </Link>
              </li>
              <li>
                <Link href="/aspirasi" className="hover:text-white transition-colors">
                  Aspirasi
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-white transition-colors">
                  Produk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#20C7D9]">Kontak</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@baweanaction.id</li>
              <li>Telepon: +62 812 3456 7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Bawean Action. GIK 2026.</p>
        </div>
      </div>
    </footer>
  );
}
