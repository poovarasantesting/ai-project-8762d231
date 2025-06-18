import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { LogOut, ShieldAlert, Users } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const userEmail = localStorage.getItem("userEmail");
  
  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userRole = localStorage.getItem("userRole");
    
    if (!isLoggedIn || userRole !== "admin") {
      toast({
        title: "Access denied",
        description: "You need admin privileges to access this page",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    
    toast({
      title: "Logged out",
      description: "Admin has been successfully logged out",
    });
    
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <ShieldAlert className="h-6 w-6 mr-2 text-red-500" />
            Admin Dashboard
          </h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
        
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700">
              Administrator Access
            </CardTitle>
            <CardDescription>
              Logged in as: {userEmail || "admin@example.com"} (Administrator)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-red-700">Welcome to the administrator dashboard. You have full system access.</p>
          </CardContent>
          <CardFooter className="border-t border-red-200 pt-6">
            <p className="text-sm text-red-600">Access level: Administrator</p>
          </CardFooter>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,234</div>
              <p className="text-sm text-gray-500">Total registered users</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Active Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">256</div>
              <p className="text-sm text-gray-500">Users active in last 24h</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <div className="text-xl font-medium">All Systems Normal</div>
              </div>
              <p className="text-sm text-gray-500">Last checked: {new Date().toLocaleTimeString()}</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-2">Email</th>
                    <th className="text-left py-2 px-2">Role</th>
                    <th className="text-left py-2 px-2">Status</th>
                    <th className="text-left py-2 px-2">Last Login</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-2">admin@example.com</td>
                    <td className="py-2 px-2"><span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">Admin</span></td>
                    <td className="py-2 px-2"><span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Active</span></td>
                    <td className="py-2 px-2">Just now</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">user@example.com</td>
                    <td className="py-2 px-2"><span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">User</span></td>
                    <td className="py-2 px-2"><span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Active</span></td>
                    <td className="py-2 px-2">Today, 10:24 AM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">jane.doe@example.com</td>
                    <td className="py-2 px-2"><span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">User</span></td>
                    <td className="py-2 px-2"><span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Active</span></td>
                    <td className="py-2 px-2">Yesterday</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">john.smith@example.com</td>
                    <td className="py-2 px-2"><span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">User</span></td>
                    <td className="py-2 px-2"><span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">Inactive</span></td>
                    <td className="py-2 px-2">2 weeks ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="ml-auto">View All Users</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}