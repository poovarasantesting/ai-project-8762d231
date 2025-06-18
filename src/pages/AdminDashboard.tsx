import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { LogOut, Users, Settings, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      navigate('/admin-login');
    }
  }, [isAuthenticated, user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin-login');
  };

  if (!isAuthenticated || !user || user.role !== 'admin') {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Welcome, {user.name}</span>
            <Button variant="outline" size="sm" onClick={handleLogout} className="border-white text-white hover:bg-white hover:text-slate-900">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="p-3 bg-blue-100 rounded-full mr-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Total Users</h3>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="p-3 bg-green-100 rounded-full mr-4">
              <Activity className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Active Sessions</h3>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="p-3 bg-purple-100 rounded-full mr-4">
              <Settings className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium">System Status</h3>
              <p className="text-sm font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full inline-block">Online</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Test User 1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user1@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Test User 2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user2@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin User</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">admin@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">admin</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}