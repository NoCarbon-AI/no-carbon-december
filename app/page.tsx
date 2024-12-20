"use client";
import Link from "next/link";
import React, { useState } from "react"; // Add useState
import Particles from "./components/particles";
import Image from "next/image";
import TypewriterEffect from "./components/TypewriterEffect";
import InvitePopup from "./components/InvitePopup"; // Add this import
import { useEffect } from 'react';
import { gsap } from 'gsap';

const navigation = [
  { name: "Have an invite", href: "#" }, // Changed href to # for popup trigger
  { name: "What's that?", href: "/contact" },
];

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Add state for popup

  const handleInviteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Logo - Added to top left corner */}
      <div className="absolute top-4 left-4 z-50">
        <Image
          src="/NoCarbon-Logo.png"
          alt="NoCarbon Logo"
          width={120}
          height={120}
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
        />
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ zIndex: -20 }}
        >
          <source src="/nocarbon-landing-video.mp4" type="video/mp4" />
        </video>
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: -15 }} />
      </div>

      {/* Modified Navigation */}
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={item.name === "Have an invite" ? handleInviteClick : undefined}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
        No AI on a Dead Planet
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm flex flex-wrap sm:flex-nowrap justify-center items-center gap-1" style={{ color: '#00FF00' }}>
          <TypewriterEffect 
            text="With us, you're not just saving "
            startDelay={2000}
            className="inline"
          />
          <TypewriterEffect 
            text="pounds 💰;"
            startDelay={3500}
            className="font-bold inline"
          />
          <TypewriterEffect 
            text=" you're making the planet "
            startDelay={5000}
            className="inline"
          />
          <TypewriterEffect 
            text="greener 🌍"
            startDelay={6500}
            className="font-bold inline"
            showCursor={true}
          />
        </h2>
      </div>

      {/* Add Popup Component */}
      <InvitePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
      {/* Bottom right signature */}
<div className="fixed bottom-4 right-4 z-50">
  <div 
    className="signature-container text-xs sm:text-[11px] font-light tracking-wide flex items-center gap-1.5 opacity-0"
  >
    <span className="text-zinc-400 hover:text-zinc-100 transition-all duration-300">
      with{" "}
      <span className="heart-icon inline-block">❤️</span>
      {" "}from Richmond{" "}
      <span className="london-icon inline-block">🇬🇧</span>
      {" "}London
    </span>
  </div>
</div>
{/* Copyright notice */}
<div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
  <div className="text-[10px] text-zinc-500 hover:text-zinc-400 transition-colors duration-300 opacity-70">
    © NoCarbon Ltd, 2025
  </div>
</div>
    </div>
  );
}