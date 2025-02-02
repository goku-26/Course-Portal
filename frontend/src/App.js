import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./pages/Login";
import Admin from "./pages/Admin";
import User from "./pages/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  // Check if the user is authenticated and their role
  const isAuthenticated = !!localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  return (
    <Router>
      {/* Toast notifications */}
      <ToastContainer />

      <Routes>
        {/* Login Route (accessible to everyone) */}
        <Route path="/login" element={<LoginComponent />} />

        {/* Admin Route (accessible only to authenticated admins) */}
        <Route
          path="/admin"
          element={
            isAuthenticated && userRole === "admin" ? (
              <Admin />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* User Route (accessible only to authenticated users) */}
        <Route
          path="/user"
          element={
            isAuthenticated && userRole === "user" ? (
              <User />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Default Route (redirect to login if not authenticated) */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              userRole === "admin" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/user" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Fallback Route (redirect to login for any unknown paths) */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;