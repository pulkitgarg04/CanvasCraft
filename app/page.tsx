"use client";

import { WorldMap } from "../components/ui/world-map";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <div className="flex justify-between items-center px-10 gap-5 my-20">
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-xl py-8 px-6 w-1/3 h-full">
          <p className="text-3xl font-extrabold mb-2">100k+ Creators</p>
          <p className="text-base font-light text-center">
            A global community shaping the future of creativity.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-xl py-8 px-6 w-1/3 h-full">
          <p className="text-3xl font-extrabold mb-2">750k+ Designs</p>
          <p className="text-base font-light text-center">
            Unleash your style with the most stunning and creative PFPs.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-xl py-8 px-6 w-1/3 h-full">
          <p className="text-3xl font-extrabold mb-2">1M+ Inspirations</p>
          <p className="text-base font-light text-center">
            Discover ideas that spark your imagination and fuel creativity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl">
          Craft Your PFPs, and Share
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Unleash your creativity without limits. Design from anywhere,
          transforming your space into a personalized canvas. Perfect for
          Artists and Visionaries on the move.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            },
            end: {
              lat: 34.0522,
              lng: -118.2437,
            },
          },
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: -15.7975, lng: -47.8919 },
          },
          {
            start: { lat: -15.7975, lng: -47.8919 },
            end: { lat: 38.7223, lng: -9.1393 },
          },
          {
            start: { lat: 51.5074, lng: -0.1278 },
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: 43.1332, lng: 131.9113 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: -1.2921, lng: 36.8219 },
          },
        ]}
      />

      <Footer />
    </div>
  );
}
