"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen mt-10">
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-normal">
          Discover, share, and get inspired by stunning{" "}
          <span className="text-red-500">PFPs.</span>
        </h1>

        <SignedOut>
          <Link href="/sign-in">
            <div
              className="flex items-center gap-2 py-2 px-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 mt-6 mx-auto w-fit cursor-pointer"
              aria-label="Get Started"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        </SignedOut>

        <SignedIn>
          <Link href="/dashboard">
            <div
              className="flex items-center gap-2 py-2 px-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 mt-6 mx-auto w-fit cursor-pointer"
              aria-label="Dashboard"
            >
              <span>Dashboard</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        </SignedIn>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-10 left-20">
          <Image
            src="https://photoshulk.com/wp-content/uploads/aesthetic-pfp-emo.jpg"
            alt="Floating Image 1"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="absolute top-20 right-16">
          <Image
            src="https://photoshulk.com/wp-content/uploads/emu-otori-cute-pfp-3.jpg"
            alt="Floating Image 2"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="absolute bottom-20 right-96">
          <Image
            src="https://i.pinimg.com/736x/c9/5d/10/c95d10759d0b2c3170526eeee3155b64.jpg"
            alt="Floating Image 2"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="absolute bottom-10 left-96">
          <Image
            src="https://photoshulk.com/wp-content/uploads/gojo-pfp-cat-2.jpg"
            alt="Floating Image 2"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="absolute bottom-20 left-28">
          <Image
            src="https://photoshulk.com/wp-content/uploads/best-meme-pfp-for-school.jpg"
            alt="Floating Image 3"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="absolute bottom-16 right-24">
          <Image
            src="https://avatars.githubusercontent.com/u/87312278"
            alt="Floating Image 4"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="absolute left-1/3 transform">
          <Image
            src="https://avatars.githubusercontent.com/u/8079861"
            alt="Floating Image 5"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="absolute right-1/3 transform">
          <Image
            src="https://i.pinimg.com/236x/85/74/e8/8574e88ff1c57bf62b6a9b0c76ec1d93.jpg"
            alt="Floating Image 5"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}