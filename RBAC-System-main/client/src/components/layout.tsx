import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import SideMenu from "./sidemenu";

export default function Layout() {
  return (
    <main className="h-screen">
      <Navbar />
      <SideMenu />
      <Outlet />
    </main>
  );
}
