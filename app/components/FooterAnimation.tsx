"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FooterAnimation = () => {
  const textRef = useRef(null);
  const letters = "NoCarbon".split("");

  useEffect(() => {
    const textElement = textRef.current;
    
    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top bottom-=100",
        end: "bottom center",
        scrub: 1,
      }
    });

    // Animate each letter
    gsap.set(textElement?.children, { 
      opacity: 0,
      y: 50 
    });

    tl.to(textElement?.children, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    });

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
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};