"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";
import Image from "next/image";
import TypewriterEffect from "./components/TypewriterEffect";
import InvitePopup from "./components/InvitePopup";
import { gsap } from 'gsap';
import AIGradientText from './components/AIGradientText';

const navigation = [
  { name: "Have an invite", href: "#", iconId: "flag-icon", isMain: true },
  { name: "What's that?", href: "/contact", iconId: "confused-icon", isMain: false },
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
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Arrow animation
        const arrow = document.getElementById('attention-arrow');
        if (arrow) {
          gsap.set(arrow, { opacity: 0, y: 10 });
          
          gsap.to(arrow, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            repeat: -1,
            yoyo: true
          });
        }
    
        // Pulse effect
        /*
        const pulse = document.getElementById('pulse-effect');
        if (pulse) {
          gsap.to(pulse, {
            scale: 1.2,
            opacity: 0,
            duration: 1.5,
            repeat: -1,
            ease: "power2.inOut"
          });
        }
        */
    
        // Hover effect for main CTA
        const mainCta = document.querySelector('.main-cta');
        if (mainCta) {
          mainCta.addEventListener('mouseenter', () => {
            gsap.to(arrow, {
              scale: 1.2,
              duration: 0.3,
              ease: "power2.out"
            });
          });
    
          mainCta.addEventListener('mouseleave', () => {
            gsap.to(arrow, {
              scale: 1,
              duration: 0.3,
              ease: "power2.in"
            });
          });
        }
      }
  }, []);

useEffect(() => {
  const timer = setTimeout(() => {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    document.querySelector('.main-container')?.appendChild(shootingStar);

    const tl = gsap.timeline();
    
    // Initial position
    gsap.set(shootingStar, {
      x: -200,
      y: '10%',
      opacity: 0,
      rotate: -45
    });

    // Animation sequence
    tl.to(shootingStar, {
      x: window.innerWidth + 200,
      y: '30%',
      duration: 2,
      ease: "power1.inOut",
    })
    .to(shootingStar, {
      opacity: 1,
      duration: 0.3,
    }, 0)
    .to(shootingStar, {
      opacity: 0,
      duration: 0.3,
    }, 1.7)
    .add(() => {
      shootingStar.remove();
    });

  }, 3000); // Reduced delay to 3 seconds for testing

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black main-container">
      {/* Loading Overlay */}
      <div 
        id="loading-overlay" 
        className="fixed inset-0 z-50 hidden opacity-0 bg-black/90 flex items-center justify-center"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            {/* Spinning circle */}
            <div className="w-16 h-16 border-t-2 border-green-500 border-solid rounded-full animate-spin"></div>
            {/* Pulsing dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-zinc-400 text-sm font-medium">Wingardium Leviosa</p>
        </div>
      </div>
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
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: -15 }} />
      </div>

      {/* Navigation */}
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
        {navigation.map((item, index) => (
  <li key={item.name}>
    <div 
      className="relative" 
      id={`nav-item-${index}`}
    >
      {item.isMain && (
        <div className="attention-arrow" id="attention-arrow">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M12 19l0 -14M5 12l7 7 7-7"/>
          </svg>
        </div>
      )}
      <div className={`invite-link-container ${item.isMain ? 'main-cta' : ''}`}>
        <Link
          href={item.href}
          onClick={item.href === "#" ? handleInviteClick : undefined}
          className={`text-sm duration-500 ${
            item.isMain 
              ? 'text-green-400 hover:text-green-300' 
              : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {item.name}
        </Link>

       {/* item.isMain && <div className="pulse-effect" id="pulse-effect" />*/} 
      </div>
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
                      <path d="M8 15h8" />
                      <circle cx="9" cy="9" r="1" />
                      <circle cx="15" cy="9" r="1" />
                    </svg>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
        No <AIGradientText /> on a De☠️d Planet
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



      <InvitePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />

      {/* Bottom right signature */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="signature-container text-xs sm:text-[11px] font-light tracking-wide flex items-center gap-1.5 opacity-0">
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