"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";
import Image from "next/image";
import TypewriterEffect from "./components/TypewriterEffect";
import InvitePopup from "./components/InvitePopup";
import { gsap } from 'gsap';

const navigation = [
  { name: "Have an invite", href: "#", iconId: "flag-icon" },
  { name: "What's that?", href: "/contact", iconId: "confused-icon" },
];

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInviteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  useEffect(() => {
    // Only setup hover animations for desktop
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      navigation.forEach((item, index) => {
        const link = document.querySelector(`#nav-item-${index}`);
        const icon = document.querySelector(`#${item.iconId}`);
        
        if (link && icon) {
          gsap.set(icon, { 
            opacity: 0,
            scale: 0.5,
            x: index === 0 ? -20 : 20
          });

          link.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              opacity: 1,
              scale: 1,
              x: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          link.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              opacity: 0,
              scale: 0.5,
              x: index === 0 ? -20 : 20,
              duration: 0.3,
              ease: "power2.in"
            });
          });
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Logo */}
      <div className="absolute top-4 left-4 z-50">
        <Image
          src="/NoCarbon-Logo.png"
          alt="NoCarbon Logo"
          width={120}
          height={120}
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
        />
      </div>

      {/* Navigation */}
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item, index) => (
            <li key={item.name}>
              <div className="relative" id={`nav-item-${index}`}>
                <Link
                  href={item.href}
                  onClick={item.href === "#" ? handleInviteClick : undefined}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
                <div
                  id={item.iconId}
                  className="absolute pointer-events-none text-white hidden md:block"
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                    [index === 0 ? 'left' : 'right']: '-24px'
                  }}
                >
                  {index === 0 ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                      <line x1="4" y1="22" x2="4" y2="15" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 15h8M9 9h.01M15 9h.01" />
                    </svg>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Rest of your existing content */}
      <InvitePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}