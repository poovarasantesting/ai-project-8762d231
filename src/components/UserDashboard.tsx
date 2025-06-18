import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage, clearUserFromLocalStorage } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, User, FileText, Bell } from "lucide-react";
import toast from "react-hot-toast";

export function UserDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (!user) {
      toast.error("Please login to continue");
      navigate("/login");
      return;
    }
    setCurrentUser(user);
  }, [navigate]);

  const handleLogout = () => {
    clearUserFromLocalStorage();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (!currentUser) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {currentUser.name}</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" />
              Profile
            </CardTitle>
            <CardDescription>Your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium">{currentUser.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium">{currentUser.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Role</span>
                <span className="font-medium capitalize">{currentUser.role}</span>
              </div>
              <div className="mt-4">
                <Button className="w-full" variant="outline">Edit Profile</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your recent actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Logged in successfully</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-muted mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Profile updated</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-muted mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Password changed</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2 text-primary" />
              Notifications
            </CardTitle>
            <CardDescription>Your recent notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium">Welcome to the dashboard!</p>
                <p className="text-xs text-muted-foreground">We're glad to have you here.</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium">Profile completion</p>
                <p className="text-xs text-muted-foreground">Complete your profile to unlock all features.</p>
              </div>
              <div className="mt-4">
                <Button className="w-full" variant="outline">View All</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}