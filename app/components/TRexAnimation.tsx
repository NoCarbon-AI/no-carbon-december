// /app/components/TRexAnimation.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const TRexAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trexRef = useRef<HTMLDivElement>(null);
  const obstacleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    
    // Initial setup
    gsap.set(trexRef.current, { x: -100 });
    
    // Animation sequence
    tl.to(trexRef.current, {
      x: '120vw', // Move past the screen width
      duration: 4,
      ease: "none",
    })
    .to(trexRef.current, {
      y: -50,
      duration: 0.5,
      ease: "power1.out",
      repeat: 2,
      yoyo: true,
      offset: 1.5 // Jump during the run
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-24 mb-8 overflow-hidden"
    >
      {/* T-Rex */}
      <div
        ref={trexRef}
        className="absolute bottom-0 w-12 h-16"
      >
        <div className="w-full h-full relative">
          {/* Body */}
          <div className="absolute bottom-0 w-8 h-12 bg-white rounded-t-lg"></div>
          {/* Head */}
          <div className="absolute top-0 right-0 w-6 h-4 bg-white rounded-tr-lg"></div>
          {/* Arm */}
          <div className="absolute top-6 right-2 w-3 h-2 bg-white rounded"></div>
          {/* Leg */}
          <div className="absolute bottom-0 right-2 w-2 h-6 bg-white"></div>
        </div>
      </div>

      {/* Obstacles */}
      <div className="absolute bottom-0 w-full">
        <div ref={obstacleRef} className="absolute bottom-0 left-[40%] w-4 h-8 bg-white"></div>
        <div className="absolute bottom-0 left-[60%] w-4 h-6 bg-white"></div>
      </div>

      {/* Ground line */}
      <div className="absolute bottom-0 w-full h-px bg-white"></div>
    </div>
  );
};