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
import { navMain, navSecondary } from "@/routes/MenuRoutes";

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
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
