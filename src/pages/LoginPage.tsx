import React from 'react';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const { isAuthenticated } = useAuth();

  // Redirect if already logged in
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          Login System
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Admin and User authentication demo with 3 test accounts
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}