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
import {LuAirplay, LuBellRing, LuPill} from "react-icons/lu";
import {RiTelegramLine} from "react-icons/ri";

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
        title: "Data Satu Sehat",
        url: "/SatuSehat",
        icon: LuPill,
      },
      {
        title: "Notifikasi",
        url: "/Notifications",
        icon: LuBellRing,
      },
      {
        title: "Master Data",
        url: "/MasterData",
        icon: LuAirplay,
      },
      {
        title: "Telegram",
        url: "/TelegramBot",
        icon: RiTelegramLine,
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
        items: [
          {
            title: "List User",
            icon: FileCheck,
            url: "/UserList",
          },
          {
            title: "Group Management",
            url: "/GroupManagement",
          },{
            title: "Menu Management",
            url: "/MenuManagement",
          }
        ]
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
              <a href="#" className="flex justify-center items-center gap-2 self-center font-medium">
                <div className="flex items-center justify-center rounded-md">
                  <img src={assets.logo} className="bg-cover h-9" alt="logo"/>
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
