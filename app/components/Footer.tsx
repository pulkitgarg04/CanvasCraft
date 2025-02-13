"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex md:flex-row justify-between items-center px-20 py-4 text-gray-700">
      <div>&copy; {new Date().getFullYear()} CanvasCraft. All rights reserved.</div>
      <p>
        Made with <span className="text-red-500">&hearts;</span> by{" "}
        <Link
          href="https://github.com/pulkitgarg04"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-500 hover:underline"
        >
          Pulkit Garg
        </Link>
      </p>
    </div>
  );
}