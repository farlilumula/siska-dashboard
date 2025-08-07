import {Routes, Route, Navigate} from "react-router-dom";
import MainLayout from "@/layout/MainLayout.jsx";
import Login from "./pages/login/Login";
import PrivateRoute from "@/routes/PrivateRoute.jsx";
import MenuRoutes from "@/routes/MenuRoutes.jsx"

function App() {
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
                {MenuRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default App;