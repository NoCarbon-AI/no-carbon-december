import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
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

      {/* Existing Navigation */}
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
        <h2 className="text-sm" style={{ color: '#00FF00' }}>
          <span className="block sm:inline">With us, you're not just <span className="font-bold">saving pounds</span>;</span>{" "}
          <span className="block sm:inline">you're making the <span className="font-bold">planet greener</span>.</span>
        </h2>
      </div>
    </div>
  );
}