import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Users, Trophy, LayoutGrid } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen w-72 fixed left-0 top-16 border-r">
      <div className="flex justify-center my-5">
        <Link href="/profile">
          <button className="flex items-center gap-4 py-1 px-8 w-[250px] border-2 rounded-lg shadow-sm hover:shadow-lg transition">
            <Image
              src="https://photoshulk.com/wp-content/uploads/aesthetic-pfp-emo.jpg"
              alt="Profile Picture"
              width={50}
              height={50}
              className="rounded-full border-2 border-gray-300"
            />
            <div className="flex flex-col text-left">
              <span className="font-bold truncate max-w-[150px]">Pulkit Garg</span>
              <span className="text-xs text-gray-500 truncate max-w-[150px]">@pulkitgarg04</span>
            </div>
          </button>
        </Link>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-2 px-4">
          <Link
          href="/dashboard">
          <li>
            <button className="flex items-center w-full p-3 rounded-lg hover:text-indigo-800 hover:bg-gray-100  transition">
              <Home className="w-5 h-5 mr-3" />
              <span>Feed</span>
            </button>
          </li>
          </Link>

          <Link
          href="/dashboard/friends">
          <li>
            <button className="flex items-center w-full p-3 rounded-lg hover:text-indigo-800 hover:bg-gray-100  transition">
              <Users className="w-5 h-5 mr-3" />
              <span>Friends</span>
            </button>
          </li>
          </Link>

          <Link
          href="/dashboard/most-popular">
          <li>
            <button className="flex items-center w-full p-3 rounded-lg hover:text-indigo-800 hover:bg-gray-100  transition">
              <Trophy className="w-5 h-5 mr-3" />
              <span>Most Popular</span>
            </button>
          </li>
          </Link>

          <Link
          href="/dashboard/categories">
          <li>
            <button className="flex items-center w-full p-3 rounded-lg hover:text-indigo-800 hover:bg-gray-100  transition">
              <LayoutGrid className="w-5 h-5 mr-3" />
              <span>Categories</span>
            </button>
          </li>
          </Link>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;