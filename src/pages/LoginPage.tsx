import { LoginForm } from "@/components/LoginForm";
import { Toaster } from "@/components/ui/toaster";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <Toaster />
    </>
  );
}