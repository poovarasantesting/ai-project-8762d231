import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/LoginForm';
import { useAuthStore } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export default function AdminLoginPage() {
  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user?.role === 'admin') {
      navigate('/admin-dashboard');
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Admin Portal</h1>
          <p className="text-gray-600 mt-2">Sign in to access admin dashboard</p>
        </div>
        
        <LoginForm isAdmin={true} />
        
        <div className="flex justify-center mt-6">
          <Button 
            variant="ghost" 
            className="text-gray-500"
            onClick={() => navigate('/')}
          >
            <User className="mr-2 h-4 w-4" />
            Go to User Login
          </Button>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <div className="mt-4">
          <h3 className="font-medium">Admin Credentials:</h3>
          <p>Email: admin@example.com</p>
          <p>Password: adminpass</p>
        </div>
      </div>
    </div>
  );
}