import Dashboard from "@/components/Dashboard/Dashboard";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[200px_1fr]">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
