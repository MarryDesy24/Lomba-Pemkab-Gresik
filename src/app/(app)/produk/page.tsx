"use client";

import { useState, useEffect } from "react";
import { useSupabaseBrowser } from "@/lib/supabase-browser";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number | null;
  image_url: string | null;
  contact: string | null;
  seller_id: string;
  status: string;
}

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Ikan Tongkol Segar",
    category: "perikanan",
    description: "Ikan tongkol segar hasil tangkapan nelayan Bawean",
    price: 45000,
    image_url: null,
    contact: "0812-3456-7890",
    seller_id: "demo",
    status: "aktif",
  },
  {
    id: "2",
    name: "Kerupuk Ikan",
    category: "olahan_perikanan",
    description: "Kerupuk ikan olahan dari pengrajin lokal Bawean",
    price: 25000,
    image_url: null,
    contact: "0812-3456-7891",
    seller_id: "demo",
    status: "aktif",
  },
  {
    id: "3",
    name: "Pupuk Organik dari Limbah Ikan",
    category: "pemanfaatan_limbah",
    description: "Pupuk organik hasil pengolahan limbah perikanan",
    price: 15000,
    image_url: null,
    contact: "0812-3456-7892",
    seller_id: "demo",
    status: "aktif",
  },
];

export default function ProdukPage() {
  const supabase = useSupabaseBrowser();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [supabase]);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("status", "aktif")
      .order("created_at", { ascending: false });

    if (data && data.length > 0) {
      setProducts(data);
    } else {
      setProducts(sampleProducts);
    }
    setLoading(false);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price: number | null) => {
    if (!price) return "Hubungi penjual";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "perikanan":
        return "Produk Perikanan";
      case "olahan_perikanan":
        return "Olahan Perikanan";
      case "pemanfaatan_limbah":
        return "Pemanfaatan Limbah";
      default:
        return category;
    }
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case "perikanan":
        return "🐟";
      case "olahan_perikanan":
        return "🍘";
      case "pemanfaatan_limbah":
        return "♻️";
      default:
        return "📦";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Katalog Produk Perikanan & Limbah
      </h1>
      <p className="text-gray-600 mb-8">
        Jelajahi produk perikanan dan produk olahan/pemanfaatan limbah dari
        Bawean.
      </p>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari produk..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Semua Kategori</option>
              <option value="perikanan">Produk Perikanan</option>
              <option value="olahan_perikanan">Olahan Perikanan</option>
              <option value="pemanfaatan_limbah">Pemanfaatan Limbah</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Memuat produk...</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl">
                    {getCategoryEmoji(product.category)}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {getCategoryLabel(product.category)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-blue-600 font-semibold mb-2">
                  {formatPrice(product.price)}
                </p>
                {product.contact && (
                  <div className="text-sm text-gray-500">
                    <p>
                      <strong>Kontak:</strong> {product.contact}
                    </p>
                  </div>
                )}
                <button className="mt-4 w-full bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors">
                  Hubungi Penjual
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredProducts.length === 0 && !loading && (
        <div className="text-center py-12 text-gray-500">
          <p>Tidak ada produk yang ditemukan.</p>
        </div>
      )}
    </div>
  );
}
