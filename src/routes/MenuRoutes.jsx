import {
    LayoutDashboard,
    CreditCard,
    FileCheck,
    Warehouse,
    TriangleAlert,
    Cog,
    MessageCircleQuestionMark,
    Binoculars, LucideTicket
} from "lucide-react";
import {
    LuAirplay,
    LuBellRing,
    LuListTodo,
    LuPill,
    LuSquareM,
    LuTicket,
    LuUserCog,
    LuWorkflow
} from "react-icons/lu";
import { RiTelegramLine } from "react-icons/ri";

import Home from "@/pages/dashboard/Home.jsx";
import Ticket from "@/pages/ticket/Ticket.jsx";
import Allticket from "@/pages/ticket/Allticket.jsx";
import Report from "@/pages/Report.jsx";
import Analytics from "@/pages/Analytics.jsx";
import ListPegawai from "@/pages/pegawai/ListPegawai.jsx";
import AssetManagement from "@/pages/AssetManagement.jsx";
import Faqs from "@/pages/Faqs.jsx";
import ListAsset from "@/pages/ListAsset.jsx";
import UserList from "@/pages/usermanagement/UserList.jsx";
import SatuSehat from "@/pages/SatuSehat.jsx";
import Notifications from "@/pages/Notifications.jsx";
import MasterData from "@/pages/MasterData.jsx";
import TelegramBot from "@/pages/TelegramBot.jsx";


export const navMain = [
    {
        title: "Dashboard",
        path: "/Home",
        icon: LayoutDashboard,
        element: <Home />,
    },
    {
        title: "Tickets",
        path: "/Ticket",
        icon: CreditCard,
        element: <Ticket />,
        items: [
            {
                title: "Proses Tiket",
                path: "/Ticket",
                icon: LucideTicket,
                element: <Ticket/>,
            },
            {
                title: "All Ticket",
                path: "/ticket/Allticket",
                icon: LucideTicket,
                element: <Allticket />,
            },
        ]
    },
    {
        title: "Laporan",
        path: "/Report",
        icon: FileCheck,
        element: <Report />,
        items: [
            {
                title: "Laporan Tiket",
                path: "/Report",
                icon: LuTicket,
                element: <Report />,
            },
            {
                title: "Analitik",
                path: "/Analytics",
                icon: LuWorkflow,
                element: <Analytics />,
            }
        ]
    },
    {
        title: "Master Pegawai",
        path: "/ListPegawai",
        icon: Warehouse,
        element: <ListPegawai />
    },
    {
        title: "Data Satu Sehat",
        path: "/SatuSehat",
        icon: LuPill,
        element: <SatuSehat/>
    },
    {
        title: "Notifikasi",
        path: "/Notifications",
        icon: LuBellRing,
        element: <Notifications />
    },
    {
        title: "Master Data",
        path: "/MasterData",
        icon: LuAirplay,
        element: <MasterData />
    },
    {
        title: "Telegram",
        path: "/TelegramBot",
        icon: RiTelegramLine,
        element: <TelegramBot />
    },
    {
        title: "Assets",
        path: "/AssetManagement",
        icon: Warehouse,
        element: <AssetManagement />,
        items: [
            {
                title: "List Aset",
                path: "/ListAsset",
                element: <ListAsset/>
            },
        ]
    },
    {
        title: "FAQs",
        path: "/Faqs",
        icon: TriangleAlert,
        element: <Faqs />
    }
];

export const navSecondary = [
    {
        title: "Settings",
        icon: Cog,
        items: [
            {
                title: "List User",
                path: "/UserList",
                icon: LuListTodo,
                element: <UserList />
            },
            {
                title: "Group Management",
                path: "/GroupManagement",
                icon: LuUserCog,
                element: <div>Halaman belum dibuat</div>
            },
            {
                title: "Menu Management",
                path: "/MenuManagement",
                icon: LuSquareM,
                element: <div>Halaman belum dibuat</div>
            }
        ]
    },
    {
        title: "Get Help",
        path: "#",
        icon: MessageCircleQuestionMark,
        element: <div>Halaman belum dibuat</div>
    },
    {
        title: "Search",
        path: "#",
        icon: Binoculars,
        element: <div>Halaman belum dibuat</div>
    },
];
