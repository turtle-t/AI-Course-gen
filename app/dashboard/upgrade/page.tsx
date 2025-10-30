"use client";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-10">
      {/* 🐍 Python Demo Course Card */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center max-w-md">
        {/* 📸 Image from public folder */}
        <Image
          src="/python-demo.png"
          alt="Python Demo"
          width={400}
          height={250}
          className="rounded-lg mb-4"
        />

        <h2 className="text-xl font-semibold mb-3">🐍 Python Demo Course</h2>
        <p className="text-gray-700 mb-6">
          Learn Python step-by-step — covering variables, loops, functions, and
          data structures. Perfect for beginners exploring programming.
        </p>

        {/* 🔘 Redirect Button */}
        <button
          onClick={() => (window.location.href = "https://quiz-lovat-kappa.vercel.app")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
        >
          Go to course →
        </button>
      </div>
    </div>
  );
}
