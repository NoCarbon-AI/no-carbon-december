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

    // Get all span elements inside the container
    const letterElements = textElement.querySelectorAll('span');
    
    // Initially set all letters below the viewport
    gsap.set(letterElements, { 
      opacity: 0,
      y: 100 // Start from further below
    });

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top bottom", // Start when the top of the element hits the bottom of the viewport
        end: "top center", // End when the top of the element hits the center of the viewport
        scrub: 1.5, // Smooth scrubbing effect
        markers: false, // Set to true for debugging
      }
    });

    // Split animation for "No" and "Carbon"
    const noLetters = Array.from(letterElements).slice(0, 2);
    const carbonLetters = Array.from(letterElements).slice(2);

    // Animate "No"
    tl.to(noLetters, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    })
    // Animate "Carbon" with a slight delay
    .to(carbonLetters, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.08,
      ease: "power2.out"
    }, "-=0.5"); // Overlap with previous animation

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full py-16 mt-16 border-t border-zinc-800">
      <div className="flex justify-center items-center">
        <div ref={textRef} className="flex overflow-hidden">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-300 transition-all duration-300"
              style={{
                display: 'inline-block', // Ensures proper animation
                willChange: 'transform, opacity' // Performance optimization
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