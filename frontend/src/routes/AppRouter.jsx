import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

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

            </Routes>

        </BrowserRouter>

    );

}