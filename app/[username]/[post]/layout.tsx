import React from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow ml-72 mt-12 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}