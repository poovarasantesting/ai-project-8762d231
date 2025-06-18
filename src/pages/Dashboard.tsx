import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export default function Dashboard() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated || !user) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Welcome, {user.name}!</h2>
            <p className="text-gray-600">
              You are logged in as a <span className="font-medium">{user.role}</span> user.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium mb-2">Your Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p>{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p>{user.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}