import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, isAdmin } from "@/lib/auth";
import toast from "react-hot-toast";

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

export function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      toast.error("Please login to continue");
      navigate("/login");
      return;
    }

    // Check if admin access is required
    if (requireAdmin && !isAdmin()) {
      toast.error("You don't have permission to access this page");
      navigate("/user-dashboard");
      return;
    }
  }, [navigate, requireAdmin]);

  return <>{children}</>;
}