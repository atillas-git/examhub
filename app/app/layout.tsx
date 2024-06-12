import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";
interface IProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: IProps) => {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="hidden sm:col-span-2 sm:flex">
        <Sidebar />
      </div>
      <div className="col-span-12 sm:col-span-10 flex flex-col">
        <div className="sm:hidden">
          <Navbar />
        </div>
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
