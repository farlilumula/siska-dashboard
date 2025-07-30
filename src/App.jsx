import {BrowserRouter as Router, Routes, Route, useLocation, Navigate} from "react-router-dom";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
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

function App() {

    return (
            <Routes>
                <Route>
                    <Route path="/" element={<Navigate to="/login" replace/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
                <Route element={<MainLayout/>}>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Ticket" element={<Ticket/>}/>
                    <Route path="/ticket/CreateTicket" element={<CreateTicket/>}/>
                    <Route path="/ticket/Allticket" element={<Allticket/>}/>
                    <Route path="/Report" element={<Report/>}/>
                    <Route path="/Analytics" element={<Analytics/>}/>
                    <Route path="/ListPegawai" element={<ListPegawai/>}/>
                    <Route path="/AssetManagement" element={<AssetManagement/>}/>
                    <Route path="/ListAsset" element={<ListAsset/>}/>
                    <Route path="/Faqs" element={<Faqs/>}/>
                </Route>
            </Routes>
    )
        ;
}

export default App;
