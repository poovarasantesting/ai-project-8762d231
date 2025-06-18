import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { isAuthenticated, isAdmin } from "@/lib/auth";

export default function HomePage() {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();
  const adminUser = isAdmin();

  const handleGetStarted = () => {
    if (authenticated) {
      if (adminUser) {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Auth Demo</h1>
          <div className="space-x-2">
            {authenticated ? (
              <Button onClick={handleGetStarted}>
                {adminUser ? 'Admin Dashboard' : 'My Dashboard'}
              </Button>
            ) : (
              <Button onClick={() => navigate('/login')}>Login</Button>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">User Authentication Demo</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A complete authentication system with admin and user roles.
            Try logging in with the demo credentials.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
            <Button size="lg" onClick={handleGetStarted}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/login')}>
              View Demo Accounts
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>User/Admin Authentication Demo</p>
        </div>
      </footer>
    </div>
  );
}