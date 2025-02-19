"use client";

import Navbar from "./Navbar";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white to-black min-h-screen">
      <main className="p-10 flex flex-col items-center text-center font-sans">
        <img
          src="/profile.jpg"
          alt="Reval Rafifasya"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mb-4"
        />

        <h1 className="text-4xl font-bold text-black">Reval Rafifasya</h1>
        <h2 className="text-2xl text-black mt-2">Front End Developer</h2>

        <p className="mt-6 text-xl text-black">
          Passionate about crafting responsive and visually appealing web applications, with expertise in React, Tailwind, and modern web technologies.
        </p>
        <p className="mt-4 text-xl text-black">
          Experienced in building scalable and interactive user interfaces with a focus on performance optimization.
        </p>
        <p className="mt-4 text-xl text-black">
          Always eager to learn new technologies and collaborate on innovative projects to bring ideas to life.
        </p>
      </main>
    </div>
  );
}
