import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";

export default function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />} 
        />
        <Route 
          path="/dashboard" 
          element={<DashboardPage />} 
        />
      </Routes>
    </BrowserRouter>
  );
}