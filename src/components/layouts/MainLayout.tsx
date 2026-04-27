import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";


export const MainLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex-flex mt-14">
        <main className="pt-6  pr-6  pb-0  pl-6  overflow-y-auto">
          {/* 各ページがここに挿入される */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};