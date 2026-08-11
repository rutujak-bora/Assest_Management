import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CATEGORIES, STATUSES, statusBadgeClass, CATEGORY_LABEL } from "@/lib/categories";
import {
  Boxes, CheckCircle2, AlertTriangle, Wrench, RotateCcw, ShoppingCart, ShieldAlert, Users,
} from "lucide-react";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const today = new Date();
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1).toISOString();
      const [
        all, assigned, available, repair, returned, expired, monthBuy, assignments,
      ] = await Promise.all([
        supabase.from("assets").select("id, category, status", { count: "exact" }),
        supabase.from("assets").select("id", { count: "exact", head: true }).eq("status", "assigned"),
        supabase.from("assets").select("id", { count: "exact", head: true }).eq("status", "available"),
        supabase.from("assets").select("id", { count: "exact", head: true }).eq("status", "in_repair"),
        supabase.from("assets").select("id", { count: "exact", head: true }).eq("status", "returned"),
        supabase.from("assets").select("id", { count: "exact", head: true }).lt("warranty_end", new Date().toISOString().slice(0,10)),
        supabase.from("assets").select("id", { count: "exact", head: true }).gte("purchase_date", monthStart.slice(0,10)),
        supabase.from("asset_assignments").select("employee_id, employees(name)").eq("status", "active"),
      ]);
      const rows = all.data ?? [];
      const byCat = CATEGORIES.map((c) => ({ name: c.label, value: rows.filter((r) => r.category === c.value).length }));
      const byStatus = STATUSES.map((s) => ({ name: s.label, value: rows.filter((r) => r.status === s.value).length }));
      const byUser: Record<string, number> = {};
      for (const a of assignments.data ?? []) {
        const nm = (a as any).employees?.name ?? "Unknown";
        byUser[nm] = (byUser[nm] ?? 0) + 1;
      }
      const userChart = Object.entries(byUser).map(([name, value]) => ({ name, value })).slice(0, 8);
      return {
        total: all.count ?? 0,
        assigned: assigned.count ?? 0,
        available: available.count ?? 0,
        repair: repair.count ?? 0,
        returned: returned.count ?? 0,
        expired: expired.count ?? 0,
        monthBuy: monthBuy.count ?? 0,
        byCat,
        byStatus,
        userChart,
      };
    },
  });

  const stats = [
    { label: "Total Assets", value: data?.total ?? 0, icon: Boxes, tone: "text-primary bg-primary/10" },
    { label: "Assigned", value: data?.assigned ?? 0, icon: Users, tone: "text-info bg-info/10" },
    { label: "Available", value: data?.available ?? 0, icon: CheckCircle2, tone: "text-success bg-success/10" },
    { label: "In Repair", value: data?.repair ?? 0, icon: Wrench, tone: "text-warning bg-warning/10" },
    { label: "Returned", value: data?.returned ?? 0, icon: RotateCcw, tone: "text-muted-foreground bg-muted" },
    { label: "Warranty Expired", value: data?.expired ?? 0, icon: ShieldAlert, tone: "text-destructive bg-destructive/10" },
    { label: "Bought This Month", value: data?.monthBuy ?? 0, icon: ShoppingCart, tone: "text-primary bg-primary/10" },
    { label: "Alerts", value: (data?.repair ?? 0) + (data?.expired ?? 0), icon: AlertTriangle, tone: "text-warning bg-warning/10" },
  ];

  const COLORS = ["#2563eb","#16a34a","#f59e0b","#0ea5e9","#ef4444","#8b5cf6","#10b981","#f97316"];

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Real-time overview of your IT asset inventory.</p>
        </div>
        <Link to="/assets" search={{}} className="text-sm text-primary hover:underline">View all assets →</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((s) => (
          <Card key={s.label} className="border-border/60">
            <CardContent className="p-4 flex items-center gap-3">
              <div className={`h-10 w-10 rounded-md flex items-center justify-center ${s.tone}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="text-2xl font-semibold leading-tight">{isLoading ? "…" : s.value}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base">Assets by Category</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data?.byCat ?? []} margin={{ left: -10, right: 8, top: 8, bottom: 24 }}>
                <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} fontSize={10} stroke="currentColor" opacity={0.5} />
                <YAxis allowDecimals={false} fontSize={11} stroke="currentColor" opacity={0.5} />
                <Tooltip cursor={{ fill: "var(--accent)" }} contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8 }} />
                <Bar dataKey="value" radius={[6,6,0,0]} fill="var(--primary)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Asset Status</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={(data?.byStatus ?? []).filter((d) => d.value > 0)} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={2}>
                  {(data?.byStatus ?? []).map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8 }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-base">Quick categories</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {CATEGORIES.map((c) => {
              const count = data?.byCat.find((b) => b.name === CATEGORY_LABEL[c.value])?.value ?? 0;
              return (
                <Link key={c.value} to="/assets" search={{ category: c.value }}
                  className="group rounded-md border bg-card p-3 hover:border-primary/50 hover:bg-accent transition-colors">
                  <c.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="mt-2 text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-lg font-semibold">{count}</div>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-base">Recent status snapshot</CardTitle></CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {STATUSES.map((s) => {
              const v = data?.byStatus.find((x) => x.name === s.label)?.value ?? 0;
              return (
                <span key={s.value} className={`text-xs px-2.5 py-1 rounded-full border ${statusBadgeClass(s.value)}`}>
                  {s.label}: <b>{v}</b>
                </span>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
