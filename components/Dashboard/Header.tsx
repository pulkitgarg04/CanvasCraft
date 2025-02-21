import React from "react";
import Link from "next/link";
import { Search, BadgePlus } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-4 sm:px-8 md:px-16 py-3 fixed top-0 left-0 w-full z-10 border-b shadow-sm">
      <div className="text-xl sm:text-2xl font-extrabold text-indigo-600 tracking-tight">
        CanvasCraft
      </div>

      <div className="hidden sm:flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-indigo-500 transition w-full sm:w-1/2 md:w-1/3">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search PFPs, friends, categories..."
          className="bg-transparent flex-1 text-gray-700 placeholder-gray-500 focus:outline-none"
          aria-label="Search"
        />
      </div>

      <div className="flex items-center gap-4">
        <Link href="/submit">
          <button
            className="flex items-center bg-gray-100 px-4 sm:px-5 py-2 rounded-full shadow-sm hover:bg-gray-200 transition"
            aria-label="Upload New"
          >
            <BadgePlus className="w-5 h-5 mr-2" />
            <span className="hidden sm:block">Upload New</span>
          </button>
        </Link>

        <UserButton />
      </div>
    </header>
  );
};

export default Header;