'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ServiceArea = () => {
  const cloudRef = useRef<SVGPathElement>(null);
  const infinityRef = useRef<SVGPathElement>(null);
  const scribbleRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Function to calculate path length
    const getPathLength = (pathElement: SVGPathElement) => {
      return pathElement.getTotalLength();
    };

    // Setup each path
    [cloudRef, infinityRef, scribbleRef].forEach((ref) => {
      if (ref.current) {
        const pathLength = getPathLength(ref.current);
        
        // Initial state
        gsap.set(ref.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        });

        // Create hover animations
        ref.current.addEventListener('mouseenter', () => {
          gsap.to(ref.current, {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.inOut"
          });
        });

        ref.current.addEventListener('mouseleave', () => {
          gsap.to(ref.current, {
            strokeDashoffset: pathLength,
            duration: 1,
            ease: "power2.inOut"
          });
        });
      }
    });
  }, []);

  return (
    <div className="mt-16 mb-16 flex justify-around items-center w-full px-4 py-12 relative z-10">
      {/* Cloud SVG */}
      <div className="w-40 h-40 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            ref={cloudRef}
            className="stroke-zinc-100 fill-none hover:cursor-pointer"
            strokeWidth="2"
            d="M25 60 
               C20 60, 15 55, 15 50 
               C15 45, 20 40, 25 40 
               C25 30, 35 20, 45 20 
               C60 20, 70 35, 70 45 
               C80 45, 85 55, 85 60 
               C85 70, 75 75, 70 75 
               C65 75, 35 75, 30 75 
               C20 75, 15 65, 25 60"
          />
        </svg>
      </div>

      {/* Infinity SVG */}
      <div className="w-40 h-40 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            ref={infinityRef}
            className="stroke-white fill-none hover:cursor-pointer"
            strokeWidth="2"
            d="M30 50 
               C30 35, 45 35, 50 50 
               C55 65, 70 65, 70 50 
               C70 35, 55 35, 50 50 
               C45 65, 30 65, 30 50"
          />
        </svg>
      </div>

      {/* Scribble SVG */}
      <div className="w-40 h-40 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            ref={scribbleRef}
            className="stroke-white fill-none hover:cursor-pointer"
            strokeWidth="2"
            d="M20 50 
               C30 30, 40 70, 50 40 
               C60 10, 70 80, 80 30 
               C90 50, 75 70, 60 50 
               C45 30, 30 60, 20 40 
               C10 20, 40 10, 50 30 
               C60 50, 70 20, 80 40"
          />
        </svg>
      </div>
    </div>
  );
};