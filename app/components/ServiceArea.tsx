'use client';

import React from 'react';

export const ServiceArea = () => {
  return (
    <div className="mt-16 mb-16 flex justify-around items-center w-full px-4 bg-black py-12">
      {/* Cloud with Sun Logo - Enhanced */}
      <div className="w-32 h-32 flex items-center justify-center simple-logo floating-animation">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full stroke-white fill-none"
          strokeWidth="2"
        >
          {/* Enhanced Sun with rays */}
          <circle cx="35" cy="40" r="12" />
          <path d="M35 25 L35 30 M35 50 L35 55 M20 40 L25 40 M45 40 L50 40" />
          {/* Enhanced Cloud with better curves */}
          <path d="M45 45 C45 45, 85 45, 75 55 C75 55, 85 65, 75 70 C75 70, 55 75, 45 65 C45 65, 35 60, 40 55 C40 55, 35 45, 45 45" />
        </svg>
      </div>

      {/* Laptop under Tree Logo - Enhanced */}
      <div className="w-32 h-32 flex items-center justify-center simple-logo floating-animation" style={{animationDelay: '0.2s'}}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full stroke-white fill-none"
          strokeWidth="2"
        >
          {/* Enhanced Tree */}
          <path d="M50 20 L50 50" /> {/* Trunk */}
          <path d="M30 50 Q50 20 70 50" /> {/* Tree crown */}
          {/* Enhanced Laptop */}
          <path d="M30 60 L70 60 L70 80 L30 80 Z" /> {/* Base */}
          <path d="M35 60 L65 60 L65 45 L35 45 Z" /> {/* Screen */}
          {/* Added keyboard detail */}
          <path d="M35 70 L65 70 M35 75 L65 75" strokeWidth="1" />
        </svg>
      </div>

      {/* Semiconductor with Flower Logo - Enhanced */}
      <div className="w-32 h-32 flex items-center justify-center simple-logo floating-animation" style={{animationDelay: '0.4s'}}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full stroke-white fill-none"
          strokeWidth="2"
        >
          {/* Enhanced Semiconductor */}
          <rect x="30" y="45" width="40" height="35" />
          <path d="M35 45 L35 80 M45 45 L45 80 M55 45 L55 80 M65 45 L65 80" />
          {/* Enhanced Flower */}
          <circle cx="50" cy="30" r="4" />
          <path d="M50 26 C50 26, 45 20, 50 15 C55 20, 50 26, 50 26" />
          <path d="M54 30 C54 30, 60 25, 65 30 C60 35, 54 30, 54 30" />
          <path d="M46 30 C46 30, 40 25, 35 30 C40 35, 46 30, 46 30" />
          <path d="M50 34 C50 34, 45 40, 50 45 C55 40, 50 34, 50 34" />
        </svg>
      </div>
    </div>
  );
};