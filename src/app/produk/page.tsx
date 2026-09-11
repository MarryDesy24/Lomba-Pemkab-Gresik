"use client";

import { useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  seller: string;
  contact: string;
}

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Ikan Tongkol Segar",
    category: "perikanan",
    description: "Ikan tongkol segar hasil tangkapan nelayan Bawean",
    price: "Rp 45.000/kg",
    seller: "Kelompok Nelayan Bawean",
    contact: "0812-3456-7890",
  },
  {
    id: "2",
    name: "Kerupuk Ikan",
    category: "olahan_perikanan",
    description: "Kerupuk ikan olahan dari pengrajin lokal Bawean",
    price: "Rp 25.000/bungkus",
    seller: "UKM Bawean",
    contact: "0812-3456-7891",
  },
  {
    id: "3",
    name: "Pupuk Organik dari Limbah Ikan",
    category: "pemanfaatan_limbah",
    description: "Pupuk organik hasil pengolahan limbah perikanan",
    price: "Rp 15.000/kg",
    seller: "Bawean Eco",
    contact: "0812-3456-7892",
  },
];

export default function ProdukPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Katalog Produk Perikanan & Limbah
      </h1>

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
              <option value="pemanfaatan_limbah">
                Pemanfaatan Limbah
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <span className="text-4xl">🐟</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {product.category.replace("_", " ")}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                {product.description}
              </p>
              <p className="text-blue-600 font-semibold mb-2">
                {product.price}
              </p>
              <div className="text-sm text-gray-500">
                <p>
                  <strong>Penjual:</strong> {product.seller}
                </p>
                <p>
                  <strong>Kontak:</strong> {product.contact}
                </p>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors">
                Hubungi Penjual
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>Tidak ada produk yang ditemukan.</p>
        </div>
      )}

      <div className="mt-8 text-xs text-orange-600 text-center">
        ⚠️ Data produk di atas adalah contoh (Demo)
      </div>
    </div>
  );
}
