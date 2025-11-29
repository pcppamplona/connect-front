
import Dashboard from "@/app/pages/dashboard";
import Login from "@/app/pages/login";
import { Route, Routes } from "react-router";

export default function RoutesApp() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
