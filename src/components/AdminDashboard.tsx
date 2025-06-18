import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAdmin, getUserFromLocalStorage, clearUserFromLocalStorage, users } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LogOut, UserCog, Users } from "lucide-react";
import toast from "react-hot-toast";

export function AdminDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is admin
    if (!isAdmin()) {
      toast.error("You don't have permission to access this page");
      navigate("/login");
      return;
    }
    
    const user = getUserFromLocalStorage();
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
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {currentUser.name}</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              User Management
            </CardTitle>
            <CardDescription>Manage all users in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.role === 'admin' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                      }`}>
                        {user.role}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <UserCog className="h-5 w-5 mr-2 text-primary" />
              Admin Overview
            </CardTitle>
            <CardDescription>System statistics and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span>Total Users</span>
                <span className="font-medium">{users.length}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Admin Users</span>
                <span className="font-medium">{users.filter(u => u.role === 'admin').length}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Regular Users</span>
                <span className="font-medium">{users.filter(u => u.role === 'user').length}</span>
              </div>
              <div className="mt-4">
                <Button className="w-full" variant="outline">View Full Analytics</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}