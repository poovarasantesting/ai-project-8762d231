import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Logged in successfully",
        description: "Welcome back to Instagram!",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4">
        <Card className="w-full">
          <CardHeader className="space-y-1 items-center">
            <div className="text-3xl font-bold tracking-tighter mb-6">Instagram</div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="sr-only">
                  Phone number, username, or email
                </Label>
                <Input
                  id="username"
                  placeholder="Phone number, username, or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="border rounded-sm h-10 px-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border rounded-sm h-10 px-2 text-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 font-semibold rounded-lg"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log in"}
              </Button>
            </form>

            <div className="mt-4 flex items-center gap-2">
              <Separator className="flex-1" />
              <span className="text-xs font-semibold text-gray-500">OR</span>
              <Separator className="flex-1" />
            </div>

            <Button
              variant="ghost"
              className="w-full mt-4 flex items-center justify-center gap-2 text-blue-900"
            >
              <Facebook size={18} className="text-blue-900" />
              <span className="font-semibold">Log in with Facebook</span>
            </Button>

            <div className="mt-4 text-center">
              <Link to="/forgot-password" className="text-xs text-blue-900">
                Forgot password?
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-4">
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 font-semibold">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>

        <div className="text-center text-sm">
          <p>Get the app.</p>
          <div className="flex justify-center gap-4 mt-4">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
              alt="Download on App Store"
              className="h-10"
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="Get it on Google Play"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}