"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseBrowser } from "@/lib/supabase-browser";

interface ChecklistItem {
  id: string;
  item: string;
  checked: boolean;
  category: string;
}

interface ChecklistResult {
  score: number;
  status: "siap" | "tidak_siap" | "perlu_perhatian";
  items: ChecklistItem[];
}

interface ChecklistHistory {
  id: string;
  score: number;
  status: string;
  created_at: string;
}

const defaultItems: Omit<ChecklistItem, "id">[] = [
  { item: "Kondisi kapal/perahu baik", checked: false, category: "Kapal" },
  { item: "Mesin berfungsi dengan baik", checked: false, category: "Kapal" },
  { item: "BBM cukup untuk perjalanan", checked: false, category: "Kapal" },
  { item: "Alat komunikasi (HT/HP) aktif", checked: false, category: "Peralatan" },
  { item: "Peralatan keselamatan lengkap (jas hujan, jaket pelampung)", checked: false, category: "Peralatan" },
  { item: "P3K tersedia", checked: false, category: "Peralatan" },
  { item: "Cuaca mendukung untuk melaut", checked: false, category: "Kondisi" },
  { item: "Informasi gelombang dan angin telah dicek", checked: false, category: "Kondisi" },
  { item: "Pemberitahuan kepada keluarga/teman", checked: false, category: "Lainnya" },
  { item: "Rute perjalanan telah ditentukan", checked: false, category: "Lainnya" },
];

export default function ChecklistPage() {
  const { user } = useAuth();
  const supabase = useSupabaseBrowser();
  const [items, setItems] = useState<ChecklistItem[]>(
    defaultItems.map((item, index) => ({ ...item, id: `item-${index}` }))
  );
  const [result, setResult] = useState<ChecklistResult | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [history, setHistory] = useState<ChecklistHistory[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    if (user) {
      fetchHistory();
    }
  }, [user, supabase]);

  const fetchHistory = async () => {
    setLoadingHistory(true);
    const { data, error } = await supabase
      .from("pre_sail_checklists")
      .select("id, score, status, created_at")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false })
      .limit(5);

    if (data) {
      setHistory(data);
    }
    setLoadingHistory(false);
  };

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    setResult(null);
    setSaved(false);
  };

  const calculateResult = (): ChecklistResult => {
    const checkedCount = items.filter((item) => item.checked).length;
    const totalItems = items.length;
    const score = Math.round((checkedCount / totalItems) * 100);

    let status: "siap" | "tidak_siap" | "perlu_perhatian";
    if (score >= 80) {
      status = "siap";
    } else if (score >= 50) {
      status = "perlu_perhatian";
    } else {
      status = "tidak_siap";
    }

    return { score, status, items };
  };

  const handleSubmit = async () => {
    const checklistResult = calculateResult();
    setResult(checklistResult);

    if (user) {
      setSaving(true);
      const { data, error } = await supabase
        .from("pre_sail_checklists")
        .insert({
          user_id: user.id,
          score: checklistResult.score,
          status: checklistResult.status,
        })
        .select("id")
        .single();

      if (data) {
        const checklistItems = checklistResult.items.map((item) => ({
          checklist_id: data.id,
          item: item.item,
          checked: item.checked,
        }));

        await supabase.from("checklist_items").insert(checklistItems);
        setSaved(true);
        fetchHistory();
      }
      setSaving(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "siap":
        return "bg-green-100 text-green-800 border-green-200";
      case "perlu_perhatian":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "tidak_siap":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "siap":
        return "SIAP MELAUT";
      case "perlu_perhatian":
        return "PERLU PERHATIAN";
      case "tidak_siap":
        return "TIDAK SIAP";
      default:
        return status;
    }
  };

  const categories = [...new Set(items.map((item) => item.category))];
  const checkedCount = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedCount / items.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Checklist Sebelum Melaut
      </h1>
      <p className="text-gray-600 mb-8">
        Pastikan kesiapan Anda sebelum melaut dengan melakukan pemeriksaan
        mandiri.
      </p>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Progress Pemeriksaan
          </span>
          <span className="text-sm font-medium text-gray-700">
            {checkedCount}/{items.length} item ({percentage}%)
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-300 ${
              percentage >= 80
                ? "bg-green-500"
                : percentage >= 50
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Checklist Items by Category */}
      <div className="space-y-6 mb-8">
        {categories.map((category) => (
          <div key={category} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {category}
            </h3>
            <div className="space-y-3">
              {items
                .filter((item) => item.category === category)
                .map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                      item.checked
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleItem(item.id)}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    />
                    <span
                      className={`ml-3 ${
                        item.checked
                          ? "text-green-800 line-through"
                          : "text-gray-700"
                      }`}
                    >
                      {item.item}
                    </span>
                  </label>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? "Menyimpan..." : "Selesai & Lihat Hasil"}
        </button>
        {!user && (
          <p className="mt-2 text-sm text-gray-500 text-center">
            <a href="/auth/login" className="text-blue-600 hover:underline">
              Masuk
            </a>{" "}
            untuk menyimpan riwayat checklist Anda.
          </p>
        )}
      </div>

      {/* Result */}
      {result && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Hasil Pemeriksaan</h2>
          <div
            className={`p-4 rounded-lg border ${getStatusColor(result.status)}`}
          >
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{result.score}%</div>
              <div className="text-lg font-semibold">
                {getStatusLabel(result.status)}
              </div>
            </div>
          </div>
          {saved && (
            <p className="mt-4 text-sm text-green-600 text-center">
              ✅ Checklist berhasil disimpan ke riwayat Anda.
            </p>
          )}
        </div>
      )}

      {/* History */}
      {user && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Riwayat Checklist</h2>
          {loadingHistory ? (
            <p className="text-gray-500">Memuat riwayat...</p>
          ) : history.length === 0 ? (
            <p className="text-gray-500">Belum ada riwayat checklist.</p>
          ) : (
            <div className="space-y-3">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <span className="font-medium">{item.score}%</span>
                    <span
                      className={`ml-2 px-2 py-1 text-xs rounded-full ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {getStatusLabel(item.status)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(item.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
