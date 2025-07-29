import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem("token"); // Cek token

    if (!token) {
        return <Navigate to="/login" replace />; // Redirect ke login jika tidak ada token
    }

    return <Outlet />; // Lanjutkan ke route yang dilindungi
};

export default PrivateRoute;