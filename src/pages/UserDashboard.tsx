import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { LogOut, User } from "lucide-react";

export default function UserDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const userEmail = localStorage.getItem("userEmail");
  
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userRole = localStorage.getItem("userRole");
    
    if (!isLoggedIn || userRole !== "user") {
      toast({
        title: "Access denied",
        description: "Please log in as a user to access this page",
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
      description: "You have been successfully logged out",
    });
    
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Welcome, User!
            </CardTitle>
            <CardDescription>
              You are logged in as: {userEmail || "user@example.com"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is your user dashboard where you can view and manage your personal information.</p>
          </CardContent>
          <CardFooter className="border-t pt-6">
            <p className="text-sm text-gray-500">User access level: Standard</p>
          </CardFooter>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="pb-2 border-b">Logged in today at {new Date().toLocaleTimeString()}</li>
                <li className="pb-2 border-b">Profile updated yesterday</li>
                <li className="pb-2 border-b">Password changed last week</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Email:</span>
                  <span>{userEmail || "user@example.com"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Account Type:</span>
                  <span>Standard User</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Member Since:</span>
                  <span>April 2023</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}