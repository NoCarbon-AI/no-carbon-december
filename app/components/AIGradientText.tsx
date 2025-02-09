// app/components/AIGradientText.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AIGradientText() {
    const textRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLSpanElement>(null);
  

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    // Create a glow effect container
    gsap.set(containerRef.current, {
      position: 'relative',
      display: 'inline-block'
    });

    // Main animation timeline
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" }
    });

    // Random flicker effect function
    const createFlicker = () => {
      const duration = 0.05 + Math.random() * 0.1;
      const opacity = 0.5 + Math.random() * 0.5;
      
      gsap.to(textRef.current, {
        opacity: opacity,
        duration: duration,
        onComplete: () => {
          gsap.to(textRef.current, {
            opacity: 1,
            duration: duration
          });
        }
      });
    };

    // Gradient animation
    tl.to(textRef.current, {
      backgroundPosition: "200% center",
      duration: 2,
      ease: "none"
    });

    // Add random flickers
    setInterval(createFlicker, 2000 + Math.random() * 3000);

    // Hover effect
    containerRef.current.addEventListener('mouseenter', () => {
      gsap.to(textRef.current, {
        scale: 1.1,
        filter: 'brightness(1.2)',
        duration: 0.3
      });
    });

    containerRef.current.addEventListener('mouseleave', () => {
      gsap.to(textRef.current, {
        scale: 1,
        filter: 'brightness(1)',
        duration: 0.3
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <span ref={containerRef} className="relative inline-block">
      <span ref={textRef} className="ai-gradient-text">
        AI
      </span>
    </span>
  );
}