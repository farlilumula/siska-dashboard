import React from "react";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar.jsx";
import {AppSidebar} from "@/components/app-sidebar.jsx";
import {SiteHeader} from "@/components/site-header.jsx";
import Navbar from "@/components/Navbar.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <SidebarProvider
            style={{
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
            }}
        >
            <AppSidebar variant="inset" collapsible="icon"/>
            <SidebarInset>
                <SiteHeader/>
                {/*<Navbar/>*/}
                <main className="p-4 overflow-y-auto">
                    <Outlet/>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default MainLayout;
