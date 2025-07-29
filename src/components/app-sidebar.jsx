import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
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
import {CreditCard} from "lucide-react";
import {HiCube} from "react-icons/hi";
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
        icon: IconDashboard,
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
        icon: DocumentTextIcon,
        items: [
          {
            title: "Laporan Tiket",
            url: "/Report",
          },
          {
            title: "Analitik",
            url: "/Analytics",
          }
        ]
      },
      {
        title: "Assets",
        url: "/AssetManagement",
        icon: HiCube,
      },
      {
        title: "FAQs",
        url: "/Faqs",
        icon: ExclamationCircleIcon,
      }
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: IconSettings,
      },
      {
        title: "Get Help",
        url: "#",
        icon: IconHelp,
      },
      {
        title: "Search",
        url: "#",
        icon: IconSearch,
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
        {/*<NavDocuments items={data.documents} />*/}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
