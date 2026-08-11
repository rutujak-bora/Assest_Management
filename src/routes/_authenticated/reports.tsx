import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileDown, ShieldAlert, Wrench, PackageCheck, Calendar, TrendingUp, ShoppingBag, DollarSign, BarChart3 } from "lucide-react";
import * as XLSX from "xlsx";
import { toast } from "sonner";
import { getCategoryLabel, STATUS_LABEL, type AssetCategory, type AssetStatus } from "@/lib/categories";

export const Route = createFileRoute("/_authenticated/reports")({
  head: () => ({
    meta: [
      { title: "Reports — IT Asset Manager" },
      { name: "description", content: "Monthly asset purchase analysis, warranty expiry, repair and inventory analytics." },
    ],
  }),
  component: ReportsPage,
});

function exportRows(rows: Record<string, unknown>[], name: string) {
  if (!rows.length) return toast.info("Nothing to export");
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), name.slice(0, 30));
  XLSX.writeFile(wb, `${name}_${new Date().toISOString().slice(0, 10)}.xlsx`);
}

interface MonthlyPurchase {
  monthKey: string;
  monthLabel: string;
  count: number;
  totalCost: number;
  avgCost: number;
  topCategory: string;
}

export function calculateMonthlyPurchases(list: any[]): MonthlyPurchase[] {
  const map: Record<string, { count: number; totalCost: number; catCounts: Record<string, number> }> = {};

  list.forEach((a) => {
    const rawDate = a.purchase_date || a.created_at;
    if (!rawDate) return;
    const date = new Date(rawDate);
    if (isNaN(date.getTime())) return;

    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    if (!map[key]) {
      map[key] = { count: 0, totalCost: 0, catCounts: {} };
    }
    map[key].count += 1;
    map[key].totalCost += Number(a.purchase_price) || 0;

    const cat = a.category ?? "other";
    map[key].catCounts[cat] = (map[key].catCounts[cat] ?? 0) + 1;
  });

  return Object.entries(map)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([key, data]) => {
      const [year, month] = key.split("-");
      const d = new Date(Number(year), Number(month) - 1, 1);
      const monthLabel = d.toLocaleString("default", { month: "long", year: "numeric" });

      const topCatEntry = Object.entries(data.catCounts).sort((a, b) => b[1] - a[1])[0];
      const topCatLabel = topCatEntry ? getCategoryLabel(topCatEntry[0]) : "—";

      return {
        monthKey: key,
        monthLabel,
        count: data.count,
        totalCost: data.totalCost,
        avgCost: data.count ? Math.round(data.totalCost / data.count) : 0,
        topCategory: topCatLabel,
      };
    });
}

function ReportsPage() {
  const { data: assets } = useQuery({
    queryKey: ["assets", "report"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("assets")
        .select("*, current_employee:employees(name, employee_code)")
        .limit(2000);
      if (error) throw error;
      return data ?? [];
    },
  });

  const list = (assets ?? []) as any[];
  const today = new Date();
  const in60 = new Date(today.getTime() + 60 * 86400000);

  const expiring = list.filter((a) => a.warranty_end && new Date(a.warranty_end) >= today && new Date(a.warranty_end) <= in60);
  const expired = list.filter((a) => a.warranty_end && new Date(a.warranty_end) < today);
  const inRepair = list.filter((a) => a.status === "in_repair" || a.status === "damaged");

  const byCategory = Object.entries(
    list.reduce<Record<string, number>>((acc, a) => ({ ...acc, [a.category]: (acc[a.category] ?? 0) + 1 }), {}),
  ).sort((a, b) => b[1] - a[1]);

  const byStatus = Object.entries(
    list.reduce<Record<string, number>>((acc, a) => ({ ...acc, [a.status]: (acc[a.status] ?? 0) + 1 }), {}),
  ).sort((a, b) => b[1] - a[1]);

  const totalValue = list.reduce((s, a) => s + (Number(a.purchase_price) || 0), 0);
  const monthlyPurchases = calculateMonthlyPurchases(list);

  const maxMonthlySpend = Math.max(...monthlyPurchases.map((m) => m.totalCost), 1);

  const assetRows = (rows: any[]) =>
    rows.map((a) => ({
      "Asset Tag": a.asset_tag,
      Category: getCategoryLabel(a.category),
      Product: a.product_name,
      Serial: a.serial_number,
      Status: STATUS_LABEL[a.status as AssetStatus],
      "Warranty End": a.warranty_end,
      "Assigned To": a.current_employee?.name ?? "",
      Location: a.location,
      Vendor: a.vendor_name,
      Price: a.purchase_price,
    }));

  const Section = ({ title, icon: Icon, rows, name, emptyText, headerBg }: {
    title: string; icon: typeof ShieldAlert; rows: any[]; name: string; emptyText: string; headerBg?: string;
  }) => (
    <Card className="overflow-hidden border shadow-sm transition-all hover:shadow-md">
      <CardHeader className={`flex flex-row items-center justify-between space-y-0 p-4 border-b ${headerBg ?? "bg-slate-50 dark:bg-slate-900/50"}`}>
        <CardTitle className="flex items-center gap-2 text-base font-semibold">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-4 w-4" />
          </div>
          <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{title}</span>
          <Badge variant="secondary" className="font-mono text-xs ml-1">{rows.length}</Badge>
        </CardTitle>
        <Button variant="outline" size="sm" className="h-8 text-xs bg-background/80 hover:bg-background" onClick={() => exportRows(assetRows(rows), name)}>
          <FileDown className="h-3.5 w-3.5 mr-1.5 text-primary" />Export
        </Button>
      </CardHeader>
      <CardContent className="p-0 overflow-x-auto">
        {!rows.length ? (
          <p className="px-6 py-6 text-sm text-muted-foreground">{emptyText}</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-muted/30 text-muted-foreground">
              <tr className="text-left">
                <th className="px-4 py-2.5 font-medium">Asset Tag</th>
                <th className="px-4 py-2.5 font-medium">Product</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5 font-medium">Warranty End</th>
                <th className="px-4 py-2.5 font-medium">Assigned To</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {rows.slice(0, 25).map((a) => (
                <tr key={a.id} className="hover:bg-accent/40 transition-colors">
                  <td className="px-4 py-2.5 font-medium font-mono text-xs text-primary">{a.asset_tag}</td>
                  <td className="px-4 py-2.5 font-medium">{a.product_name}</td>
                  <td className="px-4 py-2.5">{STATUS_LABEL[a.status as AssetStatus]}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{a.warranty_end ?? "—"}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{a.current_employee?.name ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      
      {/* Header with Color Gradient Text */}
      <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Reports & Analytics
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Asset purchase analysis, warranty tracking, and downloadable inventory reports.
          </p>
        </div>
        <Button
          onClick={() => exportRows(assetRows(list), "full_inventory")}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md transition-all"
        >
          <FileDown className="h-4 w-4 mr-2" />Export Full Inventory
        </Button>
      </div>

      {/* Metric Cards with Gradient Accent Themes */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Total Assets */}
        <Card className="relative overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-50/50 via-background to-blue-500/5 dark:from-blue-950/20 dark:to-blue-900/10 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Total Assets</p>
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <ShoppingBag className="h-4 w-4" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              {list.length}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Across all categories</p>
          </CardContent>
        </Card>

        {/* Expiring Warranty */}
        <Card className="relative overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-50/50 via-background to-amber-500/5 dark:from-amber-950/20 dark:to-amber-900/10 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Expiring (60d)</p>
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <ShieldAlert className="h-4 w-4" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {expiring.length}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Needs warranty renewal</p>
          </CardContent>
        </Card>

        {/* Warranty Expired */}
        <Card className="relative overflow-hidden border border-rose-500/20 bg-gradient-to-br from-rose-50/50 via-background to-rose-500/5 dark:from-rose-950/20 dark:to-rose-900/10 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Warranty Expired</p>
              <div className="p-2 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <ShieldAlert className="h-4 w-4" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
              {expired.length}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Lapsed warranty coverage</p>
          </CardContent>
        </Card>

        {/* Total Purchase Value */}
        <Card className="relative overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-emerald-50/50 via-background to-emerald-500/5 dark:from-emerald-950/20 dark:to-emerald-900/10 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Total Purchase Value</p>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <DollarSign className="h-4 w-4" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ₹{totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Total invested capital</p>
          </CardContent>
        </Card>
      </div>

      {/* NEW REPORT POINT: Monthly Purchase Asset Analysis Report */}
      <Card className="border border-purple-500/20 bg-gradient-to-br from-purple-50/30 via-background to-indigo-50/20 dark:from-purple-950/20 dark:to-indigo-950/10 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b bg-purple-500/5 p-4">
          <div className="space-y-1">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 dark:from-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
                Monthly Asset Purchase Analysis Report
              </span>
            </CardTitle>
            <CardDescription className="text-xs">
              Breakdown of assets acquired per month, expenditure trend, and top category investments.
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              exportRows(
                monthlyPurchases.map((m) => ({
                  Month: m.monthLabel,
                  "Quantity Purchased": m.count,
                  "Total Expenditure (₹)": m.totalCost,
                  "Average Cost / Asset (₹)": m.avgCost,
                  "Top Purchased Category": m.topCategory,
                })),
                "monthly_purchase_analysis",
              )
            }
            className="bg-background/80 hover:bg-background border-purple-200 dark:border-purple-800"
          >
            <FileDown className="h-4 w-4 mr-1.5 text-purple-600" />Export Monthly Report
          </Button>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          {!monthlyPurchases.length ? (
            <p className="p-6 text-sm text-muted-foreground">No purchase data recorded yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-purple-500/10 text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                <tr className="text-left border-b border-purple-100 dark:border-purple-900/50">
                  <th className="px-4 py-3">Month</th>
                  <th className="px-4 py-3">Assets Acquired</th>
                  <th className="px-4 py-3">Total Spend (₹)</th>
                  <th className="px-4 py-3">Avg Cost / Asset</th>
                  <th className="px-4 py-3">Top Category</th>
                  <th className="px-4 py-3 min-w-[140px]">Spend Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100/50 dark:divide-purple-900/30">
                {monthlyPurchases.map((m) => {
                  const percent = Math.round((m.totalCost / maxMonthlySpend) * 100);
                  return (
                    <tr key={m.monthKey} className="hover:bg-purple-500/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-purple-500 shrink-0" />
                        {m.monthLabel}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="secondary" className="font-mono bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                          {m.count} {m.count === 1 ? "asset" : "assets"}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 font-bold text-foreground font-mono">
                        ₹{m.totalCost.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground font-mono text-xs">
                        ₹{m.avgCost.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {m.topCategory}
                      </td>
                      <td className="px-4 py-3">
                        <div className="space-y-1">
                          <div className="w-full bg-purple-100 dark:bg-purple-950 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${Math.max(percent, 4)}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>

      {/* Category and Status Breakdown Cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        
        {/* Assets by Category */}
        <Card className="border border-blue-500/20 bg-gradient-to-br from-blue-50/20 via-background to-indigo-50/10 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b bg-blue-500/5 p-4">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-blue-600" />
              <span className="bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
                Assets by Category
              </span>
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => exportRows(byCategory.map(([k, v]) => ({ Category: getCategoryLabel(k), Count: v })), "assets_by_category")}
              className="h-8 text-xs"
            >
              <FileDown className="h-3.5 w-3.5 mr-1.5 text-blue-600" />Export
            </Button>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {byCategory.map(([k, v]) => {
              const pct = Math.round((v / (list.length || 1)) * 100);
              return (
                <div key={k} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{getCategoryLabel(k)}</span>
                    <span className="text-xs font-mono font-bold text-muted-foreground">{v} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-blue-100 dark:bg-blue-950 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
            {!byCategory.length && <p className="text-sm text-muted-foreground">No data yet.</p>}
          </CardContent>
        </Card>

        {/* Assets by Status */}
        <Card className="border border-indigo-500/20 bg-gradient-to-br from-indigo-50/20 via-background to-purple-50/10 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b bg-indigo-500/5 p-4">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-indigo-600" />
              <span className="bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                Assets by Status
              </span>
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => exportRows(byStatus.map(([k, v]) => ({ Status: STATUS_LABEL[k as AssetStatus], Count: v })), "assets_by_status")}
              className="h-8 text-xs"
            >
              <FileDown className="h-3.5 w-3.5 mr-1.5 text-indigo-600" />Export
            </Button>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {byStatus.map(([k, v]) => {
              const pct = Math.round((v / (list.length || 1)) * 100);
              return (
                <div key={k} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{STATUS_LABEL[k as AssetStatus] || k}</span>
                    <span className="text-xs font-mono font-bold text-muted-foreground">{v} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-indigo-100 dark:bg-indigo-950 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
            {!byStatus.length && <p className="text-sm text-muted-foreground">No data yet.</p>}
          </CardContent>
        </Card>
      </div>

      {/* Detailed Report Sections */}
      <Section title="Warranty Expiring Soon (60 Days)" icon={ShieldAlert} rows={expiring} name="warranty_expiring" emptyText="No warranties expiring in the next 60 days." headerBg="bg-amber-500/10 dark:bg-amber-950/20" />
      <Section title="Warranty Expired" icon={ShieldAlert} rows={expired} name="warranty_expired" emptyText="No expired warranties." headerBg="bg-rose-500/10 dark:bg-rose-950/20" />
      <Section title="In Repair / Damaged" icon={Wrench} rows={inRepair} name="repair_report" emptyText="No assets currently in repair." headerBg="bg-orange-500/10 dark:bg-orange-950/20" />
      <Section title="Assigned Assets" icon={PackageCheck} rows={list.filter((a) => a.status === "assigned")} name="assigned_assets" emptyText="No assets are currently assigned." headerBg="bg-blue-500/10 dark:bg-blue-950/20" />
    </div>
  );
}
