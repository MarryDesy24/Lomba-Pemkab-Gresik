"use client";

import { useState, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseBrowser } from "@/lib/supabase-browser";

export default function LaporLimbahPage() {
  const { user } = useAuth();
  const supabase = useSupabaseBrowser();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    latitude: "",
    longitude: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("Ukuran file maksimal 5MB");
        return;
      }
      if (!selectedFile.type.startsWith("image/")) {
        setError("File harus berupa gambar");
        return;
      }
      setFile(selectedFile);
      setError(null);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError("Anda harus masuk untuk mengirim laporan");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      let photoUrl = null;

      if (file) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${user.id}/${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("waste-reports")
          .upload(fileName, file);

        if (uploadError) {
          throw new Error("Gagal upload foto: " + (uploadError.message || uploadError));
        }

        const {
          data: { publicUrl },
        } = supabase.storage.from("waste-reports").getPublicUrl(fileName);
        photoUrl = publicUrl;
      }

      const { error: insertError } = await supabase.from("waste_reports").insert({
        reporter_id: user.id,
        category: formData.category,
        description: formData.description,
        latitude: formData.latitude ? parseFloat(formData.latitude) : null,
        longitude: formData.longitude ? parseFloat(formData.longitude) : null,
        photo_url: photoUrl,
        status: "menunggu_verifikasi",
      });

      if (insertError) {
        throw new Error("Gagal simpan laporan: " + (insertError.message || insertError));
      }

      setSubmitted(true);
      setFormData({ category: "", description: "", latitude: "", longitude: "" });
      setFile(null);
      setPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setSubmitting(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
          });
        },
        () => {
          setError("Gagal mendapatkan lokasi");
        }
      );
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Laporan Berhasil Dikirim!
          </h2>
          <p className="text-gray-600 mb-6">
            Laporan Anda akan diverifikasi oleh admin. Status laporan dapat
            dipantau di peta setelah diverifikasi.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Kirim Laporan Lain
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Lapor Limbah</h1>
      <p className="text-gray-600 mb-8">
        Laporkan temuan limbah di area pesisir atau laut Bawean.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Laporan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Buat Laporan Baru</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategori Limbah <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Pilih Kategori</option>
                <option value="plastik">Plastik</option>
                <option value="logam">Logam</option>
                <option value="kaca">Kaca</option>
                <option value="organik">Organik</option>
                <option value="berbahaya">Berbahaya</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deskripsi <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jelaskan kondisi limbah yang Anda temukan..."
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Latitude
                </label>
                <input
                  type="number"
                  step="any"
                  value={formData.latitude}
                  onChange={(e) =>
                    setFormData({ ...formData, latitude: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="-6.123456"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Longitude
                </label>
                <input
                  type="number"
                  step="any"
                  value={formData.longitude}
                  onChange={(e) =>
                    setFormData({ ...formData, longitude: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="112.123456"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={getCurrentLocation}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              📍 Gunakan Lokasi Saat Ini
            </button>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Foto (opsional, max 5MB)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {preview && (
                <div className="mt-2">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || !user}
              className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Mengirim..." : "Kirim Laporan"}
            </button>
            {!user && (
              <p className="text-sm text-gray-500 text-center">
                <a href="/auth/login" className="text-blue-600 hover:underline">
                  Masuk
                </a>{" "}
                untuk mengirim laporan.
              </p>
            )}
          </form>
        </div>

        {/* Peta Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Peta Laporan</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🗺️</div>
              <p>Peta Laporan Limbah</p>
              <p className="text-sm">(Integrasi Leaflet - Coming Soon)</p>
            </div>
          </div>
          <div className="mt-4 text-xs text-orange-600">
            ⚠️ Peta akan menampilkan laporan limbah yang telah diverifikasi
          </div>
        </div>
      </div>
    </div>
  );
}
