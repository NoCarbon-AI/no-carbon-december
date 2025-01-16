'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const TRexAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // Make it repeat infinitely
    
    gsap.set(trexRef.current, { x: -100 });
    
    // Run animation
    tl.to(trexRef.current, {
      x: '120vw',
      duration: 6,
      ease: "none",
    })
    .to(trexRef.current, {
      y: -80, // Higher jump
      duration: 0.4,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        // Reset position after reaching end
        gsap.set(trexRef.current, { x: -100 });
      }
    }, "-=4"); // Start jump during the run
  }, []); // Added missing closing bracket and dependency array

  return (
    <div ref={containerRef} className="relative w-full h-32 mb-8 overflow-hidden">
      {/* T-Rex */}
      <div ref={trexRef} className="absolute bottom-0 w-24 h-24">
        <div className="relative w-full h-full">
          {/* Body - Made more dinosaur-like */}
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-t-2xl transform -skew-x-12"></div>
          
          {/* Head - Larger and more defined */}
          <div className="absolute top-0 right-0 w-14 h-10 bg-white transform -skew-x-6">
            {/* Eye */}
            <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-black rounded-full"></div>
            {/* Mouth/Jaw */}
            <div className="absolute bottom-0 right-0 w-10 h-4 bg-white">
              <div className="absolute top-0 right-1 w-6 h-1 bg-black rounded-full"></div>
              {/* Teeth */}
              <div className="absolute top-1 right-2 w-1 h-1.5 bg-white"></div>
              <div className="absolute top-1 right-4 w-1 h-1.5 bg-white"></div>
            </div>
          </div>
          
          {/* Tiny Arms - Characteristic T-Rex feature */}
          <div className="absolute top-8 right-4 w-3 h-2 bg-white transform rotate-45"></div>
          
          {/* Legs - Thicker and more defined */}
          <div className="leg-back absolute bottom-0 right-2 w-4 h-10 bg-white rounded-b-lg animate-legMove"></div>
          <div className="leg-front absolute bottom-0 right-12 w-4 h-10 bg-white rounded-b-lg animate-legMove delay-100"></div>
          
          {/* Tail - Added for better recognition */}
          <div className="absolute bottom-8 left-0 w-12 h-4 bg-white transform -skew-x-12 rounded-l-lg"></div>
        </div>
      </div>

      {/* Ground line */}
      <div className="absolute bottom-0 w-full h-px bg-white"></div>
    </div>
  );
};