"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FooterAnimation = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const letters = "NoCarbon".split("");

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const letterElements = textElement.querySelectorAll('span');
    
    // Set initial position - all letters start from same Y position
    gsap.set(letterElements, { 
      opacity: 0,
      y: 100,
      transformOrigin: "50% 50%" // Ensure consistent transform origin
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top bottom",
        end: "top center",
        scrub: 1,
        markers: false,
      }
    });

    // Animate all letters together with same parameters
    tl.to(letterElements, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: {
        amount: 0.3, // Total amount of stagger for all elements
        from: "start" // Start from first letter
      },
      ease: "power2.out"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full py-16 mt-16 border-t border-zinc-800">
      <div className="flex justify-center items-center">
        <div 
          ref={textRef} 
          className="flex overflow-hidden"
          style={{ 
            perspective: "none" // Prevent 3D rendering issues
          }}
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-300 transition-all duration-300"
              style={{
                display: 'inline-block',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)', // Force GPU acceleration
                backfaceVisibility: 'hidden' // Prevent 3D flipping
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};