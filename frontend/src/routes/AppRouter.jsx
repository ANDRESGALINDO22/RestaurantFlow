import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ClientMenu from "../pages/client/ClientMenu";

function PrivateRoute({ children }) {

    const token = localStorage.getItem("token");

    return token ? children : <Navigate to="/" />;

}

export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/cliente/:mesa"
                    element={<ClientMenu />}
                />

            </Routes>

        </BrowserRouter>

    );

}