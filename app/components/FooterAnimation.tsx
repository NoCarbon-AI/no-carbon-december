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
    
    gsap.set(letterElements, { 
      opacity: 0,
      y: 100,
      transformOrigin: "50% 50%"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        markers: false,
      }
    });

    tl.to(letterElements, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: {
        amount: 0.3,
        from: "start"
      },
      ease: "power2.out"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div 
        className="flex justify-center items-center py-8"
        style={{
          background: 'linear-gradient(to top, black, transparent)',
        }}
      >
        <div 
          ref={textRef} 
          className="flex overflow-hidden"
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-300 transition-all duration-300"
              style={{
                display: 'inline-block',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
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