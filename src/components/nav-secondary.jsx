import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import { IconCirclePlusFilled, IconMail } from "@tabler/icons-react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const cn = (...c) => c.filter(Boolean).join(" ");

export function NavSecondary({ items = [] }) {
  const location = useLocation();
  const isActive = (url) =>
      url && location.pathname.toLowerCase().startsWith(String(url).toLowerCase());

  const isAnyChildActive = (children) =>
      (children || []).some((c) => isActive(c.url));

  return (
      <SidebarGroup>
        <SidebarGroupContent className="flex flex-col gap-2">
          {/* Menu Utama */}
          <SidebarMenu>
            {items.map((item) => {
              const hasChildren = item.items && item.items.length > 0;

              if (!hasChildren) {
                // Item tanpa submenu → link biasa
                return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                          asChild
                          tooltip={item.title}
                          className={cn(
                              "justify-start",
                              isActive(item.url) && "bg-accent text-accent-foreground"
                          )}
                      >
                        <Link to={item.url} className="flex items-center gap-2 px-3 py-2">
                          {item.icon && <item.icon className="w-5 h-5 shrink-0" />}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                );
              }

              // Item dengan submenu → DropdownMenu
              const opened = isActive(item.url) || isAnyChildActive(item.items);

              return (
                  <SidebarMenuItem key={item.title}>
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            tooltip={item.title}
                            className={cn(
                                "justify-start w-full",
                                opened && "bg-accent/60 text-accent-foreground"
                            )}
                        >
                          <div className="flex items-center gap-2 w-full">
                            {item.icon && <item.icon className="w-5 h-5 shrink-0" />}
                            <span className="flex-1 text-left">{item.title}</span>
                            <ChevronDown
                                className={cn(
                                    "h-4 w-4 transition-transform",
                                    opened && "rotate-180"
                                )}
                            />
                          </div>
                        </SidebarMenuButton>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                          side="right"
                          align="start"
                          sideOffset={8}
                          className="min-w-44"
                      >
                        <DropdownMenuLabel className="text-xs text-muted-foreground">
                          {item.title}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {item.items.map((sub) => (
                            <DropdownMenuItem
                                key={sub.title}
                                asChild
                                className={cn(
                                    "cursor-pointer",
                                    isActive(sub.url) && "bg-accent/60 text-accent-foreground"
                                )}
                            >
                              <Link to={sub.url}>{sub.title}</Link>
                            </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
  );
}
