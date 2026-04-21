import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

export const MainLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex-flex mt-14">
        <Sidebar />
        <main className="flex-1 ml-60 pt-6  pr-6  pb-0  pl-6  overflow-y-auto">
          {/* 各ページがここに挿入される */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};