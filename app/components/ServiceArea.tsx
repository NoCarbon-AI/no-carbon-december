'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ServiceArea = () => {
  const cloudRef = useRef(null);
  const treeRef = useRef(null);
  const circuitRef = useRef(null);

  useEffect(() => {
    // Cloud Animation Timeline
    const cloudTl = gsap.timeline({ repeat: -1 });
    cloudTl.to(cloudRef.current, {
      duration: 3,
      morphSVG: {
        shape: "M45 45 C50 35, 90 35, 80 50 C85 45, 90 60, 80 65 C80 70, 55 75, 45 65 C40 65, 35 55, 40 50 C35 50, 40 40, 45 45",
      },
      ease: "power1.inOut"
    })
    .to(cloudRef.current, {
      duration: 3,
      morphSVG: {
        shape: "M45 45 C45 45, 85 45, 75 55 C75 55, 85 65, 75 70 C75 70, 55 75, 45 65 C45 65, 35 60, 40 55 C40 55, 35 45, 45 45",
      },
      ease: "power1.inOut"
    });

    // Sun Rays Animation
    gsap.to(".sun-ray", {
      duration: 1.5,
      scale: 1.2,
      opacity: 0.5,
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Tree Animation
    gsap.to(".tree-leaves", {
      duration: 2,
      skewX: "5deg",
      transformOrigin: "bottom",
      repeat: -1,
      yoyo: true,
      ease: "power1.none"
    });

    // Circuit Animation
    const circuitTl = gsap.timeline({ repeat: -1 });
    circuitTl.to(".circuit-pulse", {
      duration: 1,
      strokeDashoffset: 0,
      stagger: 0.1,
      ease: "none"
    })
    .to(".circuit-pulse", {
      duration: 0.5,
      opacity: 0,
      stagger: 0.1
    });
  }, []);

  return (
    <div className="mt-16 mb-16 flex justify-around items-center w-full px-4 bg-black py-12">
      {/* Enhanced Cloud with Sun */}
      <div className="w-40 h-40 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Animated Sun */}
          <circle cx="35" cy="40" r="12" className="fill-none stroke-white" filter="url(#glow)"/>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              className="sun-ray stroke-white"
              x1="35"
              y1="40"
              x2={35 + Math.cos(angle * Math.PI / 180) * 20}
              y2={40 + Math.sin(angle * Math.PI / 180) * 20}
              strokeWidth="1"
              strokeLinecap="round"
            />
          ))}
          
          {/* Morphing Cloud */}
          <path
            ref={cloudRef}
            className="fill-none stroke-white"
            strokeWidth="2"
            d="M45 45 C45 45, 85 45, 75 55 C75 55, 85 65, 75 70 C75 70, 55 75, 45 65 C45 65, 35 60, 40 55 C40 55, 35 45, 45 45"
          />
        </svg>
      </div>

      {/* Enhanced Tree with Laptop */}
      <div className="w-40 h-40 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Tree */}
          <path
            className="tree-trunk stroke-white fill-none"
            d="M50 20 Q50 35 50 50"
            strokeWidth="2"
          />
          <path
            className="tree-leaves stroke-white fill-none"
            d="M30 50 Q50 10 70 50"
            strokeWidth="2"
          />
          
          {/* Laptop with Screen Glow */}
          <rect
            x="30"
            y="60"
            width="40"
            height="20"
            className="fill-none stroke-white"
            strokeWidth="2"
          />
          <rect
            x="35"
            y="45"
            width="30"
            height="15"
            className="fill-none stroke-white"
            strokeWidth="2"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.7;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      {/* Enhanced Circuit with Flower */}
      <div className="w-40 h-40 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Animated Circuit Paths */}
          {[35, 45, 55, 65].map((x, i) => (
            <path
              key={i}
              className="circuit-pulse stroke-white fill-none"
              d={`M${x} 45 L${x} 80`}
              strokeWidth="2"
              strokeDasharray="35"
              strokeDashoffset="35"
            />
          ))}
          
          {/* Pulsing Flower */}
          <g className="flower-group">
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <path
                key={i}
                className="stroke-white fill-none"
                d={`M50 30 Q${50 + Math.cos(angle * Math.PI / 180) * 15} ${30 + Math.sin(angle * Math.PI / 180) * 15} 50 ${30 + Math.cos((angle + 36) * Math.PI / 180) * 15}`}
                strokeWidth="1"
              >
                <animate
                  attributeName="d"
                  values={`M50 30 Q${50 + Math.cos(angle * Math.PI / 180) * 15} ${30 + Math.sin(angle * Math.PI / 180) * 15} 50 ${30 + Math.cos((angle + 36) * Math.PI / 180) * 15};
                          M50 30 Q${50 + Math.cos(angle * Math.PI / 180) * 20} ${30 + Math.sin(angle * Math.PI / 180) * 20} 50 ${30 + Math.cos((angle + 36) * Math.PI / 180) * 20};
                          M50 30 Q${50 + Math.cos(angle * Math.PI / 180) * 15} ${30 + Math.sin(angle * Math.PI / 180) * 15} 50 ${30 + Math.cos((angle + 36) * Math.PI / 180) * 15}`}
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};