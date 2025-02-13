import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        CanvasCraft
      </Link>
      <ul className="flex gap-6 text-lg">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className="cursor-pointer hover:text-gray-600 text-gray-800"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-gray-800 hover:text-gray-800">
          Sign in
        </Link>
        <Link
          href="/register"
          className="flex items-center gap-2 py-2 px-4 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          <span>Sign up</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
