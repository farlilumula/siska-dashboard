import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {useContext} from "react";
import {AppContext} from "@/context/app-context";
import {assets} from "@/assets/assets";
import {
  Binoculars,
  Cog,
  CreditCard,
  FileCheck,
  LayoutDashboard,
  MessageCircleQuestionMark,
  TriangleAlert,
  Warehouse
} from "lucide-react";
import {DocumentTextIcon, ExclamationCircleIcon} from "@heroicons/react/24/outline/index.js";

export function AppSidebar({
  ...props
}) {
  const {user} = useContext(AppContext);

  const data = {
    user: {
      name: user?.name ? user?.name : "User",
      email: user?.email ? user?.email : "user@siska.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/Home",
        icon: LayoutDashboard,
      },
      {
        title: "Tickets",
        url: "/Ticket",
        icon: CreditCard,
        items: [
          {
            title: "Proses Tiket",
            url: "/Ticket",
          },
          {
            title: "All Ticket",
            url: "/ticket/Allticket",
          }
        ]
      },
      {
        title: "Laporan",
        url: "/Report",
        icon: FileCheck,
        items: [
          {
            title: "Laporan Tiket",
            icon: FileCheck,
            url: "/Report",
          },
          {
            title: "Analitik",
            url: "/Analytics",
          }
        ]
      },
      {
        title: "Master Pegawai",
        url: "/ListPegawai",
        icon: Warehouse,
      },
      {
        title: "Assets",
        url: "/AssetManagement",
        icon: Warehouse,
      },
      {
        title: "FAQs",
        url: "/Faqs",
        icon: TriangleAlert,
      }
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: Cog,
      },
      {
        title: "Get Help",
        url: "#",
        icon: MessageCircleQuestionMark,
      },
      {
        title: "Search",
        url: "#",
        icon: Binoculars,
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#" className="flex items-center gap-2 self-center font-medium">
                <div className="flex items-center justify-center rounded-md">
                  <img src={assets.logo} className="bg-cover" alt="logo"/>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
