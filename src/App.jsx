import {Routes, Route, Navigate} from "react-router-dom";
import MainLayout from "@/layout/MainLayout.jsx";
import Login from "./pages/login/Login";
import PrivateRoute from "@/routes/PrivateRoute.jsx";
import { navMain, navSecondary } from "@/routes/MenuRoutes";
import CreateTicket from "@/pages/ticket/CreateTicket.jsx";
import TicketDetail from "@/pages/ticket/TicketDetail.jsx";
import CreatePegawai from "@/pages/usermanagement/CreatePegawai.jsx"


function flattenRoutes(routes) {
    return routes.flatMap(route => [
        ...(route.element ? [route] : []),
        ...(route.items ? flattenRoutes(route.items) : [])
    ]);
}


function App() {
    const allRoutes = [...flattenRoutes(navMain), ...flattenRoutes(navSecondary)];
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route
                element={
                    // <PrivateRoute>
                    <MainLayout />
                    // </PrivateRoute>
                }
            >
                {allRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
                <Route path="/ticket/CreateTicket" element={<CreateTicket/>}/>
                <Route path="/ticket/:no" element={<TicketDetail/>}/>
                <Route path="/CreatePegawai" element={<CreatePegawai/>}/>
            </Route>
        </Routes>
    );
}

export default App;