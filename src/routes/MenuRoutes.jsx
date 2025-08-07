import Home from "@/pages/dashboard/Home.jsx";
import Ticket from "@/pages/ticket/Ticket.jsx";
import Allticket from "@/pages/ticket/Allticket.jsx";
import Report from "@/pages/Report.jsx";
import Analytics from "@/pages/Analytics.jsx";
import ListPegawai from "@/pages/pegawai/ListPegawai.jsx";
import AssetManagement from "@/pages/AssetManagement.jsx";
import Faqs from "@/pages/Faqs.jsx";
import ListAsset from "@/pages/ListAsset.jsx";
import CreateTicket from "@/pages/ticket/CreateTicket.jsx";
import TicketDetail from "@/pages/ticket/TicketDetail.jsx";
import UserList from "@/pages/usermanagement/UserList.jsx";
import CreatePegawai from "@/pages/usermanagement/CreatePegawai.jsx";

const MenuRoutes = [
    { path: "/Home", element: <Home /> },
    { path: "/Ticket", element: <Ticket /> },
    { path: "/ticket/CreateTicket", element: <CreateTicket /> },
    { path: "/ticket/Allticket", element: <Allticket /> },
    { path: "/ticket/:no", element: <TicketDetail /> },
    { path: "/Report", element: <Report /> },
    { path: "/Analytics", element: <Analytics /> },
    { path: "/ListPegawai", element: <ListPegawai /> },
    { path: "/AssetManagement", element: <AssetManagement /> },
    { path: "/ListAsset", element: <ListAsset /> },
    { path: "/UserList", element: <UserList /> },
    { path: "/CreatePegawai", element: <CreatePegawai /> },
    { path: "/Faqs", element: <Faqs /> },
];


export default MenuRoutes;