import { Toaster } from "@/components/ui/toaster";
import { FacebookLogin } from "@/components/FacebookLogin";

function App() {
  return (
    <>
      <FacebookLogin />
      <Toaster />
    </>
  );
}

export default App;