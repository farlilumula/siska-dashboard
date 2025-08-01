import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/dashboard/Home.jsx";
import Ticket from "./pages/ticket/Ticket.jsx";
import Allticket from "./pages/ticket/Allticket.jsx";
import Report from "./pages/Report.jsx";
import Analytics from "./pages/Analytics.jsx";
import ListPegawai from "./pages/pegawai/ListPegawai.jsx";
import AssetManagement from "./pages/AssetManagement.jsx";
import Faqs from "./pages/Faqs.jsx";
import ListAsset from "./pages/ListAsset.jsx";
import CreateTicket from "./pages/ticket/CreateTicket.jsx";
import Login from "./pages/login/Login";
import MainLayout from "@/layout/MainLayout.jsx";
import PrivateRoute from "@/routes/PrivateRoute.jsx";
import TicketDetail from "@/pages/ticket/TicketDetail.jsx";
import UserList from "@/pages/usermanagement/UserList.jsx";
import CreatePegawai from "./pages/usermanagement/CreatePegawai.jsx";

function App() {

    return (
        <Routes>
            <Route>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route path="/login" element={<Login/>}/>
            </Route>
            <Route element={
                // <PrivateRoute>
                    <MainLayout/>
                // </PrivateRoute>
            }>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Ticket" element={<Ticket/>}/>
                <Route path="/ticket/CreateTicket" element={<CreateTicket/>}/>
                <Route path="/ticket/Allticket" element={<Allticket/>}/>
                <Route path="/tiket/detail/{id}" element={<Ticket/>}/>
                <Route path="/ticket/:no" element={<TicketDetail/>}/>
                <Route path="/Report" element={<Report/>}/>
                <Route path="/Analytics" element={<Analytics/>}/>
                <Route path="/ListPegawai" element={<ListPegawai/>}/>
                <Route path="/AssetManagement" element={<AssetManagement/>}/>
                <Route path="/ListAsset" element={<ListAsset/>}/>
                <Route path="/UserList" element={<UserList/>}/>
                <Route path="/CreatePegawai" element={<CreatePegawai/>}/>
                <Route path="/Faqs" element={<Faqs/>}/>
            </Route>
        </Routes>
    )
        ;
}

export default App;