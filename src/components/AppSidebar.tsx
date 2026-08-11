import { useState } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard, Boxes, ClipboardList, FileBarChart2, ScrollText,
  LogOut, Building2, Users, Building, LayoutGrid, MapPin, FolderPlus,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { NewCategoryDialog } from "@/components/NewCategoryDialog";

const WORKSPACE_NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/assets", label: "All Assets", icon: Boxes },
  { to: "/assignments", label: "Assignments", icon: ClipboardList },
  { to: "/reports", label: "Reports", icon: FileBarChart2 },
  { to: "/audit", label: "Audit Log", icon: ScrollText },
];

const MASTER_NAV = [
  { to: "/employees", label: "Employees", icon: Users },
  { to: "/company", label: "Company", icon: Building },
  { to: "/department", label: "Department", icon: LayoutGrid },
  { to: "/location", label: "Location", icon: MapPin },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const path = useRouterState({ select: (r) => r.location.pathname });
  const navigate = useNavigate();
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);

  const isActive = (to: string) => path === to || path.startsWith(to + "/");

  const signOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/auth", replace: true });
  };

  return (
    <>
      <NewCategoryDialog open={categoryDialogOpen} onOpenChange={setCategoryDialogOpen} />
      <Sidebar collapsible="icon">
        <SidebarHeader className="border-b">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shrink-0">
              <Building2 className="h-4 w-4" />
            </div>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-tight">Bora Multicorp</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Asset Management</span>
              </div>
            )}
          </div>
        </SidebarHeader>

        <SidebarContent>
          {/* Workspace Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {WORKSPACE_NAV.map((item) => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild isActive={isActive(item.to)}>
                      <Link to={item.to} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Master Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Master</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {MASTER_NAV.map((item) => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild isActive={isActive(item.to)}>
                      <Link to={item.to} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                {/* New Category button */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setCategoryDialogOpen(true)}
                    isActive={false}
                    className="cursor-pointer"
                  >
                    <FolderPlus className="h-4 w-4 shrink-0" />
                    <span>New Category</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={signOut}>
                <LogOut className="h-4 w-4" />
                <span>Sign out</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
