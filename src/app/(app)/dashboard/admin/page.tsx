"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseBrowser } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

interface Stats {
  wasteReports: number;
  wasteReportsPending: number;
  aspirations: number;
  aspirationsPending: number;
  products: number;
  users: number;
}

interface RecentReport {
  id: string;
  category: string;
  title?: string;
  description: string;
  status: string;
  created_at: string;
}

export default function AdminDashboardPage() {
  const { isAdmin, loading: authLoading } = useAuth();
  const supabase = useSupabaseBrowser();
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({
    wasteReports: 0,
    wasteReportsPending: 0,
    aspirations: 0,
    aspirationsPending: 0,
    products: 0,
    users: 0,
  });
  const [recentReports, setRecentReports] = useState<RecentReport[]>([]);
  const [recentAspirations, setRecentAspirations] = useState<RecentReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.push("/");
    }
  }, [authLoading, isAdmin, router]);

  useEffect(() => {
    if (isAdmin) {
      fetchStats();
      fetchRecentData();
    }
  }, [isAdmin, supabase]);

  const fetchStats = async () => {
    const [wasteReports, wasteReportsPending, aspirations, aspirationsPending, products, users] =
      await Promise.all([
        supabase.from("waste_reports").select("id", { count: "exact", head: true }),
        supabase.from("waste_reports").select("id", { count: "exact", head: true }).eq("status", "menunggu_verifikasi"),
        supabase.from("aspirations").select("id", { count: "exact", head: true }),
        supabase.from("aspirations").select("id", { count: "exact", head: true }).eq("status", "menunggu_verifikasi"),
        supabase.from("products").select("id", { count: "exact", head: true }),
        supabase.from("profiles").select("id", { count: "exact", head: true }),
      ]);

    setStats({
      wasteReports: wasteReports.count || 0,
      wasteReportsPending: wasteReportsPending.count || 0,
      aspirations: aspirations.count || 0,
      aspirationsPending: aspirationsPending.count || 0,
      products: products.count || 0,
      users: users.count || 0,
    });
  };

  const fetchRecentData = async () => {
    setLoading(true);
    const [reports, aspirations] = await Promise.all([
      supabase
        .from("waste_reports")
        .select("id, category, description, status, created_at")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase
        .from("aspirations")
        .select("id, category, title, description, status, created_at")
        .order("created_at", { ascending: false })
        .limit(5),
    ]);

    setRecentReports(reports.data || []);
    setRecentAspirations(aspirations.data || []);
    setLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "menunggu_verifikasi":
        return "bg-yellow-100 text-yellow-800";
      case "diverifikasi":
        return "bg-blue-100 text-blue-800";
      case "diproses":
        return "bg-purple-100 text-purple-800";
      case "selesai":
        return "bg-green-100 text-green-800";
      case "ditolak":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      menunggu_verifikasi: "Menunggu Verifikasi",
      diverifikasi: "Diverifikasi",
      diproses: "Diproses",
      selesai: "Selesai",
      ditolak: "Ditolak",
    };
    return labels[status] || status;
  };

  if (authLoading || loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-500">Memuat...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Admin</h1>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Laporan Limbah</p>
              <p className="text-2xl font-bold text-gray-900">{stats.wasteReports}</p>
            </div>
            <div className="text-3xl">🗑️</div>
          </div>
          {stats.wasteReportsPending > 0 && (
            <div className="mt-2 text-sm text-yellow-600">
              {stats.wasteReportsPending} menunggu verifikasi
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Aspirasi</p>
              <p className="text-2xl font-bold text-gray-900">{stats.aspirations}</p>
            </div>
            <div className="text-3xl">📢</div>
          </div>
          {stats.aspirationsPending > 0 && (
            <div className="mt-2 text-sm text-yellow-600">
              {stats.aspirationsPending} menunggu verifikasi
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Produk</p>
              <p className="text-2xl font-bold text-gray-900">{stats.products}</p>
            </div>
            <div className="text-3xl">🛒</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Laporan Limbah Terbaru */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Laporan Limbah Terbaru</h2>
          <div className="space-y-4">
            {recentReports.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Belum ada laporan</p>
            ) : (
              recentReports.map((report) => (
                <div key={report.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium capitalize">{report.category}</span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                        report.status
                      )}`}
                    >
                      {getStatusLabel(report.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{report.description}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(report.created_at).toLocaleDateString("id-ID")}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Aspirasi Terbaru */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Aspirasi Terbaru</h2>
          <div className="space-y-4">
            {recentAspirations.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Belum ada aspirasi</p>
            ) : (
              recentAspirations.map((aspirasi) => (
                <div key={aspirasi.id} className="border border-gray-200 rounded-lg p-4">
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
                  <p className="text-sm text-gray-600">{aspirasi.description}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(aspirasi.created_at).toLocaleDateString("id-ID")}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
