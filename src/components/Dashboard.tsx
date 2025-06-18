import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UserRound, ShieldAlert, LogOut } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  
  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Welcome, {user.name}</CardTitle>
              <CardDescription>You are logged in as {user.role}</CardDescription>
            </div>
            <Button variant="outline" onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            {user.role === 'admin' ? (
              <ShieldAlert className="h-12 w-12 text-red-500 mr-4" />
            ) : (
              <UserRound className="h-12 w-12 text-blue-500 mr-4" />
            )}
            <div>
              <p className="text-lg font-medium">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-xs uppercase font-semibold mt-1 inline-block px-2 py-1 rounded-full bg-gray-100">
                {user.role}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {user.role === 'admin' && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Admin Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>View and manage user accounts.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Manage Users</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Configure system parameters.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Settings</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Audit Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Review system activity logs.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Logs</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
      
      <div>
        <h2 className="text-xl font-bold mb-4">User Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View and edit your personal information.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Edit Profile</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>My Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View your recent account activity.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Activity</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}