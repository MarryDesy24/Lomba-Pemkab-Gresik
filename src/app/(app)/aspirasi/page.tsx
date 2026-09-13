"use client";

import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseBrowser } from "@/lib/supabase-browser";

interface Aspirasi {
  id: string;
  category: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
}

export default function AspirasiPage() {
  const { user } = useAuth();
  const supabase = useSupabaseBrowser();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    latitude: "",
    longitude: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aspirasiList, setAspirasiList] = useState<Aspirasi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAspirasi();
  }, [supabase]);

  const fetchAspirasi = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("aspirations")
      .select("id, category, title, description, status, created_at")
      .in("status", ["diverifikasi", "diproses", "selesai"])
      .order("created_at", { ascending: false })
      .limit(10);

    if (data) {
      setAspirasiList(data);
    }
    setLoading(false);
  };

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
      setError("Anda harus masuk untuk menyampaikan aspirasi");
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
          .from("aspirations")
          .upload(fileName, file);

        if (uploadError) {
          throw new Error("Gagal mengupload foto");
        }

        const {
          data: { publicUrl },
        } = supabase.storage.from("aspirations").getPublicUrl(fileName);
        photoUrl = publicUrl;
      }

      const { error: insertError } = await supabase.from("aspirations").insert({
        reporter_id: user.id,
        category: formData.category,
        title: formData.title,
        description: formData.description,
        latitude: formData.latitude ? parseFloat(formData.latitude) : null,
        longitude: formData.longitude ? parseFloat(formData.longitude) : null,
        photo_url: photoUrl,
        status: "menunggu_verifikasi",
      });

      if (insertError) {
        throw new Error("Gagal menyimpan aspirasi");
      }

      setSubmitted(true);
      setFormData({ category: "", title: "", description: "", latitude: "", longitude: "" });
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "selesai":
        return "bg-green-100 text-green-800";
      case "diproses":
        return "bg-blue-100 text-blue-800";
      case "diverifikasi":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "selesai":
        return "Selesai";
      case "diproses":
        return "Diproses";
      case "diverifikasi":
        return "Diverifikasi";
      default:
        return status;
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Aspirasi Berhasil Dikirim!
          </h2>
          <p className="text-gray-600 mb-6">
            Aspirasi Anda akan diverifikasi oleh admin. Terima kasih atas
            partisipasi Anda.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Kirim Aspirasi Lain
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Aspirasi Masyarakat
      </h1>
      <p className="text-gray-600 mb-8">
        Sampaikan permasalahan atau aspirasi terkait kondisi Bawean untuk
        ditindaklanjuti oleh pemerintah dan mitra.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Aspirasi */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Sampaikan Aspirasi</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategori/Permasalahan <span className="text-red-500">*</span>
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
                <option value="infrastruktur">Infrastruktur</option>
                <option value="lingkungan">Lingkungan</option>
                <option value="ekonomi">Ekonomi</option>
                <option value="sosial">Sosial</option>
                <option value="keamanan">Keamanan</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Judul <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Judul singkat aspirasi Anda"
                required
              />
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
                placeholder="Jelaskan permasalahan atau aspirasi Anda secara detail..."
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Latitude (opsional)
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
                  Longitude (opsional)
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
                Foto/Bukti (opsional, max 5MB)
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
              {submitting ? "Mengirim..." : "Kirim Aspirasi"}
            </button>
            {!user && (
              <p className="text-sm text-gray-500 text-center">
                <a href="/auth/login" className="text-blue-600 hover:underline">
                  Masuk
                </a>{" "}
                untuk menyampaikan aspirasi.
              </p>
            )}
          </form>
        </div>

        {/* Status Aspirasi */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Aspirasi Terverifikasi</h2>
          {loading ? (
            <p className="text-gray-500">Memuat data...</p>
          ) : aspirasiList.length === 0 ? (
            <p className="text-gray-500">Belum ada aspirasi terverifikasi.</p>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {aspirasiList.map((aspirasi) => (
                <div
                  key={aspirasi.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{aspirasi.title}</span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                        aspirasi.status
                      )}`}
                    >
                      {getStatusLabel(aspirasi.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {aspirasi.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400 capitalize">
                      {aspirasi.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(aspirasi.created_at).toLocaleDateString("id-ID")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
