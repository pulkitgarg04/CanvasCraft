"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  interface FormData {
    name: string;
    username: string;
    email: string;
    password: string;
  }

  interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    username: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
  }

  interface RegisterFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

  interface FormData {
    name: string;
    username: string;
    email: string;
    password: string;
  }

  const handleSubmit = async (e: React.FormEvent<RegisterFormElement>) => {
    e.preventDefault();

    const formData: FormData = {
      name: e.currentTarget.elements.name.value,
      username: e.currentTarget.elements.username.value,
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Account created successfully!");
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 flex flex-col">
        <div className="bg-gray-950 h-1/2 w-full text-white flex flex-col justify-center items-center gap-5">
          <h2 className="font-bold text-3xl uppercase">CanvasCraft</h2>
          <p className="font-semibold text-xl px-5 text-center">
            Upload and Share aesthetic PFPs with ease.
          </p>
        </div>
        <div className="h-1/2 w-full">
          <Image
            src="https://i.pinimg.com/originals/57/0e/d5/570ed5235d079942b046e31500f3af87.gif"
            alt="Sign In Animation"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className="w-2/3 flex flex-col justify-center px-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Signup for CanvasCraft
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
          <div className="flex gap-5 w-full justify-center">
            <div className="flex flex-col w-1/3">
              <label htmlFor="name" className="text-gray-600 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 border-gray-300 p-3 rounded-lg w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label htmlFor="username" className="text-gray-600 font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border-2 border-gray-300 p-3 rounded-lg w-full"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div className="flex flex-col w-2/3">
            <label htmlFor="email" className="text-gray-600 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 border-gray-300 p-3 rounded-lg w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col relative w-2/3">
            <label htmlFor="password" className="text-gray-600 font-semibold">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="border-2 border-gray-300 p-3 rounded-lg w-full"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-start gap-2 w-2/3">
            <input type="checkbox" id="terms" className="mt-1" required />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I agree with CanvasCraft&apos;s Terms of Service, Privacy Policy, and Settings.
            </label>
          </div>

          <button
            type="submit"
            className="px-10 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}