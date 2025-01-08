// /app/components/ServiceArea.tsx
'use client';

import React from 'react';

export const SimpleLogos = () => {
    return (
      <div className="mt-16 mb-16 flex justify-around items-center w-full px-4">
        {/* Cloud with Sun Logo */}
        <div className="w-32 h-32 flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full stroke-white fill-none stroke-[2]"
          >
            <circle cx="35" cy="40" r="15" /> {/* Sun */}
            <path d="M50 50 Q65 45, 70 50 Q80 55, 75 60 Q70 70, 60 65 Q50 65, 45 60 Q40 55, 50 50" /> {/* Cloud */}
          </svg>
        </div>
  
        {/* Laptop under Tree Logo */}
        <div className="w-32 h-32 flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full stroke-white fill-none stroke-[2]"
          >
            <path d="M50 20 L50 50 L30 50 L70 50" /> {/* Tree trunk */}
            <path d="M30 35 Q50 15, 70 35" /> {/* Tree top */}
            <rect x="35" y="60" width="30" height="20" /> {/* Laptop base */}
            <path d="M35 60 L65 60 L65 45 L35 45 Z" /> {/* Laptop screen */}
          </svg>
        </div>
  
        {/* Semiconductor with Flower Logo */}
        <div className="w-32 h-32 flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full stroke-white fill-none stroke-[2]"
          >
            <rect x="30" y="40" width="40" height="40" /> {/* Semiconductor */}
            <path d="M35 40 L35 80 M45 40 L45 80 M55 40 L55 80 M65 40 L65 80" /> {/* Circuit lines */}
            <circle cx="50" cy="30" r="5" /> {/* Flower center */}
            <path d="M50 25 Q50 15, 55 20 M50 25 Q60 15, 55 20 M50 25 Q40 15, 45 20 M50 25 Q50 15, 45 20" /> {/* Flower petals */}
          </svg>
        </div>
      </div>
    );
  };