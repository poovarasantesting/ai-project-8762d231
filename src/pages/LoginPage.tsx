import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, isAdmin } from "@/lib/auth";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already logged in
    if (isAuthenticated()) {
      if (isAdmin()) {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-muted/30">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome Back</h1>
        <LoginForm />
      </div>
    </div>
  );
}