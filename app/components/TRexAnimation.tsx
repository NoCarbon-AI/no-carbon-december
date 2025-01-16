'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const TRexAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 }); // Set to 0 so it only runs once
    
    gsap.set(trexRef.current, { x: -100 });
    
    // Simple run and jump animation that only happens once
    tl.to(trexRef.current, {
      x: '120vw',
      duration: 4,
      ease: "none",
    })
    .to(trexRef.current, {
      y: -50,
      duration: 0.5,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    }, "-=2"); // Jump during the run

  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-32 mb-8 overflow-hidden">
      {/* T-Rex */}
      <div 
        ref={trexRef} 
        className="absolute bottom-0 text-4xl"
        style={{ fontSize: '3rem' }}
      >
        🦖
      </div>

      {/* Obstacles - Cactus */}
      <div className="absolute bottom-0 w-full">
        <div className="absolute bottom-0 left-[40%] text-4xl">🌵</div>
        <div className="absolute bottom-0 left-[60%] text-4xl">🌵</div>
        <div className="absolute bottom-0 left-[80%] text-4xl">🌵</div>
      </div>

      {/* Ground line */}
      <div className="absolute bottom-0 w-full h-px bg-white"></div>
    </div>
  );
};