import React from "react";
import Link from "next/link";

export default function RightSidebar() {
  return (
    <aside className="w-72 fixed right-0 top-0 mt-16 h-full border-l bg-white opacity-70 p-4">
      <Link href="/">
        <div className="text-sm text-center">
          <span className="hover:underline">CanvasCraft.</span> &copy; 2025. All
          rights reserved.
        </div>
      </Link>
      <div className="text-xs mt-5">
        <ul className="flex flex-wrap gap-2 justify-center">
          <li className="hover:underline cursor-pointer">CanvasCraft Rules</li>
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">User Agreement</li>
        </ul>
      </div>
    </aside>
  );
}
