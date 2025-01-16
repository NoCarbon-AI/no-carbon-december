'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const TRexAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    
    gsap.set(trexRef.current, { x: -100 });
    
    tl.to(trexRef.current, {
      x: '120vw',
      duration: 4,
      ease: "none",
    })
    .to(trexRef.current, {
      y: -50,
      duration: 0.5,
      ease: "power1.out",
      repeat: 2,
      yoyo: true,
      offset: 1.5
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-32 mb-8 overflow-hidden">
      {/* T-Rex */}
      <div ref={trexRef} className="absolute bottom-0 w-24 h-24">
        <div className="relative w-full h-full">
          {/* Body */}
          <div className="absolute bottom-0 right-0 w-16 h-20 bg-white rounded-t-lg"></div>
          
          {/* Head */}
          <div className="absolute top-0 right-0 w-12 h-8 bg-white">
            {/* Eye */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
            {/* Mouth */}
            <div className="absolute bottom-0 right-0 w-8 h-3 bg-white">
              <div className="absolute top-1 right-1 w-4 h-px bg-black"></div>
            </div>
          </div>
          
          {/* Arms */}
          <div className="absolute top-8 right-6 w-4 h-3 bg-white"></div>
          
          {/* Legs */}
          <div className="leg-back absolute bottom-0 right-2 w-3 h-8 bg-white animate-legMove"></div>
          <div className="leg-front absolute bottom-0 right-10 w-3 h-8 bg-white animate-legMove delay-100"></div>
        </div>
      </div>

      {/* Obstacles */}
      <div className="absolute bottom-0 w-full">
        <div className="absolute bottom-0 left-[40%] w-4 h-12 bg-white"></div>
        <div className="absolute bottom-0 left-[60%] w-4 h-10 bg-white"></div>
      </div>

      {/* Ground line */}
      <div className="absolute bottom-0 w-full h-px bg-white"></div>
    </div>
  );
};