import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User, Calendar, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export function Dashboard() {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
    
    const email = localStorage.getItem("userEmail") || "User";
    setUserEmail(email);
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const getFirstName = (email: string) => {
    // Extract first part of email or return "there" if no email
    if (!email || email === "User") return "there";
    return email.split("@")[0];
  };
  
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-lg shadow">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {getFirstName(userEmail)}!</h1>
            <p className="text-gray-500">Here's what's happening with your account today</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut size={16} />
            Sign Out
          </Button>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">User Profile</CardTitle>
              <User size={18} className="text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userEmail}</div>
              <p className="text-xs text-gray-500">Manage your account</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
              <Activity size={18} className="text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 actions</div>
              <p className="text-xs text-gray-500">In the last 30 days</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Last Login</CardTitle>
              <Clock size={18} className="text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Just now</div>
              <p className="text-xs text-gray-500">{new Date().toLocaleDateString()}</p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 border-b pb-4 mb-4">
              <Calendar className="h-10 w-10 text-blue-500" />
              <div>
                <h3 className="font-medium">Team Meeting</h3>
                <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="h-10 w-10 text-green-500" />
              <div>
                <h3 className="font-medium">Project Review</h3>
                <p className="text-sm text-gray-500">Friday, 2:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}