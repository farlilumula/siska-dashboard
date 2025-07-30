import {Separator} from "@/components/ui/separator"
import {SidebarTrigger} from "@/components/ui/sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {SlashIcon} from "lucide-react";
import {Link, useLocation} from "react-router";
import {Fragment} from "react";
import {ModeToggle} from "@/components/mode-toggle.jsx";

export function SiteHeader() {
    const location = useLocation();

    // Split the path into parts, e.g., "/dashboard/tickets/123" -> ["dashboard", "tickets", "123"]
    const pathParts = location.pathname.split("/").filter(Boolean);

    // Build breadcrumb items
    const breadcrumbItems = pathParts.map((part, index) => {
        // Generate a link up to the current segment
        const to = "/" + pathParts.slice(0, index + 1).join("/");
        // Capitalize first letter
        const label = part.charAt(0).toUpperCase() + part.slice(1);
        return {label, to};
    });
    return (
        <header
            className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) sticky z-50 top-0 bg-white/20 dark:bg-zinc-600 backdrop-blur-lg">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1"/>
                <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4"/>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/Home">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {breadcrumbItems.map((item, index) => (
                            <Fragment key={index}>
                                <BreadcrumbSeparator>
                                    <SlashIcon/>
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link to={item.to}>{item.label}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="pe-4">
                <ModeToggle/>
            </div>
        </header>
    );
}
