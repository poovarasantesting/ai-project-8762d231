import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Lock, User } from "lucide-react";

// Sample credentials
const SAMPLE_CREDENTIALS = {
  user: { email: "user@example.com", password: "user123" },
  admin: { email: "admin@example.com", password: "admin123" }
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("user");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const credentials = loginType === "user" 
      ? SAMPLE_CREDENTIALS.user 
      : SAMPLE_CREDENTIALS.admin;
    
    if (email === credentials.email && password === credentials.password) {
      // Store login info in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", loginType);
      localStorage.setItem("userEmail", email);
      
      toast({
        title: "Login successful",
        description: `Welcome, ${loginType === "admin" ? "Administrator" : "User"}!`,
      });
      
      // Redirect based on role
      navigate(loginType === "admin" ? "/admin-dashboard" : "/user-dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <Tabs defaultValue="user" onValueChange={setLoginType}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="user">User</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
          
          <CardContent className="pt-6">
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={loginType === "user" ? "user@example.com" : "admin@example.com"}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={loginType === "user" ? "user123" : "admin123"}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-3"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </div>
            </form>
            
            <div className="mt-4 text-sm text-gray-500">
              <div className="font-medium">Sample Credentials:</div>
              <div className="mt-1">
                {loginType === "user" ? (
                  <div>
                    <div>Email: user@example.com</div>
                    <div>Password: user123</div>
                  </div>
                ) : (
                  <div>
                    <div>Email: admin@example.com</div>
                    <div>Password: admin123</div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Tabs>
        <CardFooter className="flex justify-center border-t pt-6">
          <p className="text-sm text-gray-600">
            This is a demo app with sample credentials
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}