"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Bookmark,
  Download,
  Share2,
  SendHorizontal,
  MoveLeft,
} from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="p-4">
      <button
        onClick={() => router.back()}
        className="bg-gray-200 rounded-full p-2 flex items-center hover:bg-gray-300 transition mb-4"
      >
        <MoveLeft size={20} />
        <span className="ml-2 text-sm">Back</span>
      </button>

      <div className="flex flex-col md:flex-row items-start gap-4 max-w-full overflow-hidden">
        <div className="flex-1 max-w-full">
          <div className="relative w-full h-auto overflow-hidden">
            <Image
              src="https://photoshulk.com/wp-content/uploads/emu-otori-cute-pfp-3.jpg"
              alt="Post Image"
              width={800}
              height={800}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <Link href="/profile">
            <div className="flex items-center gap-4">
              <Image
                src="https://avatars.githubusercontent.com/u/87312278"
                alt="User Avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">Pulkit Garg</h2>
                <p className="text-sm text-gray-500">@pulkitgarg04</p>
              </div>
            </div>
          </Link>

          <p className="text-gray-700 text-base">
            A beautiful capture of the sunset that reminds us how fleeting and
            precious moments can be.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-1 px-3 py-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition">
              <Heart size={20} />
              <span className="text-sm">120</span>
            </button>
            <button className="flex items-center px-3 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition">
              <Download size={20} />
            </button>
            <button className="flex items-center px-3 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition">
              <Bookmark size={20} />
            </button>
            <button className="flex items-center px-3 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition">
              <Share2 size={20} />
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            <div className="flex flex-col gap-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              <div className="flex items-center gap-4 my-2">
                <Image
                  src="https://avatars.githubusercontent.com/u/8079861"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-gray-300"
                />
                <button className="px-4 py-2 bg-indigo-400 text-white rounded-full hover:bg-indigo-500 transition mr-4">
                  <SendHorizontal size={15} />
                </button>
              </div>

              {[...Array(15)].map((_, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src="https://avatars.githubusercontent.com/u/87312278"
                    alt="Commenter Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold">Jane Smith</p>
                    <p className="text-gray-600 text-sm">
                      This photo is stunning! Love the composition.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}